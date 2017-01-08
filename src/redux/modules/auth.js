/**
 * @module Auth
 */

import { AsyncStorage } from 'react-native';

import { Actions } from 'react-native-router-flux';

import * as constants from '../../constants';
import * as utils from '../../utils';

// Actions
const REQUEST_LOGIN = 'auth/REQUEST_LOGIN';
const LOGIN_FAILED = 'auth/LOGIN_FAILED';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const SHOW_LOGIN_SCREEN = 'auth/SHOW_LOGIN_SCREEN';


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

export function showLoadingScreen() {
    return {
        type: SHOW_LOADING_SCREEN
    }
}
export function showLoginScreen(error) {
    return {
        type: SHOW_LOGIN_SCREEN,
        error : error
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

        case SHOW_LOGIN_SCREEN:
        case LOGIN_FAILED: return Object.assign({}, state, {
            isFetching: false,
            loginError: action.error
        });
        default: return state
    }
}


// Login logic
export function authenticateUser(phoneNumber) {
    return async function (dispatch) {
        dispatch(requestLogin());
        let [error, body] = await loginUsingPhoneNumber(phoneNumber);
        if (error) {
            dispatch(loginFailed(error));
            return;
        }
        return dispatch(saveToken(body.user));
    }
}
async function loginUsingPhoneNumber(phoneNumber) {
    var url = constants.SERVER_URL + constants.urls.LOGIN;
    var method = "POST";
    var data = {
        phone: phoneNumber
    };
    return await utils.request(url, method, data);
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
            dispatch(showLoginScreen());
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
            dispatch(showLoginScreen(error));
            return
        }
        dispatch(loginSuccess(body.user));
    }
}
