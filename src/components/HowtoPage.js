import React from 'react';

class HowtoPage extends React.Component {
    render() {
        return(
            <div>
                <header className="intro-2">
                    <div className="intro-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="brand-heading-2">What's a CoffeeSwap?</h1>
                                </div>
                            </div>
                        </div>
                    </div>    
                </header>

                <section id="about" className="container content-section text-center">
                        <h2 className="intro-text ht-it">Swapping coffee is simple. <br />Sign up, get a match, and then it begins:</h2>  
                </section>
                <section id="about" className="container content-section-2 text-center">
                    <h3 className="intro-text ht-it1">First, visit your favorite local coffee roaster or cafe, or find a new one.</h3>
                </section>
                <section id="about" className="container content-section-3 text-center">
                    <h3 className="intro-text ht-it1">Second, while you're there, pick up 1/2lb (8oz) of whatever roast you think your match would like. We tell you their prefences ahead of time so there's no surprises. </h3>
                </section>
                <section id="about" className="container content-section-4 text-center">
                    <h3 className="intro-text ht-it1">Third, pack it up into the box (and postage!) we provide and put it on your doorstep. 1/2lb packages will be picked up by USPS at no charge!</h3>
                </section>
                <section id="about" className="container content-section-5 text-center">
                    <h3 className="intro-text ht-it1">Finally, since your match has been going through the same steps at the same time - your new swap box should arrive. Enjoy the new beans!</h3>
                </section>
                <div className="row">
                    <div className="col-lg-12 text-center pd-20">
                        <a href="/signup" className="btn btn-filleddefault btn-lg">Create an Account</a>
                    </div>
                    <div className="col-lg-12 text-center pd-5">
                        <a href="/aboutus" className="btn btn-filleddefault btn-md">Read the FAQ</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowtoPage;