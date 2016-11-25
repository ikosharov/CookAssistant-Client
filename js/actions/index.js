import * as actionTypes from './types';

export function signInSucceeded(username, password, token) {
	return {
		type: actionTypes.SIGN_IN_SUCCEEDED,
		username: username,
		password: password,
		token: token
	}
}

export function signUpSucceeded(username, password, token) {
	return {
		type: actionTypes.SIGN_UP_SUCCEEDED,
		username: username,
		password: password,
		token: token
	}
}

export function signInFailed(username, password) {
	return {
		type: actionTypes.SIGN_IN_FAILED,
		username: username,
		password: password
	}
}

export function signUpFailed(username, password) {
	return {
		type: actionTypes.SIGN_UP_FAILED,
		username: username,
		password: password
	}
}

export function fetchStarted() {
	return {
		type: actionTypes.FETCH_STARTED
	}
}

export function fetchFinished() {
	return {
		type: actionTypes.FETCH_FINISHED
	}
}