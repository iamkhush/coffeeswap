import React from 'react';
import Header from './SignupComponents/header';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editmode: "plan",
            address: "Edit Your FullAddress",
            plan:"Edit Plan Mode between Monthly/Yearly/Cancel",
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleOption = this.handleOption.bind(this);
        this.setAddressMode = this.setAddressMode.bind(this);
        this.setPlanMode = this.setPlanMode.bind(this);
    }   

    setAddressMode(){
        this.setState({
            editmode: "address"
        })
    }
    setPlanMode(){
        this.setState({
            editmode: "plan"
        })
    }
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    render(){
        const PlanArea = (
            <div className="row">
                <div className="col-lg-3 col-lg-offset-2">
                    <div className="thumbnail thumbnailStyle">
                        <label>
                            <h4 className="getStartedColor">Monthly Plan ($22/Month)</h4>
                        <div className="radio text-center">
                            <input type="radio" name="plan" value="Monthly Plan" onClick={this.handleChange}/>
                        </div>
                        </label>
                    </div>  
                </div> 
                <div className="col-lg-3">
                    <div className="thumbnail thumbnailStyle">
                            <label>
                            <h4 className="getStartedColor">Yearly Plan ($20/Month - $240 Annual)</h4>
                            <div className="radio text-center">
                                <input type="radio" name="plan" value="Yearly Plan" onClick={this.handleChange}/>
                            </div>
                            </label>
                    </div>  
                </div>
                <div className="col-lg-3">
                    <div className="thumbnail thumbnailStyle">
                        <label>
                        <h5 className="getStartedColor">Cancel Plan</h5>
                        <div className="radio text-center">
                            <input type="radio" name="plan" value="Cancel plan" onClick={this.handleChange}/>
                        </div>
                        </label>
                    </div>
                </div>
            </div>
        )

        const AddressArea = (
            <div className="row rowStyle">
                <div className="col-lg-12">
                    <input type="text" className="form-control pro_address" name="address" onChange={this.handleChange} />
                </div>
            </div>
        )

        return(
            <div>
                <Header h1="Profile & Settings" />
                <div className="row rowStyle">
                    <div className="row">
                        <div className="col-lg-2 col-lg-offset-2"><a><h4>Address</h4></a></div>
                        <div className="col-lg-6 col-lg-offset-1 getStartedColor">
                            <span class="pro_editarea">{this.state.address==""?"Edit Address":this.state.address}</span>
                            <a className="btn btn-xs btn-filleddefault" onClick={this.setAddressMode}>Edit</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-lg-offset-2"><a><h4>Subscription Plan</h4></a></div>
                        <div className="col-lg-6 col-lg-offset-1 getStartedColor">
                             {this.state.plan==""?"Edit Plan Mode between Monthly/Yearly/Cancel":this.state.plan}
                            <a className="btn btn-xs btn-filleddefault" onClick={this.setPlanMode}>Edit</a>
                        </div>
                    </div>
                </div>
                <hr />
                <h3 className="text-center getStartedColor">{ this.state.editmode == "address" ? "AddressSetting" : "Payment Plan Settings" }</h3>
                { this.state.editmode == "address" ? AddressArea : PlanArea }
                <div className="col-lg-10 col-lg-offset-5 getStartedColor pro_save">
                    <a href="/" className="btn btn-default2 btn-lg" >Save Changes</a>
                </div>
            </div>            
        )
    }
}
export default Profile;