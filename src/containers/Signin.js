import React from 'react';
import { SigninModal } from 'components';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/authentication';
import { browserHistory } from 'react-router';
import axios from 'axios';

class Signin extends React.Component {

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
                    window.alert('Welcome');

                    //Materialize.toast('Welcome ' + id + '!', 2000);
                    // window.alert('Welcome' + Response)
                    // browserHistory.push('/');
                    window.location = "/home";
                    return true;
                } else {
                    window.alert('Login Failure');
                    return false;
                }
            }
        );
        // return axios.post('/api/payment/userSignin', {"username": id, "password": pw})
        // .then((response) => {
        //     window.alert('Welcome'+response.data.user.username);
        //     window.location = '/home';
        // })
        // .catch((error)=>{
        //     window.console.log(error);
        //     window.alert('User Signin Failure!');
        //     window.location = '/home';
        // })
    }

    render() {
        return (
            <div>
                <SigninModal onLogin={this.handleLogin}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(loginRequest(id, pw));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
