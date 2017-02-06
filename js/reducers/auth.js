import * as actionTypes from '../actions/types';

export default function auth(state, action) {
    if (state === undefined) {
        return {
            id: null,
            username: null,
            token: null,
            authenticateFailed: false,
        }
    }

    switch (action.type) {
        case actionTypes.AUTHENTICATE_SUCCEEDED:
            return Object.assign({}, state, {
                id: action.id,
                username: action.username,
                token: action.token,
                authenticateFailed: false
            });

        case actionTypes.AUTHENTICATE_FAILED:
            return Object.assign({}, state, {
                id: null, 
                username: action.username,
                token: null,
                authenticateFailed: true
            });

        case actionTypes.SIGN_OUT:
            return Object.assign({}, state, {
                id: null,
                username: null,
                token: null,
                authenticateFailed: false
            });
        default:
            return state;
    }
}