import React, { Component } from 'react';

import Container from './Container';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Login/>
      </Container>
    )
  }
}
