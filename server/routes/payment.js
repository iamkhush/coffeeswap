import express from 'express';
import stripePackage from 'stripe';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';
import moment from 'moment';
import Account from '../models/account';

const router = express.Router();

const requiresLogin = (req, res, next) => {
    if (req.session === undefined || req.session.loginInfo === undefined) {
        return res.status(401).json({
            error: 1
        });
    } else {
        next()
    }
};


router.post('/chargePayment', (req, resp) => {
	const stripe = stripePackage('sk_test_xKO56PkUDiyzGXTbQLuAQoq9');
	const stripePlan = req.body.formData.plan == 'monthly' ? 1:2;
	stripe.customers.create({
    	email: req.body.token.email,
    	source: req.body.token.token.id,
  	})
  	.then(customer =>
  		stripe.subscriptions.create({
  			customer: customer.id,
  			items: [{
  				plan: stripePlan
  			}]
  		})	      
	)
  	.then(charge => 
		resp.send({
			success: charge.captured,
			id: charge.id
		})
	)
});

router.post('/userSignup', (req, res) => {
	console.log(req.body);
	req.body['last_logged_in'] = moment().format();

	let account = new Account({
		username: req.body.username,
		password: Account.generateHash(req.body.password),
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
		charge_id: req.body.charge_id,
		billing_name: req.body.billing_name,
	    billing_address: req.body.billing_address,
	    billing_city: req.body.billing_city,
	    billing_country: req.body.billing_country,
	    billing_zipcode: req.body.billing_zipcode	
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

	// console.log("request body:");
	// console.log(req.body);
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
		if(!account.validateHash(req.body.password)) {
		// if (account.password != pw) {
			return res.status(401).json({
				error: "LOGIN FAILED",
				code: 1
			});
		}

		// ALTER SESSION
		req.session.loginInfo = {
			_id: account._id,
			username: account.username,
			plan: account.plan,
			address: account.address,
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