import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './modules/reducer';

const logger = createLogger();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));


export default store;

