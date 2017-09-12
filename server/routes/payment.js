import express from 'express';
import stripePackage from 'stripe';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';
import moment from 'moment';
import Account from '../models/account';

// let mdb;
// MongoClient.connect('mongodb://localhost/coffeedb', (err, db) => {
// 	assert.equal(null, err);
// 	mdb = db;
// });

const router = express.Router();

router.post('/chargePayment', (req, resp) => {
	const stripe = stripePackage('sk_test_7rExXpXbHKApkPKeXCONyo8F');
	console.log(req.body);
	stripe.customers.create({
    	email: req.body.token.email,
    	source: req.body.token.id
  	})
  	.then(customer =>
	    stripe.charges.create({
	      amount:50,
	      description: "Opted for plan",
	      currency: "usd",
	      customer: customer.id
	})
  	.then(charge => 
		resp.send({
			success: charge.captured,
			id: charge.id
		})
	))
});

router.post('/userSignup', (req, res) => {
	console.log(req.body);
	req.body['last_logged_in'] = moment().format();

	let account = new Account({
		username: req.body.username,
		password: req.body.password,
		roastType: req.body.roastType,
		roastLocation: req.body.roastLocation,
		address: req.body.address,
		state: req.body.state,
		email: req.body.email,
		city: req.body.city,
		zipcode: req.body.zipcode,
		country: req.body.country,
		plan: req.body.plan,
		charge_id: req.body.charge_id,				
	});
		
	account.save( err => {
		if(err) throw err;
		return res.json({ success: true });
	});

	// res.send({
	// 	success: false
	// })
});


router.post('/userSignin', (req, res) => {

	console.log("request body:");
	console.log(req.body);
	var id = req.body.username;
	var pw = req.body.password;

	Account.findOne({ username: req.body.username}, (err, account) => {
		if(err) throw err;

		// CHECK ACCOUNT EXISTANCY
		if(!account) {
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
		let session = req.session;
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

export default router;