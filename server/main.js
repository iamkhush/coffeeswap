import express from 'express';
import path from 'path';
import api from './routes';
import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY
import session from 'express-session';
import config from './config';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());


/* handle error */
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/', express.static(path.join(__dirname, './../public')));

/* use session */
app.use(session({
    secret: config.sessionKey,
    resave: false,
    saveUninitialized: true
}));

app.use('/api', api);

/* support client-side routing */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

// add correct http headers
app.use(require('helmet')());

export default app;