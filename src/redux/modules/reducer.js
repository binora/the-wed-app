import { combineReducers } from 'redux';

import auth from './auth';
import events from './events';
import notifs from './notifications';
import misc from './misc';

const rootReducer = combineReducers({
    auth : auth,
    events : events,
    notifs : notifs,
    misc : misc
});

export default rootReducer;
