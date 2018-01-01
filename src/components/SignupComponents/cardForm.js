import React from 'react';
import {injectStripe, CardElement, CardNumberElement, CardCVCElement, PostalCodeElement, CardExpiryElement} from 'react-stripe-elements';


class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: ''};

    this.handleSubmit = (ev) => {
      ev.preventDefault();

      this.props.stripe.createToken({name: 'Jenny Rosen'})
        .then((token) => {
            console.log('Received Stripe token:', token);
            if (token.error) {
              this.setState({error: token.error.message});
              return false;
            }
            this.setState({error: ''});
            this.props.payAndSignup(token);
          });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-lg-3 col-lg-offset-1">
            <div className="form-group row">
              <label style={{color:'#7a766f'}} htmlFor="Shipping_Name" className="col-3 col-form-label">Card Number</label>
              <div className="col-3 input-group">
                <span className="input-group-addon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Your payments are secured by our SSL and Stripe, a leader in encypted online payments"><i className="glyphicon glyphicon-lock" style={{color:'green'}}></i></span>
                <CardNumberElement className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label style={{color:'#7a766f'}} htmlFor="Shipping_Name" className="col-1 col-form-label">CVC</label>
              <div className="col-3 input-group">
                <span className="input-group-addon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Your payments are secured by our SSL and Stripe, a leader in encypted online payments"><i className="glyphicon glyphicon-lock" style={{color:'green'}}></i></span>
                <CardCVCElement className="form-control" />
              </div>
              <br />
              <div className="col-1">
                <label style={{color:'#7a766f'}} htmlFor="Shipping_Name" className="col-1 col-form-label">Zip Code</label>
                <PostalCodeElement className="form-control" />
              </div>
            </div>
            <div className="row">
              <div  className="col-lg-12" style={{color:'#f3bc42'}}>
                <div className="checkbox text-center">
                  <label><input type="checkbox" name="billing_checkbox" id="billing_checkbox" value="0" checked="" /></label>
                  <i><strong>My billing address and shipping address are the same</strong></i>
                </div>
              </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-offset-1">
          <div className="form-group row">
            <label style={{color:'#7a766f'}} htmlFor="Shipping_Name" className="col-3 col-form-label">Name on Card</label>            
            <div className="col-3">
              <input className="form-control" type="text" name="nameOnCard" id="example-text-input" />
            </div>
          </div>
          <div className="form-group row">
            <label style={{color:'#7a766f'}} htmlFor="Shipping_Name" className="col-3 col-form-label">Expiration Date</label>
            <div className="row">
                <div className="col-lg-7">
                    <CardExpiryElement className="form-control" />
                </div>
            </div>
            <div className="row" style={{padding:'30px',marginRight:'10%'}}>
              <span style={{color:'red'}}>{this.state.error}</span>
              <div className="col-lg-10 col-lg-offset-2" style={{textAlign:'right'}}>
                  <button type="submit" className="btn btn-filleddefault btn-lg" >Finish &amp; Pay</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);