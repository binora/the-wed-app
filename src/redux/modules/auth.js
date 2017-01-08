/**
 * @module Auth
 */
import { Actions } from 'react-native-router-flux';

import * as constants from '../../constants';
import * as utils from '../../utils';

// Actions
const REQUEST_LOGIN = 'auth/REQUEST_LOGIN';
const LOGIN_FAILED = 'auth/LOGIN_FAILED';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGOUT_FAILED = 'auth/LOGOUT_FAILED';
const LOGOUT_SUCCESSFUL = 'auth/LOGOUT_SUCCESSFUL';


export function requestLogin() {
    return {
        type: REQUEST_LOGIN
    };
}

export function loginFailed(error) {
    return {
        type: LOGIN_FAILED,
        error: error
    };
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        user: user
    };
}

export function logoutFailed(error) {
    return {
        type: LOGOUT_FAILED,
        error: error
    }
}

export function logoutSuccessful() {
    return {
        type: LOGOUT_SUCCESSFUL
    }
}

// Initial auth state
const initialState = {
    isFetching: false,
    isLoggedIn: false,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case REQUEST_LOGIN: return Object.assign({}, state, {
            isFetching: true
        });
        case LOGIN_SUCCESS: return Object.assign({}, state, {
            isFetching: false,
            isLoggedIn: true,
            user: action.user
        });
        case LOGIN_FAILED: return Object.assign({}, state, {
            isFetching: false
        });
        case LOGOUT_SUCCESSFUL: return Object.assign({}, state, {
            isLoggedIn: false
        });
        case LOGOUT_FAILED:
        default: return state
    }
}


// Login logic
export function loginUsingPhoneNumber(phoneNumber) {
    return async function (dispatch) {
        dispatch(requestLogin());
        var url = constants.SERVER_URL + constants.urls.LOGIN;
        var method = "POST";
        var data = {
            phone: phoneNumber
        };
        let [error, body] = await utils.request(url, method, data);
        if (error) {
            dispatch(loginFailed(error));
            return;
        }
        return dispatch(saveToken(body.user));
    }
}
function saveToken(user) {
    return async function (dispatch) {
        let error = await utils.saveItemToCache('token', user._id);
        if (error) {
            return dispatch(loginFailed(error));
        }
        dispatch(loginSuccess(user));
    }
}

export function loginUsingAccessToken() {
    return async function (dispatch) {
        dispatch(requestLogin());
        // get token from cache
        let [tokenError, token] = await utils.getItemFromCache('token');

        if (tokenError) {
            dispatch(loginFailed(tokenError));
            return;
        }

        // Use the given token to authenticate
        var url = constants.SERVER_URL + constants.urls.LOGIN_USING_ACCESS_TOKEN;
        var method = "POST";
        var data = {
            access_token: token
        };
        let [error, body] = await utils.request(url, method, data);
        if (error) {
            dispatch(loginFailed(error));
            return
        }
        dispatch(loginSuccess(body.user));
    }
}


export function logoutUser() {
    return async function (dispatch) {
        // delete the access token from cache
        let deleteError = await utils.deleteToken();
        if (deleteError) {
            dispatch(logoutFailed(deleteError));
            return;
        }
        dispatch(logoutSuccessful());
    }
}
