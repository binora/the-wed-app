import { combineReducers } from 'redux';

import auth from './auth';
import events from './events';

const rootReducer = combineReducers({
    auth : auth,
    events : events
});

export default rootReducer;
