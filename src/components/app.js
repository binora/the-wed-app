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
/*


The view layer binding introduces three concepts:
The Provider component: This is wrapped around the component tree. It makes it easy for the root component’s children to
                        hook up to the store using connect().

connect(): This is a function provided by react-redux. If a component wants to get state updates, it wraps itself using connect().
                  Then the connect function will set up all the wiring for it, using the selector.

selector: This is a function that you write. It specifies what parts of the state a component needs as properties.

 */
