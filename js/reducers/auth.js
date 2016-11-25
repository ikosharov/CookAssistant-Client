import * as actionTypes from '../actions/types';

export default function auth(state, action) {
    if (state === undefined) {
        return {
            username: null,
            password: null,
            token: null,
            signInFailed: false,
            signUpFailed: false
        }
    }

    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCEEDED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                token: action.token,
                signInFailed: false
            });

        case actionTypes.SIGN_UP_SUCCEEDED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                token: action.token,
                signUpFailed: false
            });
        case actionTypes.SIGN_IN_FAILED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                token: null,
                signInFailed: true
            });

        case actionTypes.SIGN_UP_FAILED:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                token: null,
                signUpFailed: true
            });
        default:
            return state;
    }
}