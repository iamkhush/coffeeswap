import React from 'react';
import PropTypes from 'prop-types';

const RoastTypeForm = ({selectType}) => {
	return (
		<section className="roasttypeform">
            <div className="row rowStyle">
                <div className="col-lg-6 col-lg-offset-3">
                    <h1 className="headerstyle-getstarted">#1</h1>
                    <p className="getStartedColor" >Choose your favorite roast type: </p>
                </div>
                <div className="col-lg-3 col-md-offset-2">
    	            <div className="thumbnail thumbnailStyle">
                        <img onClick={selectType} className="img-rounded image-responsive" style={{width:'210px',height:'160px'}} src="img/light_roast.jpg" data-roasttype="light"></img>
                        <h5><div className="caption text-center">Light Roast</div></h5>
    	            </div>  
    			</div>	            
                
                <div className="col-lg-3">
    	            <div className="thumbnail thumbnailStyle">
                        <img onClick={selectType} className="img-rounded image-responsive" style={{width:'210px',height:'160px'}} src="img/medium_roast.jpg" data-roasttype="medium"></img>
                        <h5><div className="caption text-center">Medium Roast</div></h5>
    	            </div>  
            	</div>
                <div className="col-lg-3">
    	            <div className="thumbnail thumbnailStyle">
                        <img onClick={selectType} className="img-rounded image-responsive" style={{width:'210px',height:'160px'}} src="img/dark_roast.jpg" data-roasttype="dark"></img>
                        <h5><div className="caption text-center">Dark Roast</div></h5>
    	            </div>  
                </div>
            </div>
        </section>
	);
};



export default RoastTypeForm;