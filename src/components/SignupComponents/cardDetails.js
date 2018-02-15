import PropTypes from 'prop-types';
import React from 'react';
import MonthlyPlan from './monthlyPlan';
import YearlyPlan from './yearlyPlan';
import {StripeProvider, Elements} from 'react-stripe-elements';
import config from '../../../server/config';

import CheckoutForm from './cardForm';

const CreditCardForm = ({...props}) => {
    return (
        <section style={{marginLeft:'10%',marginRight:'10%',marginBottom:'10%'}}>
            <div className="row">
                <div className="col-lg-8">
                    <StripeProvider apiKey={config.Stripe.key} >
                        <Elements>                    
                            <CheckoutForm 
                                payAndSignup={props.payAndSignup} 
                                saveValues={props.saveValues}
                            />
                        </Elements>
                    </StripeProvider>
                </div>
                <div className="col-lg-3 col-lg-offset-1" style={{backgroundColor:"#fff", border:"2px solid #7a766f"}}>
                    <h3 className="getStartedColor panel-default">
                        <i style={{marginTop:'15px'}} className="getStartedColor fa fa-lg fa-shopping-cart"></i>
                    Your Cart:</h3>
                    { props.selectedPlan == 'monthly' ? <MonthlyPlan /> : <YearlyPlan /> }
                </div>
            </div>
        </section>
    );
};

CreditCardForm.propTypes = {
    payAndSignup: PropTypes.func.isRequired,
    saveValues: PropTypes.func.isRequired,
    selectedPlan: PropTypes.string.isRequired
};

export default CreditCardForm;