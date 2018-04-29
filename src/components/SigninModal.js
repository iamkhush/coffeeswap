import React from 'react'


class SigninModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleLogin() {
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success) {
                    this.setState({password: ''});
                }
            }
        );
    }

        // handleKeyPress(e) {
        //     if(e.charCode ===13 ){
        //         if(this.props.mode) {
        //             this.handleLogin();
        //         } else {
        //             this.handleRegister();
        //         }
        //     }
        // }

    render() {
        return(
            <div className="modal fade" id="signup_modal" tabIndex="-1" role="dialog" aria-labelledby="#signup_modal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body lo-bd">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            <h3>Sign In</h3>
                            <div className="form-group row">
                                <label htmlFor="username" className="col-3 col-form-label co-gr">UserName</label>
                                <div className="col-2">
                                    <input 
                                        className="form-control"
                                        type="text"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </div> 
                            </div>
                            <div className="form-group row">
                                <label htmlFor="password" className="col-3 col-form-label co-gr">Password</label>
                                <div className="col-2">
                                    <input 
                                        className="form-control" 
                                        type="password"  
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        onKeyPress={this.handleKeyPress}    
                                    />
                                </div> 
                            </div>
                            <hr className="co-f0" />
                            <a href="/signup"><h3> Sign Up </h3> </a>
                            <div className="lo-ce">
                                <a href="/signup">New? Sign Up Here</a>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button  type="button" className="btn btn-filleddefault co-ff"><a  onClick={this.handleLogin} className="white">Submit</a></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SigninModal.propTypes = {
    onLogin: React.PropTypes.func,
    onRegister: React.PropTypes.func
};

SigninModal.defaultProps = {
    onLogin: (id, pw) => { console.error("onLogin not defined"); },
    onRegister: (id, pw) => { console.error("onRegister not defined"); }
};

export default SigninModal;