import React from 'react';

const Plans = ({selectPlan}) => {
	return (
		<section className="planform">
            <div className= "row">
                <div className="col-lg-8 col-lg-offset-2">
                    <h3 className="getStartedColor">And if you'd like to join for a Month or a Year:</h3>
                </div>
            </div>
       		<div className="container">
	            <div className="row">
	                <div className="panel-group">
		                <div className="col-md-3 col-md-offset-3 text-center">
		                    <div className="panel panel-default panel-pricing">
		                        <div className="panel-heading">
		                            <i className="fa fa-coffee"></i>
		                            <h3>Monthly</h3>
		                        </div>
		                        <div className="panel-body text-center" style={{color:'#f3bc42'}}>
		                            <h2><strong>$22/Month</strong></h2>
		                            <i>Charged once a month</i>
		                        </div>
		                        <ul className="list-group text-center getStartedColor">
		                            <li className="list-group-item"><i className="fa fa-check"></i> One package / month</li>
		                            <li className="list-group-item"><i className="fa fa-check"></i> Shipping Included</li>
		                            <li className="list-group-item"><i className="fa fa-check"></i> Cancel At Any Time</li>
		                        </ul>
		                        <div className="panel-footer">
		                            <a onClick={selectPlan} data-plan="monthly" className="btn btn-lg btn-block btn-warning">Select Monthly</a>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-md-3 text-center">
		                    <div className="panel panel-default panel-pricing">
		                        <div className="panel-heading">
		                            <i className="fa fa-coffee"></i>
		                            <i className="fa fa-coffee"></i>
		                            <i className="fa fa-coffee"></i>
		                            <h3>Yearly</h3>
		                        </div>
		                        <div className="panel-body text-center" style={{color:'#f3bc42'}}>
		                            <h2><strong>$20/Month</strong></h2>
		                            <i>Annual charge of $240</i>
		                        </div>
		                        <ul className="list-group text-center getStartedColor" >
		                            <li className="list-group-item" style={{color:'#b83d26'}}><i className="fa fa-check" style={{color:'#b83d26'}}></i> Discounted One time Rate - Save 10%</li>
		                            <li className="list-group-item"><i className="fa fa-check"></i> One package / month</li>
		                            <li className="list-group-item"><i className="fa fa-check"></i> Month-to-Month Matches</li>
		                            <li className="list-group-item"><i className="fa fa-check"></i> Shipping Included</li>
		                        </ul>
		                        <div className="panel-footer">
		                            <a onClick={selectPlan} data-plan="yearly" className="btn btn-lg btn-block btn-success">Select Yearly</a>
		                        </div>
		                    </div>
		                </div>    
		            </div>
		        </div>
		    </div>
        </section>  
    );
};


export default Plans;