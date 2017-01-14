/**
 * @module Notifications
 */

import * as constants from '../../constants';
import * as utils from '../../utils';

// Action types
const FETCHING_NOTIFICATIONS = 'notifications/FETCHING_NOTIFICATIONS';
const FETCH_NOTIF_FAILED = 'notifications/FETCH_NOTIF_FAILED';
const FETCH_NOTIF_SUCCESS = 'notifications/FETCH_NOTIF_SUCCESS';

const SENDING_NOTIFICATION = 'notifications/SENDING_NOTIFICATION';
const SENDING_NOTIF_FAILED = 'notifications/SENDING_NOTIF_FAILED';
const SENDING_NOTIF_SUCCESS = 'notifications/SENDING_NOTIF_SUCCESS';


export function fetchNotifications() {
    return async function (dispatch) {
        dispatch(fetchingNotificaitons());
        let [error, notifications] = await fetchNotifs();
        if (error) {
            dispatch(fetchNotifFailed(error));
            return;
        }
        return dispatch(fetchNotifSuccess(notifications));
    }
}

export function sendNotification(notif_body) {
    return async function (dispatch) {
        dispatch(sendingNotification());
        let [tokenError, token] = await utils.getItemFromCache('token');
        if (tokenError) {
            dispatch(sendingNotifFailed(tokenError));
            return;
        }
        let url = constants.SERVER_URL + constants.urls.SEND_NOTIFICATION;
        let method = "POST";
        let data = {
            access_token: token,
            notif_body: notif_body
        };
        let [error, body] = await utils.request(url, method, data);
        if (error) {
            dispatch(sendingNotifFailed(error));
            return;
        }
        let [notifFetchError, notifications] = await fetchNotifs(token);
        if (notifFetchError) {
            dispatch(fetchNotifFailed(notifFetchError));
            return;
        }
        return dispatch(sendingNotifSuccess(notifications));
    }
}

export function sendingNotification() {
    return {
        type: SENDING_NOTIFICATION
    };
}
export function sendingNotifFailed(error) {
    return {
        type: SENDING_NOTIF_FAILED,
        error: error
    };
}

export function sendingNotifSuccess(notifications) {
    return {
        type: SENDING_NOTIF_SUCCESS,
        notifications : notifications
    };
}

export function fetchingNotificaitons() {
    return {
        type: FETCHING_NOTIFICATIONS
    };
}

export function fetchNotifFailed(error) {
    return {
        type: FETCH_NOTIF_FAILED,
        error: error
    };
}

export function fetchNotifSuccess(notifications) {
    return {
        type: FETCH_NOTIF_SUCCESS,
        notifications: notifications
    };
}

const initialState = {
    isFetching: false,
    sendingNotification: false,
    notifications: []
};

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_NOTIFICATIONS: return Object.assign({}, state, {
            isFetching: true
        });

        case FETCH_NOTIF_FAILED: return Object.assign({}, state, {
            isFetching: false,
            notifError: action.error
        });

        case FETCH_NOTIF_SUCCESS: return Object.assign({}, state, {
            isFetching: false,
            notifications: action.notifications
        });

        case SENDING_NOTIFICATION: return Object.assign({}, state, {
            sendingNotification: true
        });

        case SENDING_NOTIF_FAILED: return Object.assign({}, state, {
            sendingNotification: false,
            notifError: action.error
        });

        case SENDING_NOTIF_SUCCESS: return Object.assign({}, state, {
            sendingNotification: false,
            notifications: action.notifications
        });
        default: return state
    }
}

async function fetchNotifs(token) {
    if (!token) {
        var [tokenError, token] = await utils.getItemFromCache('token');
        if (tokenError) {
            return [tokenError, null];
        }
    }
    // use this token to request events
    let url = constants.SERVER_URL + constants.urls.GET_ALL_NOTIFICATIONS;
    let method = "POST";
    let data = {
        access_token: token
    };
    let [error, body] = await utils.request(url, method, data);
    if (error) {
        return [error, null];
    }
    return [null, body.notifications];
}
