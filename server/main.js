import express from 'express';
import path from 'path';
import https from 'https';

import mongo_express from 'mongo-express/lib/middleware';

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

import mongoose from 'mongoose';
import session from 'express-session';

import api from './routes';
import config from './config';

const app = express();
const port = 3000;
const httpsPort = 5000;
const devPort = 4000;
const db = mongoose.connection;


app.use(morgan('dev'));
app.use(bodyParser.json());

/* mongodb connection */

db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect(config.mongodb.connectionString, {useMongoClient: true});

/* mongo express admin */
app.use('/admin', mongo_express(config));

/* use session */
app.use(session({
    secret: config.sessionKey,
    resave: false,
    saveUninitialized: true
}));

/* handle error */
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/', express.static(path.join(__dirname, './../public')));

app.use('/api', api);

/* support client-side routing */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

// add correct http headers
app.use(require('helmet')());

if (config.httpsOptions){
    // create https server
    https.createServer(config.httpsOptions, app).listen(httpsPort, () => {
        console.log('Express is listening on port', port);
    });
}
else {
    app.listen(port, () => {
        console.log('Express is listening on port', port);
    });
}

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}