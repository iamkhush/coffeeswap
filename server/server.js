import app from './main';
import mongoose from 'mongoose';
import config from './config';
import https from 'https';
import mongo_express from 'mongo-express/lib/middleware';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const port = 3000;
const httpsPort = 5000;
const devPort = 4000;
const db = mongoose.connection;

/* mongodb connection */
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect(config.mongodb.connectionString, {useMongoClient: true});

/* mongo express admin */
app.use('/admin', mongo_express(config));


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
