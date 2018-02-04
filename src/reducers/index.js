import { authentication } from './authentication';
import * as types from 'actions/ActionTypes';
import initialState from './initialState';
import update from 'immutability-helper';

import { combineReducers } from 'redux';

const otherMethods = function (state = initialState, action) {
	switch(action.type) {
        case types.AUTH_UPDATE:
            return update(state, {
                updated: {
                    status: { $set: 'WAITING' },
                    error: { $set: -1 }
                }
            });
        case types.AUTH_UPDATE_SUCCESS:
            return update(state, {
                updated: {
                    status: { $set: 'SUCCESS' }
                }
            });
        case types.AUTH_UPDATE_FAILURE:
            return update(state, {
                updated: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
        /* Check Username */
        case types.AUTH_CHECK_USERNAME_RESPONSE:
            return update(state, {
                userinfo: {
                	unique: { $set: action.result }
                }
            });
        case types.AUTH_CHECK_USERNAME_FAILURE:
            return update(state, {
                userinfo: {
                	unique: { $set: false }
                }
            });
        default:
        	return state
    }
}

export default combineReducers({
    authentication,
    otherMethods
});