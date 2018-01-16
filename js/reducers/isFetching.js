import * as actionTypes from '../actions/types'

export default function isFetching(state = false, action) {
	
	switch (action.type) {
		case actionTypes.FETCH_STARTED:
			return true
		case actionTypes.FETCH_FINISHED:
			return false
		default:
			return state
	}
} 