import React from 'react';

import Header from './SignupComponents/header'
import Footer from './SignupComponents/footer'
import AddressForm from './SignupComponents/addressForm'
import Plans from './SignupComponents/plans'

const EMAIL_REGEXP = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]' +
    '{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');

class Shipping extends React.Component {
    constructor(props) {
        super(props);
        this.maxValuesInShipping = 12;

        this.selectPlan = (event) => {
            this.props.saveValues({plan: event.currentTarget.getAttribute('data-plan')});
            document.getElementsByClassName('planform')[0].querySelectorAll('a').forEach(function(el){el.classList.remove('roasttype-border')});
            event.currentTarget.classList.add('roasttype-border');
        };

        this.state = {showEmailError: false}

        this.editAddress = (event) => {
            let inputName = event.currentTarget.name;
            let address = {};
            address[inputName] = event.currentTarget.value;
            if (inputName == 'email'){
                if (EMAIL_REGEXP.test(address[inputName])) {
                    this.props.saveValues(address);
                    this.setState({showEmailError: false});
                } else {
                    this.setState({showEmailError: true});
                }
            } else {
                this.props.saveValues(address);
            }
        };
    }

    render() {
        return (
            <div>
                <Header h1="Shipping Information" h2={<h3 className="getStartedColor">Tell us where you'd like your coffee delivered: </h3>} />
                <AddressForm editAddress={this.editAddress} showEmailError={this.state.showEmailError}/>
                <Plans selectPlan={this.selectPlan} />
                <Footer maxFieldsCount={this.props.maxFieldsCount} currentFieldCount={this.props.currentFieldCount} 
                        maxValuesInThis={this.maxValuesInShipping} 
                        nextStep={this.props.nextStep} h1="Review and Pay" />
            </div>
        )
    }
}

export default Shipping;