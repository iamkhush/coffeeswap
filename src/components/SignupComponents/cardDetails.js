import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import MonthlyPlan from './monthlyPlan';
import YearlyPlan from './yearlyPlan';

const CardDetails = ({payAndSignup, selectedPlan, email}) => {
    return (
        <section style={{marginLeft:'10%',marginRight:'10%',marginBottom:'10%'}}>
            <div className="row">
                <div className="col-lg-3 col-lg-offset-4" style={{backgroundColor:"#fff", border:"2px solid #7a766f"}}>
                    <h3 className="getStartedColor panel-default">
                        <i style={{marginTop:'15px'}} className="getStartedColor fa fa-lg fa-shopping-cart"></i>
                    Your Cart:</h3>
                    { selectedPlan == 'monthly' ? <MonthlyPlan /> : <YearlyPlan /> }
                    <div className="row" style={{padding:'30px',marginRight:'10%'}}>
                        <div>
                            <StripeCheckout stripeKey="pk_test_LG9W8l2EBcjDkNBUBJKgXFDw" token={payAndSignup} 
                            name="The Coffee Swap" description={ selectedPlan == 'monthly' ? "Monthly Plan Subscription fees": "Yearly Plan Subscription fees" }
                            email={email}>
                                <button className="btn btn-primary">Enter Payment Information</button>
                            </StripeCheckout>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardDetails;