'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Account = new Schema({
    roastType: String,
    roastByDate: String,
    roastLocation: String,
    username: String,
    password: String,
    address: String,
    state: String,
    email: String,
    city: String,
    zipcode: String,
    country: String,
    plan: String,
    charge_id: String,
    created: { type: Date, default: Date.now }
    // last_logged_in: Date
});

// generates hash
// Account.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, 8);
// };

// compares the password
// Account.methods.validateHash = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

exports.default = _mongoose2.default.model('account', Account);