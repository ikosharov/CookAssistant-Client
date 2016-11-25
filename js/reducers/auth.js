import * as actionTypes from '../actions/types';

export default function auth(state, action) {
    if (state === undefined) {
        return {
            username: null,
            password: null,
            isAuthenticated: false,
            signInFailed: false,
            signUpFailed: false
        }
    }

    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCEEDED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                isAuthenticated: true,
                signInFailed: false
            });

        case actionTypes.SIGN_UP_SUCCEEDED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                isAuthenticated: true,
                signUpFailed: false
            });
        case actionTypes.SIGN_IN_FAILED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                isAuthenticated: false,
                signInFailed: true
            });

        case actionTypes.SIGN_UP_FAILED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                isAuthenticated: false,
                signUpFailed: true
            });
    }
}