import React from 'react';

export default class IndexPage extends React.Component {
  render() {
    return (
        <div className="home">
            <header className="intro">
                <div className="intro-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="brand-heading h-bh">CoffeeSwap</h1>
                                <div className="row">
                                    <div className="col-lg-8 col-lg-offset-2">
                                        <p className="intro-text h-it">Connect with new friends over a bag of coffee.
                                        Discover unknown blends, roasts, and people!</p>
                                        <div className="row">
                                            <a href="/signup" className="btn btn-filleddefault btn-lg">Get Started</a><br></br>
                                            <a href="#about" className="btn page-scroll">
                                            <h4>Learn More</h4>
                                            <i className="fa fa-angle-double-down animated"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="about" className="container content-section text-center">
                <h2 className="intro-text a-it" >co·ffee/swäp/</h2>
                <h3 className="lead text-justify a-lt">Over 1600 independent roasters work in the United States: it can be overwhelming to discover which are worth the visit. What better way to explore the many unique blends than to ask the local expert? CoffeeSwap is a mail based coffee exchange that pairs you with that expert who wants to share fresh, local coffee from their city.
                    <br/><br/>We all know getting packages in the mail is fun, but it can be a hassle - that's why we've simplified the process. All you need to do is provide the coffee and let us take care of the rest.
                    <a className="fa fa-coffee aria-hidden a-fa"></a>
                </h3>
                {/* <a href="the-coffeeswap-method.html" className="btn btn-default2 btn-lg">How it Works</a><br></br> */}
                <a href="/help" className="btn btn-default2 btn-lg">How it Works</a><br></br>

                <div className="row a-r">
                    <div className="col-md-3">
                        <div className="thumbnail a-th">
                            <h4><a href="/help"><img className="img-circle image-responsive a-i" src="img/letter-coffee-1.jpg"></img></a></h4>
                            <div className="caption">
                                Connect with New People
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="thumbnail a-th">
                            <h4><a href="/help"><img className="img-circle image-responsive a-i" src="img/ian-baldwin-cafe.jpg"></img></a></h4>
                            <div className="caption">
                                Discover New Places
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="thumbnail a-th">
                            <h4><a href="/help"><img className="img-circle image-responsive a-i" src="img/bo-smith-33504.jpg"></img></a></h4>
                            <div className="caption">
                                Taste New Roasters
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section id="discover" className="container">
                <div className="row text-center d-rt">
                    <h2>The Process</h2>
                </div>
                <div className="row container text-center d-rc" >
                    <div className="col-lg-3">
                    <img className="image-responsive d-ir" src="img/Graphic_Step1.png"></img></div>
                    <div className="col-lg-3">
                    <img className="image-responsive d-ir" src="img/Graphic_Step2.png"></img></div>
                    <div className="col-lg-3">
                    <img className="image-responsive d-ir" src="img/Graphic_Step3.png"></img></div>
                    <div className="col-lg-3">
                    <img className="image-responsive d-ir" src="img/Graphic_Step4.png"></img></div>
                </div>
                <div className="row">
                    <div className="col-md-4 d-cm">
                            <h3 className= "fa fa-2x fa-coffee"></h3>
                            <a className= "fa fa-2x fa-exchange"></a>
                            <p className= "fa fa-2x fa-coffee"></p>
                            <p>It's simple. Discover new roasters, blends, and people across the United States just by swapping coffee.</p>
                            <a href="/signup" className="btn btn-default2 btn-lg">Get Started ></a><br/>
                            <a href="/help" className="btn btn-colordefault btn-sm d-mr">How does it work? ></a>
                    </div>
                    <div className="col-md-8 "> 
                            <img className="img-responsive d-cir" src="img/jeff-sheldon-unsplash.jpg"></img>
                    </div>
                </div>            
    
                <div className="row dt-r" >
                    <div className="col-md-4 dt-c4" >
                        <p className= "fa fa-2x fa-pencil dt-p5" > </p>
                        <a className= "fa fa-1x fa-plus dt-p5" > </a>
                        <p className= "fa fa-2x fa-envelope dt-p7" ></p>
                        <a className= "fa fa-1x fa-plus dt-p5" > </a>
                        <p className= "fa fa-2x fa-road dt-p7" ></p>
                        <p>Focus on what matters. Include a note to new friends and share coffee from your hometown: we'll handle the shipping and matching while you explore and connect.</p> 
                        <a href="/signup" className="btn btn-default btn-lg">Find a friend ></a>
                    </div>
                    <div className="col-md-8 img-responsive"> 
                    <img className="dt-img" src="img/letters.jpg"></img>
                    </div>        
                </div>
                <div className="row dt-r3" ></div>
            </section>

            <section id="gift" className="content-section text-center">
                <div className="download-section">
                    <div className="container">
                        <div className="col-lg-6 col-lg-offset-3">
                            <h2>Keep a warm mug (or two)</h2>
                            <h4>Surprise someone with a gift subscription: they'll get a personal note from someone new in addition to recieving a 1/2 lb of coffee.</h4>
                            <a href="/signup" className="btn btn-default btn-lg">Give the Gift</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="container content-section text-center">
                
                <div className="row dt-p3">
                    <div className="col-lg-8 col-lg-offset-2">
                        <h2>Contact CoffeeSwap</h2>
                        <p>We are a small operation with big coffee mugs and busy days! All inquiries will be responded to as soon as possible. </p>
                        <p className="c-p" href="mailto:info@thecoffeeswap.com">info@thecoffeeswap.com
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}