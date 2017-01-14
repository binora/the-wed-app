/**
 * @module Marriage events
 */

import * as constants from '../../constants';
import * as utils from '../../utils';


// Action types
const FETCHING_EVENTS = 'events/FETCHING_EVENTS';
const FETCH_EVENTS_FAILED = 'events/FETCH_EVENTS_FAILED';
const FETCH_EVENTS_SUCCESS = 'events/FETCH_EVENTS_SUCCESS';


// Action creators

export function fetchEvents() {
    return async function (dispatch) {
        dispatch(fetchingEvents());
        let [error, marriageEvents] = await fetchMarriageEvents();
        if (error) {
            dispatch(fetchEventsFailed(error));
            return;
        }
        return dispatch(fetchEventsSuccess(marriageEvents));
    }
}

export function fetchingEvents() {
    return {
        type: FETCHING_EVENTS
    };
}

export function fetchEventsFailed(error) {
    return {
       type: FETCH_EVENTS_FAILED,
        error: error
    };
}

export function fetchEventsSuccess(marriageEvents) {
    return {
        type: FETCH_EVENTS_SUCCESS,
        marriageEvents : marriageEvents
    };
}

const initialState = {
    isFetching: false,
    marriageEvents: []
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_EVENTS: return Object.assign({}, state, {
            isFetching: true
        });

        case FETCH_EVENTS_FAILED: return Object.assign({}, state, {
            isFetching: false,
            eventFetchError: action.error
        });

        case FETCH_EVENTS_SUCCESS: return Object.assign({}, state, {
            isFetching: false,
            marriageEvents: action.marriageEvents
        });

        default: return state
    }

}

async function fetchMarriageEvents() {
    let [tokenError, token] = await utils.getItemFromCache('token');
    if (tokenError) {
        return [tokenError, null];
    }
    // use this token to request events
    let url = constants.SERVER_URL + constants.urls.GET_ALL_EVENTS;
    let method = "POST";
    let data = {
        access_token : token
    };
    let [error, body] = await utils.request(url, method, data);
    if (error) {
        return [error, null];
    }
    return [null, body.events];
}