/**
 * @module Notifications
 */

import * as constants from '../../constants';
import * as utils from '../../utils';

// Action types
const FETCHING_NOTIFICATIONS = 'notifications/FETCHING_NOTIFICATIONS';
const FETCH_NOTIF_FAILED = 'notifications/FETCH_NOTIF_FAILED';
const FETCH_NOTIF_SUCCESS = 'notifications/FETCH_NOTIF_SUCCESS';


export function fetchNotifications() {
    return async function(dispatch) {
        dispatch(fetchingNotificaitons());
        let [error, notifications] = await fetchNotifs(); 
        if (error) {
            dispatch(fetchNotifFailed(error));
            return;
        }
        return dispatch(fetchNotifSuccess(notifications));
    }
}

export function fetchingNotificaitons() {
    return {
        type : FETCHING_NOTIFICATIONS
    };
}

export function fetchNotifFailed(error) {
    return {
        type : FETCH_NOTIF_FAILED,
        error : error
    };
}

export function fetchNotifSuccess(notifications) {
    return {
        type : FETCH_NOTIF_SUCCESS,
        notifications : notifications
    };
}

const initialState = {
    isFetching : false,
    notifications : []
};

// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_NOTIFICATIONS :  return Object.assign({}, state, {
            isFetching : true
        });

        case FETCH_NOTIF_FAILED : return Object.assign({}, state, {
            isFetching : false, 
            notifError : action.error
        });
        
        case FETCH_NOTIF_SUCCESS : return Object.assign({}, state, {
            isFetching : false, 
            notifications : action.notifications
        });

        default : return state
    }
}

async function fetchNotifs() {
    let [tokenError, token] = await utils.getItemFromCache('token');
    if (tokenError) {
        return [tokenError, null];
    }
    // use this token to request events
    let url = constants.SERVER_URL + constants.urls.GET_ALL_NOTIFICATIONS;
    let method = "POST";
    let data = {
        access_token : token
    };
    let [error, body] = await utils.request(url, method, data);
    if (error) {
        return [error, null];
    }
    return [null, body.notifications];
}
