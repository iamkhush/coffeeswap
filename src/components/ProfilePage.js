import React from 'react';
import Header from './SignupComponents/header';
import { connect } from 'react-redux';
import axios from 'axios';

class ProfilePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editmode: "",
            address: "Please input your address",
            plan: "Please input your plan",
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleOption = this.handleOption.bind(this);
        this.setAddressMode = this.setAddressMode.bind(this);
        this.setPlanMode = this.setPlanMode.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);


    }

    componentDidMount(){

        // window.alert(this.props.thisuser);
        axios.post('/api/account/getprofileinfo')
        .then(response => {
            // window.alert('Successfuly GetInfo!');
            window.console.log("userinfo: "+ response.data.info);
            this.setState({
                editmode: "",
                address: response.data.info.address,
                plan: response.data.info.plan,
            });
            //window.location = '/home';
        })
        .catch(error => {
            // window.alert('Get User Info Failure!');
            window.console.log(error);
            window.location = '/';
        });

        axios.get('/api/account/checkAndSetMatch');
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

    handleUpdate() {
        let address = this.state.address;
        let plan = this.state.plan;
        let user = this.props.currentuser;
        // window.alert('username: ' + user);
        this.props.onUpdate(user, address, plan).then(
            (success) => {
                if(!success) {
                    this.setState({
                        address: '',
                    });
                }
            }
        );
    }
    render(){
        const PlanArea = (
            <div className="row text-center">
            	<h4 className="getStartedColor">Please mail to <a href="mailto:contact@aoswebsolutions">contact@aoswebsolutions</a> for change of plans
            	</h4>
            </div>
        )

        const AddressArea = (
            <div className="row rowStyle">
                <div className="col-lg-12">
                    <input type="text" className="form-control pro_address" name="address" onChange={this.handleChange} />
                </div>
                <div className="col-lg-10 col-lg-offset-5 getStartedColor pro_save">
                    <a onClick={this.handleUpdate} className="btn btn-default2 btn-lg" >Save Changes</a>
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
                            <span className="pro_editarea">{this.state.address==""?"Edit Address":this.state.address}</span>
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
                { this.state.editmode != "" ? (
                    <div className="row">
                        <h3 className="text-center getStartedColor">{ this.state.editmode == "address" ? "Set your address" : "Payment Plan Settings" }</h3>
                        { this.state.editmode == "address" ? AddressArea : '' }
                        { this.state.editmode == "plan" ? PlanArea : '' }
                    </div>
                ) : '' }
            </div>
        )
    }
}

ProfilePage.propTypes = {
    onUpdate: React.PropTypes.func,
    currentuser: React.PropTypes.string
};

ProfilePage.defaultProps = {
    onUpdate: (username, address, plan) => { console.error("onUpdate not defined"); }
};
const mapStateToProps = (state) => {
    return {
        thisuser: state.authReducer.status.currentUser,
    };
}
// export default ProfilePage;
export default connect(mapStateToProps)(ProfilePage);
