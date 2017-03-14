'use strict';

var SERVER_URL = 'https://node-rishu.herokuapp.com';
var urls = {
    LOGIN : "/auth/login",
    LOGIN_USING_ACCESS_TOKEN : "/auth/login/token",
    GET_ALL_EVENTS : "/events",
    GET_ALL_NOTIFICATIONS : "/notifications",
    SEND_NOTIFICATION : "/notifications/send"
};

export { SERVER_URL, urls };