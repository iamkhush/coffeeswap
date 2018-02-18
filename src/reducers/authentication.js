import * as types from '../actions/ActionTypes';
import update from 'immutability-helper';

import initialState from './initialState';

export function authReducer(state = initialState, action) {
    switch(action.type) {
        /* LOGIN */
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    isLoggedIn: { $set: true },
                    currentUser: { $set: action.username }
                },
                userinfo: {
                    address: { $set: action.address },
                    plan: { $set: action.plan }
                }
            });
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.AUTH_REGISTER:
            return update(state, {
                register: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });
        case types.AUTH_REGISTER_SUCCESS:
            return update(state, {
                register: {
                    status: { $set: 'SUCCESS' }
                }
            });
        case types.AUTH_REGISTER_FAILURE:
            return update(state, {
                register: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
        // ?? why? 
        case types.AUTH_GET_STATUS:
            return update(state, {
                status: {
                    isLoggedIn: { $set: true }
                }
            });
        case types.AUTH_GET_STATUS_SUCCESS:
            return update(state, {
                status: {
                    valid: { $set: true },
                    currentUser: { $set: action.username }
                },
                userinfo: {
                    address: { $set: action.address },
                    plan: { $set: action.plan }
                }
            });
        case types.AUTH_GET_STATUS_FAILURE:
            return update(state, {
                status: {
                    status: { $set: false },
                    error: { $set: false }
                }
            });
        /* LOGOUT */
        case types.AUTH_LOGOUT:
            return update(state, {
                status: {
                    status: { $set: false },
                    currentUser: { $set: '' },
                    isLoggedIn: {$set: false}
                }
            });
        default:
            return state;
    }
}