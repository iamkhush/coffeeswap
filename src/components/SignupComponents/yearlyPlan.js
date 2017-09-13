import React from 'react';

const YearlyPlan = () => {
	return (
        <div>
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
        </div>
	)
}

export default YearlyPlan;