import React from 'react';
import axios from 'axios'

import Header from './SignupComponents/header'
import Footer from './SignupComponents/footer'
import CreditCardForm from './SignupComponents/cardDetails'


const PaymentForm = ({ fieldValues, nextStep, saveValues, prevStep, onLogin }) => {
	const payAndSignup = (token) => {
        
        var data = JSON.stringify(fieldValues);

        axios.post('/api/payment/chargePayment', {token: token, formData: fieldValues})
        .then((success) => {
            fieldValues = saveValues({'charge_id': success.data.id});
            var id = fieldValues.username;
            var pw = fieldValues.password;
            axios.post('/api/payment/userSignup', fieldValues)
                .then((response) => {
                    onLogin(id, pw).then(
                        (success) => {
                            if(success) {
                                window.location = '/profile'
                            } else {
                                window.alert(success);
                            }
                        }
                    );
                })
                .catch((error)=>{
                    window.alert('User Signup Failure!');
                    window.console.log(error);
                })

        })
        .catch((error)=>{
            window.alert('User Payment Failure!');
            window.location = '/home';
        });
    }

	return (
		<div>
			<Header h1="Payment Information" h2={<h3 className="getStartedColor">Last step!</h3>} />
            <div className="container">
		      <CreditCardForm payAndSignup={payAndSignup}
                              selectedPlan={fieldValues.plan} 
                              saveValues={saveValues} />
            </div>
	    </div>
	)
}

export default PaymentForm;
