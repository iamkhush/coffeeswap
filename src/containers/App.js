import React from 'react';
import { Header, Footer, SigninModal } from 'components';
import Signin from './Signin';
import { connect } from 'react-redux';
import { getStatusRequest, logoutRequest } from 'actions/authentication';

class App extends React.Component {
    
        constructor(props) {
            super(props);
            this.handleLogout = this.handleLogout.bind(this);
        }        
        
        componentDidMount() {
            // get cookie by name
            function getCookie(name) {
                var value = "; " + document.cookie;
                var parts = value.split("; " + name + "=");
                if (parts.length == 2) return parts.pop().split(";").shift();
            }
    
            // get loginData from cookie
            let loginData = getCookie('key');
    
            // if loginData is undefined, do nothing
            if(typeof loginData === "undefined") return;
    
            // decode base64 & parse json
            loginData = JSON.parse(atob(loginData));
    
            // if not logged in, do nothing
            if(!loginData.isLoggedIn) return;
    
            // page refreshed & has a session in cookie,
            // check whether this cookie is valid or not
            this.props.getStatusRequest().then(
                () => {
                    console.log(this.props.status);
                    // if session is not valid
                    if(!this.props.status.valid) {
                        // logout the session
                        loginData = {
                            isLoggedIn: false,
                            username: ''
                        };
    
                        document.cookie='key=' + btoa(JSON.stringify(loginData));
    
                        // and notify
                        let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, please log in again</span>');
                        // Materialize.toast($toastContent, 4000);
    
                    }
                }
            );
        }
        handleLogout() {
            this.props.logoutRequest().then(
                () => {
                    // Materialize.toast('Good Bye!', 2000);
    
                    // EMPTIES THE SESSION
                    let loginData = {
                        isLoggedIn: false,
                        username: ''
                    };
    
                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                    window.location = "/";
                }
            );
        }
        render() {
            // Dont show header while signup
            let re = /(signup)/;
            let isAuth = re.test(this.props.location.pathname);
    
            return (
                <div>
                    {isAuth ? undefined : <Header 
                        isLoggedIn={this.props.status.isLoggedIn}
                        currentuser = {this.props.status.currentUser}
                        onLogout = {this.handleLogout}
                    /> }    
                    <div className="hd-mr">{ this.props.children }</div>
                    <Signin />
                    <Footer />
                </div>
            );
        }
    }

const mapStateToProps = (state) => {
    return {
        status: state.authReducer.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatusRequest: () => {
            return dispatch(getStatusRequest());
        },
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);