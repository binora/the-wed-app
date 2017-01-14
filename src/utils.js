'use strict';

import { AsyncStorage } from 'react-native';

async function request(url, method, data) {
    var options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
    };
    if (method === "POST") {
        options.body = JSON.stringify(data);
    } else {
        options.qs = data;
    }
    try {
        let response = await fetch(url, options);
        let body = await response.json();
        if (body.status) {
            return [null, body];
        }
        return [body.error, null];
    } catch (error) {
        return [error.message, null];
    }
}

async function saveItemToCache(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
        return;
    } catch (error) {
        return error.message;
    }
}

async function getItemFromCache(key) {
    try {
        let value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return [null, value];
        }
        let error = new Error("no such value");
        return [error.message, null];
    } catch (error) {
        return [error.message, null];
    }
}

async function deleteToken() {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        return error.message;
    }
}

export { request, saveItemToCache, getItemFromCache, deleteToken };