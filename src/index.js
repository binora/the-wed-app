import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers/';

export default class Index extends Component {
  render() {
    let store = createStore(rootReducer);
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
