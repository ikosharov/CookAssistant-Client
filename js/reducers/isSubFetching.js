import * as actionTypes from '../actions/types';

export default function isSubFetching(state = false, action) {
	
	switch (action.type) {
		case actionTypes.SUB_FETCH_STARTED:
			return true;
		case actionTypes.SUB_FETCH_FINISHED:
			return false;
		default:
			return state;
	}
} 