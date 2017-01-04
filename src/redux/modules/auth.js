/**
 * @module Auth
 */
import {Actions } from 'react-native-router-flux';
// Actions
const REQUEST_LOGIN = 'modules/REQUEST_LOGIN';
const LOGIN_FAILED = 'modules/LOGIN_FAILED';
const LOGIN_SUCCESS = 'modules/LOGIN_SUCCESS';


// Action Creators
export function authenticateUser(phoneNumber) {
    return function(dispatch) {
        dispatch(requestLogin());
        setTimeout(() => {
            Actions.home();
            dispatch(loginSuccess());
        }, 1000);
    }
}



export function requestLogin() {
    return {
        type : REQUEST_LOGIN,
    };
}

export function loginFailed(error) {
    return {
        type : LOGIN_FAILED,
        error : error
    };
}

export function loginSuccess(responseBody) {
    return {
        type : LOGIN_SUCCESS,
        responseBody : responseBody
    };
}

// Initial auth state
const initialState = {
    isFetching : false,
    isLoggedIn : false 
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    console.log(state);
   switch(action.type)  {
       case  REQUEST_LOGIN : return Object.assign({}, state, {
           isFetching : true
       });
       case LOGIN_SUCCESS : return Object.assign({}, state, {
           isFetching : false, 
           isLoggedIn : true
       });
       
       case LOGIN_FAILED : return { 
           isFetching : false 
        };

       default : 
       return state
   }
}