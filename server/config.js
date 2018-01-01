import defaultConfig from 'mongo-express/config.default.js';
import fs from 'fs';

// Mongo and MongoExpress config
defaultConfig.mongodb.connectionString='mongodb://localhost:27017/coffeedb';
defaultConfig.mongodb.admin=true;
defaultConfig.basicAuth = {
    username: 'admin', // not to be included for safety concerns
    password: 'admin'
}

// Session Config
defaultConfig.sessionKey = 'sessionKey';

// defaultConfig.httpsOptions = {
//     cert: fs.readFileSync('fullchain.pem'),
//     key: fs.readFileSync('privkey.pem')
// }

const StripeConfigs = {
    development: {
        key: 'pk_test_LG9W8l2EBcjDkNBUBJKgXFDw',
        secret: ''
    }
}
defaultConfig.Stripe = StripeConfigs['development'];

export default defaultConfig;