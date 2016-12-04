import React, { Component } from 'react';

import Container from './Container';
import Login from './Login';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Home/>
      </Container>
    )
  }
}
