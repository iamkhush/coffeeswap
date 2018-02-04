import * as authActions from './authentication';

import {
    AUTH_UPDATE,
    AUTH_UPDATE_SUCCESS,
    AUTH_UPDATE_FAILURE,
    AUTH_CHECK_USERNAME,
    AUTH_CHECK_USERNAME_RESPONSE,
    AUTH_CHECK_USERNAME_FAILURE
} from './ActionTypes';

import axios from 'axios';

/* UPDATE */
export function updateRequest(username, address, plan) {
    return (dispatch) => {
        // Inform update API is starting
        dispatch(update());

        return axios.post('/api/account/update', { username, address, plan })
        .then((response) => {
            dispatch(updateSuccess(address, plan));
        }).catch((error) => {
            dispatch(updateFailure());
        });
    };
}

export function update() {
    return {
        type: AUTH_UPDATE
    };
}

export function updateSuccess(address, plan) {
    return {
        type: AUTH_UPDATE_SUCCESS,
        address,
        plan,
    };
}

export function updateFailure() {
    return {
        type: AUTH_UPDATE_FAILURE,
    };
}

/* CHECK USERNAME */
export function checkUsernameRequest(username) {
    return (dispatch) => {
        // Inform checkUsername API is starting
        dispatch(checkUsername());

        return axios.post('/api/account/checkusername', {username})
        .then((response) => {
            dispatch(checkUsernameResponse(response.data.is_unique))    
        }).catch((error) => {
            dispatch(checkUsernameFailure())
        })
    }
}

export function checkUsername() {
    return {
        type: AUTH_CHECK_USERNAME
    };
}

export function checkUsernameResponse(result) {
    return {
        type: AUTH_CHECK_USERNAME_RESPONSE,
        result
    }
}

export function checkUsernameFailure() {
    return {
        type: AUTH_CHECK_USERNAME_FAILURE
    }
}