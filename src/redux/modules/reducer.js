import { combineReducers } from 'redux';

import auth from './auth';
import events from './events';
import notifs from './notifications';

const rootReducer = combineReducers({
    auth : auth,
    events : events,
    notifs : notifs
});

export default rootReducer;
