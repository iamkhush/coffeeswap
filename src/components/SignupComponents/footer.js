import React from 'react';

const Footer = ({nextStep, h1='', maxFieldsCount, currentFieldCount, maxValuesInThis, error}) => {
	const complete = parseInt(((currentFieldCount*100)/maxFieldsCount).toFixed());
	const showNext = currentFieldCount==maxValuesInThis && (error!=undefined ? !error.password && !error.email && !error.zipcode && error.unique: true);
	return (
		<section>
			if (h1!='') {
		    <div className="row" style={{backgroundColor:'#fff',padding:'30px',marginLeft:'10%',marginRight:'10%',marginTop:'2%'}}>
                <div className="col-lg-8" style={{textAlign:'right'}}>
                    <button disabled={!showNext} onClick={nextStep} className="btn btn-default2 btn-lg">{h1}</button>
                </div>
            </div>
        	}

		    <div className="row" style={{backgroundColor:'#fff',padding:'30px',marginLeft:'10%',marginRight:'10%'}}>
                    <div className="col-lg-4 col-lg-offset-4" style={{textAlign:'center'}}>
		            <div className="progress">
		                <div className="progress-bar" role="progressbar" aria-valuenow="{100-{complete}}"
		                aria-valuemin="0" aria-valuemax="100" style={{width:complete+'%'}}><a style={{color:'#f0f0f0'}}>{complete}% Complete</a>
		                <span className="sr-only">{100-complete}% Complete</span>
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
	);
};

export default Footer;