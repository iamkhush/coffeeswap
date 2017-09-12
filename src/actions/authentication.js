import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_REGISTER,
    AUTH_REGISTER_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT,
    AUTH_UPDATE,
    AUTH_UPDATE_SUCCESS,
    AUTH_UPDATE_FAILURE,

} from './ActionTypes';

import axios from 'axios';

/*============================================================================
    authentication
==============================================================================*/

/* LOGIN */
export function loginRequest(username, password) {
    /* To be implemented */
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());
        // window.console('username:')
        // API REQUEST
        // return axios.post('/api/payment/userSignin', { username, password })
        // .then((response) => {
        //     // SUCCEED
        //     window.console.log(response);
        //     dispatch(loginSuccess(username));
        // }).catch((error) => {
        //     // FAILED
        //     window.console.log(error);
        //     dispatch(loginFailure());
        // });
        return axios.post('/api/payment/userSignin', {"username": username, "password": password})
        .then((response) => {
            window.console.log('Welcome'+response.data.user.username);
            dispatch(loginSuccess(username));
        })
        .catch((error)=>{
            window.console.log(error);
            window.alert('User Signin Failure!');
            dispatch(loginFailure());
        })
    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

/* REGISTER */
/* REGISTER */
export function registerRequest(username, password) {
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(register());

        return axios.post('/api/account/signup', { username, password })
        .then((response) => {
            dispatch(registerSuccess());
        }).catch((error) => {
            dispatch(registerFailure(error.response.data.code));
        });
    };
}

export function register() {
    return {
        type: AUTH_REGISTER
    };
}

export function registerSuccess() {
    return {
        type: AUTH_REGISTER_SUCCESS,
    };
}

export function registerFailure(error) {
    return {
        type: AUTH_REGISTER_FAILURE,
        error
    };
}

/* GET STATUS */
export function getStatusRequest() {
    return (dispatch) => {
        // inform Get Status API is starting
        dispatch(getStatus());

        return axios.get('/api/account/getInfo')
        .then((response) => {
            dispatch(getStatusSuccess(response.data.info.username));
        }).catch((error) => {
            dispatch(getStatusFailure());
        });
    };
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(username) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        username
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
    };
}

/* Logout */
export function logoutRequest() {
    return (dispatch) => {
        return axios.post('/api/account/logout')
        .then((response) => {
            dispatch(logout());
        });
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}

/* UPDATE */
export function updateRequest(username, address, plan) {
    return (dispatch) => {
        // Inform update API is starting
        dispatch(update());

        return axios.post('/api/account/update', { username, address, plan })
        .then((response) => {
            dispatch(updateSuccess());
        }).catch((error) => {
            dispatch(updateFailure(error.response.data.code));
        });
    };
}

export function update() {
    return {
        type: AUTH_UPDATE
    };
}

export function updateSuccess() {
    return {
        type: AUTH_UPDATE_SUCCESS,
    };
}

export function updateFailure(error) {
    return {
        type: AUTH_UPDATE_FAILURE,
        error
    };
}