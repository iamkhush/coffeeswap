import React from 'react';
import PropTypes from 'prop-types';

const RoastByDateForm = ({selectDateImp}) => {
    return (
        <section className="roastbydateform">
            <div className="row rowStyle" >
                <div className="col-lg-6 col-lg-offset-3">
                    <h1 className="headerstyle-getstarted">#2</h1>
                    <p className="getStartedColor" >How important is roast-by date to you?</p>
                </div>
                <div className="col-lg-3">
                    <a className="btn btn-default getStartedColor" data-toggle="tooltip" data-placement="right" title="Roast-by Date refers to the date the coffee beans were roasted. We recommend using coffee within a week or so of roast date for peak taste, but understand that sometimes life gets in the way and that doesn't happen.">?</a>
                </div>
                <div className="col-lg-6 col-lg-offset-3">
                    <div className="btn-toolbar text-center">
                        <div className="btn-group">
                        	<span onClick={selectDateImp} className="btn btn-default" style={{fontSize:'16px'}}>Not Important</span>
                            <span onClick={selectDateImp} className="btn btn-default" style={{fontSize:'16px'}}>1</span>
                            <span onClick={selectDateImp} className="btn btn-default" style={{fontSize:'16px'}}>2</span>
                            <span onClick={selectDateImp} className="btn btn-default" style={{fontSize:'16px'}}>3</span>
                            <span onClick={selectDateImp} className="btn btn-default" style={{fontSize:'16px'}}>4</span>
                            <span onClick={selectDateImp} className="btn btn-default" style={{fontSize:'16px'}}>5</span>
                            <span onClick={selectDateImp} className="btn btn-default" style={{fontSize:'16px'}}>Very Important</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoastByDateForm;