import React from 'react';
import axios from 'axios'

import Header from './SignupComponents/header'
import Footer from './SignupComponents/footer'
import CreditCardForm from './SignupComponents/cardDetails'

// import loginRequest from '../actions/authentication';

const PaymentForm = ({ fieldValues, nextStep, saveValues, prevStep, onLogin }) => {
	const payAndSignup = (token) => {
        

        var data = JSON.stringify(fieldValues);
        window.console.log(data);

        axios.post('/api/payment/chargePayment', {token: token})
        .then((success) => {
            console.log(success);
            fieldValues = saveValues({'charge_id': success.data.id});
            var id = fieldValues.username;
            var pw = fieldValues.password;
            axios.post('/api/payment/userSignup', fieldValues)
                .then((response) => {
                    window.alert('Successfuly Signup!');
                    window.console.log(response);
                    onLogin(id, pw).then(
                        (success) => {
                            if(success) {
                                window.location = '/profile'
                            } else {
                                window.alert(success);
                            }
                        }
                    );
                    //window.location = '/profile';
                })
                .catch((error)=>{
                    window.alert('User Signup Failure!');
                    window.console.log(error);
                    //window.location = '/home';
                })

        })
        .catch((error)=>{
            window.alert('User Payment Failure!');
            window.location = '/home';
        });
    }

	return (
		<div>
			<Header h1="Payment Information" h2={<h3 className="getStartedColor">Last step! Confirm your purchase</h3>} />
		    <CreditCardForm payAndSignup={payAndSignup} selectedPlan={fieldValues.plan} />
	    </div>
	)
}

export default PaymentForm;
