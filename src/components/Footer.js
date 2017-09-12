import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="myfoot container text-center wi100">
                    <ul className="list-inline banner-social-buttons">
                            <li>
                                <a href="https://twitter.com/thecoffeeswap" className="btn btn-colordefault btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/coffeeswap/" className="btn btn-colordefault btn-lg"><i className="fa fa-instagram fa-fw"></i> <span className="network-name">Instagram</span></a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/coffeeswap/" className="btn btn-colordefault btn-lg"><i className="fa fa-pinterest fa-fw"></i> <span className="network-name">Pinterest</span></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/thecoffeeswap/" className="btn btn-colordefault btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a>
                            </li>
                        </ul>
                    <h6>Copyright 2017 &copy; CoffeeSwap</h6>
                </div>
            </footer>
        )
    }
}

export default Footer;