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
const INC_BADGE_COUNT = 'notifications/INC_BADGE_COUNT';
const CLEAR_BADGE_COUNT =  'notifications/CLEAR_BADGE_COUNT';


export function setInitialTab(i) {
    return {
        type : SET_INITIAL_TAB,
        tabIndex : i || 0
    }
}
export function incrementBadgeCount() {
    return {
        type: INC_BADGE_COUNT
    };
}

export function clearBadgeCount() {
    return {
        type: CLEAR_BADGE_COUNT
    };
}

const initialState = {
    initialTab : HOTEL,
    badgeCount : 0
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_INITIAL_TAB : return Object.assign({}, state, {
            initialTab : action.tabIndex
        });
        case INC_BADGE_COUNT : return Object.assign({}, state, {
            badgeCount : state.badgeCount + 1
        });

        case CLEAR_BADGE_COUNT: return Object.assign({}, state, {
            badgeCount : 0
        });
        default : return state;
    }
}
