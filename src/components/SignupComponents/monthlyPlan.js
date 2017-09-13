import React from 'react';

const MonthlyPlan = () => {
	return (
        <div>
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
		</div>
	)
}

export default MonthlyPlan;