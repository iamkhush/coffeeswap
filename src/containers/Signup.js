import React from 'react';
import SignupPage from 'components/SignupPage';

import { connect } from 'react-redux';
import { loginRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';
import axios from 'axios';
class Signup extends React.Component{

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(id, pw) {
        return this.props.loginRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    let loginData = {
                        isLoggedIn: true,
                        username: id
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                    // window.alert('Welcome');
                    window.location = "/home";
                    return true;
                } else {
                    window.alert('Login Failure');
                    return false;
                }
            }
        );
    }    
  render() {
      return (
          <SignupPage onLogin={this.handleLogin}/>
      );
  }  
}

//export default Signup;

const mapStateToProps = (state) => {
    return {
        status: state.authReducer.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);