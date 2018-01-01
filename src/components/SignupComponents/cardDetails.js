import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import MonthlyPlan from './monthlyPlan';
import YearlyPlan from './yearlyPlan';
import {StripeProvider, Elements} from 'react-stripe-elements';
import config from '../../../server/config';

import CheckoutForm from './cardForm';

const CardDetails = ({payAndSignup, selectedPlan, email}) => {
    return (
        <section style={{marginLeft:'10%',marginRight:'10%',marginBottom:'10%'}}>
            <div className="row">
                <StripeProvider apiKey={config.Stripe.key} >
                    <Elements>                    
                        <CheckoutForm payAndSignup={payAndSignup} />
                    </Elements>
                </StripeProvider>
                <div className="col-lg-3 col-lg-offset-1" style={{backgroundColor:"#fff", border:"2px solid #7a766f"}}>
                    <h3 className="getStartedColor panel-default">
                        <i style={{marginTop:'15px'}} className="getStartedColor fa fa-lg fa-shopping-cart"></i>
                    Your Cart:</h3>
                    { selectedPlan == 'monthly' ? <MonthlyPlan /> : <YearlyPlan /> }
                </div>
            </div>
        </section>
    );
};

export default CardDetails;