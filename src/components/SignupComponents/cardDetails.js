import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CardDetails = ({payAndSignup}) => {    
    return (
        <section style={{marginLeft:'10%',marginRight:'10%',marginBottom:'10%'}}>
            <div className="row">
                <div className="col-lg-3 col-lg-offset-4" style={{backgroundColor:"#fff", border:"2px solid #7a766f"}}>
                    <h3 className="getStartedColor">
                        <i style={{marginTop:'15px'}} className="getStartedColor fa fa-lg fa-shopping-cart"></i>
                    Your Cart:</h3>
                    <div className="panel-body text-center" style={{backgroundColor:'#fff', color:'#f3bc42'}}>
                        <h2><strong>$20/Month</strong></h2>
                        <i>Annual charge of $240</i>
                    </div>
                    <ul className="list-group text-center getStartedColor">
                        <li className="list-group-item" style={{color:'#b83d26'}}>
                            <i className="fa fa-check" style={{color:'#b83d26'}}></i> Discounted One time Rate - Save 10%
                        </li>
                        <li className="list-group-item"><i className="fa fa-check"></i> One package / month</li>
                        <li className="list-group-item"><i className="fa fa-check"></i> Month-to-Month Matches</li>
                        <li className="list-group-item"><i className="fa fa-check"></i> Shipping Included</li>
                    </ul>
                    <div className="row" style={{padding:'30px',marginLeft:'10%',marginRight:'10%'}}>
                        <div className="col-lg-10 col-lg-offset-3">
                            <StripeCheckout stripeKey="pk_test_F835qhEb8KN4AukSKeK2BMbQ" token={payAndSignup} >
                            <button className="btn btn-primary">Finish & Pay</button>
                            </StripeCheckout>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardDetails;