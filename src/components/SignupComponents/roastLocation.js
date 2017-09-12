import React from 'react';
import PropTypes from 'prop-types';

const RoastLocationForm = ({selectLocation}) => {
    return (
        <section className="roastlocationform">
            <div className="row rowStyle" >
                <div className="col-lg-6 col-lg-offset-3">
                    <h1 className="headerstyle-getstarted">#3</h1>
                    <p className="getStartedColor"> Which region do you find yourself drinking from?</p>
                </div>
                <div className="col-lg-3">
                    <a className="btn btn-default getStartedColor" data-toggle="tooltip" data-placement="right" title="If you don't know where you usually drink from, don't worry - we can still find you a great match! We can't guarantee the coffee's origin all the time, but we can try to match as close as possbile.">?</a>
                </div>
            </div>
            <div className="col-lg-2 col-lg-offset-2">
                <div className="thumbnail thumbnailStyle">
                    <img onClick={selectLocation}  data-location="Mexico" className="img-rounded image-responsive" style={{width:'190px', height:'150px'}} src="img/Mexico.png"></img>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="thumbnail thumbnailStyle">
                    <img onClick={selectLocation}  data-location="Central America" className="img-rounded image-responsive" style={{width:'190px', height:'140px'}} src="img/CentralAmerica.png"></img>
                </div>  
                </div> 
                <div className="col-lg-2">
                <div className="thumbnail thumbnailStyle">
                    <img onClick={selectLocation}  data-location="Africa" className="img-rounded image-responsive" style={{width:'190px', height:'160px'}} src="img/Africa.png"></img>
                </div>  
                </div>
                <div className="col-lg-2">
                <div className="thumbnail thumbnailStyle">
                    <img onClick={selectLocation} data-location="South America" className="img-rounded image-responsive" style={{width:'100px', height:'180px'}} src="img/SouthAmerica.png"></img>
                </div>  
                </div>    
        </section>
    );
};

export default RoastLocationForm;