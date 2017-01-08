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
        options.qs = data
    }
    try {
        let response = await fetch(url, options);
        let body = await response.json();
        if (body.status) {
            return [null, body];
        }
        throw new Error(body.error);
    } catch(error) {
        return [error, null];
    }
}

async function saveItemToCache(key, value) {
    try {
        await AsyncStorage.setItem(key, value);
        return;
    } catch(error) {
        return error;
    }
}

async function getItemFromCache(key) {
    try {
        let value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return [null, value];
        }
        throw new Error("No such value");
    } catch(error) {
        return [error, null];
    }
}

export { request, saveItemToCache, getItemFromCache };