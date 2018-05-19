import { authReducer } from './authentication';
import * as types from '../actions/ActionTypes';
import { updateState } from './initialState';
import update from 'immutability-helper';

import { combineReducers } from 'redux';

const otherReducers = function (state = updateState, action) {
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
                    status: { $set: 'SUCCESS' },
                    error: { $set: -1 }
                }
            });
        case types.AUTH_UPDATE_FAILURE:
            return update(state, {
                updated: {
                    status: { $set: 'FAILURE' },
                    error: { $set: action.error }
                }
            });
        default:
        	return state
    }
}

export default combineReducers({
    authReducer,
    otherReducers
});
