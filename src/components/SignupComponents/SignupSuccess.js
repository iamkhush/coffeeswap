import React from 'react';

class SignupSuccess extends React.Component {
    render() {
        return(
            <header className="landing_page sign-bg">
                <div className="intro-body">
                    <div className="container">
                        <div className="row pd-5">
                            <div className="col-md-6 col-md-offset-3">
                                <h1 className="brand-heading">Got it! We'll notify you when the next swap opens.</h1>
                                <div className="row"><p></p></div>
                                <div className="row">
                                    <h4 className="lead su-lead">The more people that join, the more variety you'll get! Tell your friends about CoffeeSwap</h4>
                                    <ul className="list-inline banner-social-buttons">
                                    <li>
                                        <a href="https://twitter.com/thecoffeeswap" className="btn btn-filleddefault btn-lg su-sb"><i className="fa fa-twitter fa-fw"></i> <span className="network-name"></span></a>
                                        </li>
                                        <li>
                                        <a href="https://www.instagram.com/coffeeswap/"  className="btn btn-filleddefault btn-lg su-sb"><i className="fa fa-instagram fa-fw"></i> <span className="network-name"></span></a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/coffeeswap/" className="btn btn-filleddefault btn-lg su-sb"><i className="fa fa-pinterest fa-fw"></i> <span className="network-name"></span></a>
                                        </li>
                                        <li>
                                        <a href="https://www.facebook.com/thecoffeeswap/" className="btn btn-filleddefault btn-lg su-sb"><i className="fa fa-facebook fa-fw"></i> <span className="network-name"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default SignupSuccess