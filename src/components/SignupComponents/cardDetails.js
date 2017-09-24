import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import MonthlyPlan from './monthlyPlan';
import YearlyPlan from './yearlyPlan';
import {StripeProvider, Elements} from 'react-stripe-elements';

import CheckoutForm from './cardForm';

const CardDetails = ({payAndSignup, selectedPlan, email}) => {
    return (
        <section style={{marginLeft:'10%',marginRight:'10%',marginBottom:'10%'}}>
            <div className="row">
                <StripeProvider apiKey="pk_test_LG9W8l2EBcjDkNBUBJKgXFDw" >
                    <Elements>                    
                        <CheckoutForm />
                    </Elements>
                </StripeProvider>
                <div className="col-lg-3 col-lg-offset-1" style={{backgroundColor:"#fff", border:"2px solid #7a766f"}}>
                    <h3 className="getStartedColor panel-default">
                        <i style={{marginTop:'15px'}} className="getStartedColor fa fa-lg fa-shopping-cart"></i>
                    Your Cart:</h3>
                    { selectedPlan == 'monthly' ? <MonthlyPlan /> : <YearlyPlan /> }
                    <div className="row" style={{padding:'30px',marginRight:'10%'}}>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardDetails;