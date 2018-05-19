import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from 'components/ProfilePage';
import { connect } from 'react-redux';
import { updateRequest } from 'actions';
import { browserHistory } from 'react-router';
import axios from 'axios';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(username, address, plan) {
        return this.props.updateRequest(username, address, plan).then(
            () => {
                if(this.props.status === "SUCCESS") {

                    window.alert('Updated successfully');

                    // window.location = "/home";
                    return true;
                } else {
                    window.alert('Update Failure');
                    return false;
                }
            }
        );
    }

    render() {
        return (
            <ProfilePage onUpdate={this.handleUpdate} currentuser={this.props.currentuser}
                         userinfo={this.props.info}/>
        );
    }
}

const mapStateToProps = (state, currentuser) => {
	console.log(state);
    return {
        status: state.otherReducers.updated.status,
        currentuser: state.authReducer.status.currentUser,
        info: state.authReducer.userinfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateRequest: (username, address, plan) => {
            return dispatch(updateRequest(username, address, plan));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
