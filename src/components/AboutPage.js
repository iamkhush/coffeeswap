import React from 'react';

class AboutPage extends React.Component {
    render() {
        return(
            <header className="about">
                <div className="about-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="intro-text ab-mt5">About Us</h1>
                                <div className="row">
                                    <div className="col-lg-8 col-lg-offset-2">
                                        <p className="ab-p ab-mb15">We're coffee lovers who think there's more to the enjoyment of coffee than simply consuming it. </p>
                                        <p className="ab-p">CoffeeSwap was started as a way to explore the world's great micro-roasters, cafes, and the people they serve. Rather than claim we know all when it comes to taste and flavor, we've put the trust in your hands - we know you've found the best places to drink your java. Otherwise, you wouldn't be here. <br/><br/>
                                        We have two goals - to become a platform that supports the smaller businesses, and to connect strangers over common ground (delicious coffee). If you have any questions or suggestion on how we can improve our process, <a href="mailto:conner@thecoffeeswap.com">get in touch</a>!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="intro-text">Frequently Asked Questions</h1>
                                <div className="row">
                                    <div className="col-lg-8 col-lg-offset-2">
                                        <h3>//What is CoffeeSwap?</h3>
                                        <p className="ab-p">
                                            CoffeeSwap helps you discover local roasters from places you can't get to - just like you know the best coffee in your neighborhood, someone across the country knows the best place in theirs. Why not taste what they have to offer?
                                        </p>
                                        <h3>//How does it work?</h3>
                                        
                                            <ul>
                                                <li><p>Sign up and let us know what your personalized taste profile is - we'll match you with someone similar.</p></li>
                                                <li><p> Then, both of you will receive boxes (with a present!) to put coffee in - postage taken care of. Purchase 1/2 lb of coffee from your favorite coffee location, then pack it up using the included postage from aforementioned box. We strongly enourage people to include notes, trinkets, or whatever you feel like sharing. (But keep the final package weight under 13oz! Otherwise you'll need to cover the additional postage.)</p></li>
                                                <li><p> A simple swap, and you'll get 1/2 lb of coffee from a new place and person!</p></li>
                                            </ul>
                                        
                                        <h3>//Do I have to deal with shipping, postage, or boxes?</h3>
                                        <p className="ab-p">
                                            Our aim is for you to focus on the coffee and people.We'll take care of all the postage and make packing as simple as possible. Ship without worry.
                                        </p>
                                        <h3>//How much does it cost?</h3>
                                        <p className="ab-p">
                                            We're a subscription service, so it'll depend on if you want a month-to-month subscription, or a discounted yearly one. Take a look at our pricing <a href="/get-started">here</a>.
                                        </p>
                                        <h3>//Where do I get the coffee to swap?</h3>
                                        <p className="ab-p">
                                            If you have a favorite place or two where you usually get your whole bean or ground coffee, that's probably a good start! Remember, the goal here is to support local businesses and roasters - please, no national chains or brands.
                                        </p>
                                        <h3>//Can I buy coffee through CoffeeSwap?</h3>
                                        <p className="ab-p">
                                            Not yet! Stay tuned. Suggestions welcomed - or, want to see your coffee here? --> <a href="mailto:conner@thecoffeeswap.com">conner@thecoffeeswap.com</a> 
                                        </p>
                                        <h3>//Can I give this as a gift?</h3>
                                        <p className="ab-p">
                                            Absolutely! Gift this to your mother, neighboor, dentist, or barista. Give them a chance to experience something new, and share what they know. Sign them up <a href="/get-started">here</a>. (They'll be able to fill out their own coffee preferences when they redeem their gift).
                                        </p>
                                        <h6> Still have questions? Email me: <a href="mailto:conner@thecoffeeswap.com">conner@thecoffeeswap.com</a></h6><br/>
                                        <div className="row">
                                            <div className="col-lg-12 ab-su">
                                                <a href="/signup" className="btn btn-default btn-lg">Sign Up Now</a>
                                            </div><br/><br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default AboutPage;