'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _stripe = require('stripe');

var _stripe2 = _interopRequireDefault(_stripe);

var _mongodb = require('mongodb');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _account = require('../models/account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let mdb;
// MongoClient.connect('mongodb://localhost/coffeedb', (err, db) => {
// 	assert.equal(null, err);
// 	mdb = db;
// });

var router = _express2.default.Router();

router.post('/chargePayment', function (req, resp) {
	var stripe = (0, _stripe2.default)('sk_test_7rExXpXbHKApkPKeXCONyo8F');
	console.log(req.body);
	stripe.customers.create({
		email: req.body.token.email,
		source: req.body.token.id
	}).then(function (customer) {
		return stripe.charges.create({
			amount: 50,
			description: "Opted for plan",
			currency: "usd",
			customer: customer.id
		}).then(function (charge) {
			return resp.send({
				success: charge.captured,
				id: charge.id
			});
		});
	});
});

router.post('/userSignup', function (req, res) {
	console.log(req.body);
	req.body['last_logged_in'] = (0, _moment2.default)().format();

	var account = new _account2.default({
		username: req.body.username,
		password: req.body.password,
		roastType: req.body.roastType,
		roastLocation: req.body.roastLocation,
		roastByDate: req.body.roastByDate,
		address: req.body.address,
		state: req.body.state,
		email: req.body.email,
		city: req.body.city,
		zipcode: req.body.zipcode,
		country: req.body.country,
		plan: req.body.plan,
		charge_id: req.body.charge_id
	});

	account.save(function (err) {
		if (err) throw err;
		return res.json({ success: true });
	});

	// res.send({
	// 	success: false
	// })
});

router.post('/userSignin', function (req, res) {

	console.log("request body:");
	console.log(req.body);
	var id = req.body.username;
	var pw = req.body.password;

	_account2.default.findOne({ username: req.body.username }, function (err, account) {
		if (err) throw err;

		// CHECK ACCOUNT EXISTANCY
		if (!account) {
			return res.status(401).json({
				error: "LOGIN FAILED",
				code: 1
			});
		}

		// CHECK WHETHER THE PASSWORD IS VALID
		// if(!account.validateHash(req.body.password)) {
		if (account.password != req.body.password) {
			return res.status(401).json({
				error: "LOGIN FAILED",
				code: 1
			});
		}

		// ALTER SESSION
		var session = req.session;
		session.loginInfo = {
			_id: account._id,
			username: account.username
		};

		// RETURN SUCCESS
		return res.json({
			user: account,
			success: true
		});
	});
});

/*
    GET CURRENT USER INFO GET /api/account/getInfo
*/
// router.get('/getinfo', (req, res) => {
//     if(typeof req.session.loginInfo === "undefined") {
//         return res.status(401).json({
//             error: 1
//         });
//     }
//     res.json({ info: req.session.loginInfo });
// });

exports.default = router;