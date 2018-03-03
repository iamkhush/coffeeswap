import React from 'react';

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        
        const loginButton = (
            <li>
                <a className="nav-acc" href="#" data-toggle="modal" data-target="#signup_modal">Sign In/ Sign Up</a>
            </li>            
        );

        const logoutButton =(
            <li>
                <a onClick={this.props.onLogout} className="nav-acc">Sign Out</a>
            </li>             
        );

        const ProfileButton =(
            <li>
                <a href="/profile" className="page-scroll">My Profile</a>
            </li>           
        );

        return(
            <nav className="navbar navbar-custom navbar-fixed-top nav-my" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                            Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand page-scroll" href="/#page-top">
                            <span className="light">Coffee</span> Swap
                        </a>
                    </div>
        
                    <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                        <ul className="nav navbar-nav">

                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li>
                                <a className="page-scroll" href="/aboutus">About</a>
                            </li>
                             <li>
                                <a className="page-scroll" href="/help">How it works</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="/#contact">Contact</a>
                            </li>
                            { this.props.isLoggedIn ? ProfileButton : undefined }
                            { this.props.isLoggedIn ? logoutButton : loginButton }
                        
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func,
    usernames: React.PropTypes.array,
    currentuser: React.PropTypes.string,
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");},
    usernames: [],
    currentuser: '',
};

export default Header;