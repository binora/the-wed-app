'use strict';

var SERVER_URL = 'http://4fb90a8b.ngrok.io';
var urls = {
    LOGIN : "/auth/login",
    LOGIN_USING_ACCESS_TOKEN : "/auth/login/token",
    GET_ALL_EVENTS : "/events",
    GET_ALL_NOTIFICATIONS : "/notifications",
    SEND_NOTIFICATION : "/notifications/send"
};

export { SERVER_URL, urls };