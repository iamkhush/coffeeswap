import defaultMongo from 'mongo-express/config.default.js';

defaultMongo.mongodb.connectionString='mongodb://localhost:27017/coffeedb';
defaultMongo.mongodb.admin=true;
defaultMongo.basicAuth = {
	username: '', // not to be included for safety concerns
	password: ''
}

export default defaultMongo;