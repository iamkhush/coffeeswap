import React from 'react';
import ReactTooltip from 'react-tooltip';
import BillingAddress from './ShippingAddress';
import { injectStripe, CardElement, CardNumberElement, CardCVCElement,
         PostalCodeElement, CardExpiryElement } from 'react-stripe-elements';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      name: '',
      isLoading: false,
      showAddressForm: false,

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleShowAddressForm = this.toggleShowAddressForm.bind(this);

  }

  handleSubmit(ev){
    ev.preventDefault();
    this.setState({isLoading: true});
    this.props.stripe.createToken({name: this.state.name})
      .then((token) => {
          console.log('Received Stripe token:', token);
          if (token.error) {
            this.setState({
              error: token.error.message,
              isLoading: false
            });
            return false;
          }
          this.setState({error: ''});
          this.props.payAndSignup(token);
        });
  }

  toggleShowAddressForm(){
    this.setState((prevState) => {
      return {showAddressForm: !prevState.showAddressForm}
    })
  }

  handleInputChange(ev){
    ev.preventDefault();
    const inputName = ev.currentTarget.name;
    let address = {};
    address[inputName] = ev.currentTarget.value;
    if (inputName == 'billing_name'){
      this.setState({name: ev.currentTarget.value});
    }
    this.props.saveValues(address);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ReactTooltip>Your payments are secured by our SSL and Stripe, a leader in encypted online payments"</ReactTooltip>
        <div className="row">
          <div className="col-lg-5 col-lg-offset-1">
              <div className="input-group">
                <span className="input-group-addon">
                    <i data-tip className="glyphicon glyphicon-lock green"></i>
                </span>
                <CardNumberElement className="form-control" />
              </div>
              <div className="input-group col-lg-6 form-padding">
                <span className="input-group-addon">
                      <i className="glyphicon glyphicon-lock green"></i>
                </span>
                <CardCVCElement className="form-control" />
              </div>
          </div>
          <div className="col-lg-5">
            <div className="input-group col-lg-8">
                <CardExpiryElement className="form-control" />
            </div>
            <div className="input-group col-lg-12 form-padding">
              <input className="form-control" type="text" name="billing_name" 
                      onChange={this.handleInputChange} placeholder="Name" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="checkbox text-center" style={{color:'#f3bc42'}}>
            <label>
              <input type="checkbox" name="billing_checkbox" 
                     defaultChecked={this.state.showAddressForm}
                     onChange={this.toggleShowAddressForm}
              />
            </label>
            <i><strong>My billing address and shipping address are the same</strong></i>
          </div>
        </div>
        <div className="row">
        { 
          this.state.showAddressForm == true ? '': <BillingAddress handleInputChange={this.handleInputChange} />
        }
        </div>
        <div style={{padding:'30px',marginRight:'10%'}}>
            <span style={{color:'red'}}>{this.state.error}</span>
            <div className="col-lg-9" style={{textAlign:'right'}}>
                <button type="submit" className="btn btn-filleddefault btn-lg" disabled={
                  this.state.isLoading ? "disabled" : ""}>
                {
                  this.state.isLoading ? <span className="glyphicon glyphicon-refresh"></span>:''
                }
                Finish &amp; Pay</button>
            </div>
        </div>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);