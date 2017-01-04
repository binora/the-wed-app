import React, { Component } from 'react';
import { Provider } from 'react-redux';


import App from './components/App';
import store from './redux/store';

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
