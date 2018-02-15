import React from 'react';
import update from 'immutability-helper';
import { connect } from 'react-redux';

import Header from './SignupComponents/header'
import Footer from './SignupComponents/footer'
import AddressForm from './SignupComponents/addressForm'
import Plans from './SignupComponents/plans'
import { checkUsernameRequest } from '../actions';

const PASSWORD_REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
const EMAIL_REGEXP = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]' +
    '{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');
const ZIPCODE_REGEXP = new RegExp('^[0-9]{5}(?:-[0-9]{4})?$');
    
class Shipping extends React.Component {
    constructor(props) {
        super(props);
        this.maxValuesInShipping = 12;

        this.selectPlan = (event) => {
            this.props.saveValues({plan: event.currentTarget.getAttribute('data-plan')});
            document.getElementsByClassName('planform')[0].querySelectorAll('a').forEach(function(el){el.classList.remove('roasttype-border')});
            event.currentTarget.classList.add('roasttype-border');
        };

        this.state = {
            error:{
                password: false,
                email: false,
                zipcode: false,
                username: false,
                unique: true
            }
        }

        this.editAddress = (event) => {
            let inputName = event.currentTarget.name;
            let address = {};
            console.log(inputName);
            address[inputName] = event.currentTarget.value;
            if (inputName == 'email'){
                if (EMAIL_REGEXP.test(address[inputName])) {
                    this.props.saveValues(address);
                    this.setState({
                        error: update(this.state.error, {
                            email: { $set: false }
                        })
                    })
                } else {
                    this.setState({
                        error: update(this.state.error, {
                            email: { $set: true }
                        })
                    })
                }
            } else if(inputName == 'zipcode'){
                if (ZIPCODE_REGEXP.test(address[inputName])) {
                    this.props.saveValues(address);
                    this.setState({
                        error: update(this.state.error, {
                            zipcode: { $set: false }
                        })
                    })
                } else {
                    this.setState({
                        error: update(this.state.error, {
                            zipcode: { $set: true }
                        })
                    })
                }
            }else if (inputName == 'password'){
                if (PASSWORD_REGEXP.test(address[inputName])) {
                    this.props.saveValues(address);
                    this.setState({
                        error: update(this.state.error, {
                            password: { $set: false }
                        })
                    })
                } else {
                    this.setState({
                        error: update(this.state.error, {
                            password: { $set: true }
                        })
                    })
                }
            }
            else if (inputName == 'username') {
                new Promise((resolve, reject) => {
                    resolve(this.props.checkUsernameRequest(address[inputName]));
                }).then(function(){
                    this.setState({
                        error: update(this.state.error, {
                            unique: { $set: this.props.isUnique }
                        })
                    });
                    if(this.props.isUnique){
                        this.props.saveValues(address);
                    }
                }.bind(this))
            }
            else{
                this.props.saveValues(address);
            }
        };
    }

    render() {
        return (
            <div>
                <Header h1="Shipping Information" h2={<h3 className="getStartedColor">Tell us where you'd like your coffee delivered: </h3>} />
                <AddressForm editAddress={this.editAddress} showError={this.state.error}
                />
                <Plans selectPlan={this.selectPlan} />
                <Footer maxFieldsCount={this.props.maxFieldsCount} currentFieldCount={this.props.currentFieldCount} 
                        maxValuesInThis={this.maxValuesInShipping} 
                        nextStep={this.props.nextStep} h1="Continue to Payment Information"
                        error={this.state.error} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isUnique: state.otherMethods.userinfo.unique
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkUsernameRequest: (name) => {
            return dispatch(checkUsernameRequest(name));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Shipping);