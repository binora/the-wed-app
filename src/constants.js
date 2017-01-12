'use strict';

var SERVER_URL = "http://192.168.0.107:8080";
var urls = {
    LOGIN : "/auth/login",
    LOGIN_USING_ACCESS_TOKEN : "/auth/login/token",
    GET_ALL_EVENTS : "/events"
};

export { SERVER_URL, urls };