/**
 * @module misc
 */

import * as constants from '../../constants';
import * as utils from '../../utils';


// constants
export const NOTIFICATION_TAB = 2;
const HOTEL = 0;

// Action Types

const SET_INITIAL_TAB = 'misc/SET_INITIAL_TAB'


export function setInitialTab(i) {
    return {
        type : SET_INITIAL_TAB,
        tabIndex : i || 0
    }
}

const initialState = {
    initialTab : HOTEL
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_INITIAL_TAB : return Object.assign({}, state, {
            initialTab : action.tabIndex
        });

        default : return state;
    }
}
