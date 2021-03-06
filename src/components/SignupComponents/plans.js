import React from 'react';
import MonthlyPlan from './monthlyPlan';
import YearlyPlan from './yearlyPlan';

const Plans = ({selectPlan}) => {
	return (
		<div className="planform">
            <div className= "row">
                <div className="col-lg-8 col-lg-offset-2">
                    <h3 className="getStartedColor lo-ce toppadding">And if you'd like to join for a Month or a Year:</h3>
                </div>
            </div>
            <div className="row">
                <div className="panel-group">
	                <div className="col-md-3 col-md-offset-3 text-center">
	                	<div className="panel panel-default panel-pricing">
	                		<YearlyPlan />	
		                	<div className="panel-footer">
                				<a style={{backgroundColor:'#f4bc42'}} onClick={selectPlan} data-plan="yearly" className="btn btn-lg btn-block btn-success">Select Yearly</a>
            				</div>
    					</div>
    				</div>
    				 <div className="col-md-3 text-center">
    					<div className="panel panel-default panel-pricing">
	                		<MonthlyPlan />
		                	<div className="panel-footer">
                				<a onClick={selectPlan} data-plan="monthly" className="btn btn-lg btn-block btn-success">Select Monthly</a>
            				</div>
    					</div>
	                </div>
	            </div>
	        </div>
        </div>  
    );
};


export default Plans;