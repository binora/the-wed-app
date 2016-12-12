import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools }from 'remote-redux-devtools';
import createLogger from 'redux-logger';


import App from './components/App';
import rootReducer from './reducers/';

let logger = createLogger();
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware((logger))));
export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
