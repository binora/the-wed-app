import React, { Component } from 'react';
import { Navigator } from 'react-native';

// routing
import {Scene, Router} from 'react-native-router-flux';



import Container from './Container';
import Login from './Login';
import Home from './Home';


export default class App extends Component {
  render() {
    return <Container>
      <Router>
        <Scene key="root" tabs={false} >
          <Scene key="login" component={Login} initial={true}/>
          <Scene key="home" component={Home} hideNavBar={true} title={"home"} />
        </Scene>
      </Router>
    </Container>
  }
}


/*


The view layer binding introduces three concepts:
The Provider component: This is wrapped around the component tree. It makes it easy for the root component’s children to
hook up to the store using connect().

connect(): This is a function provided by react-redux. If a component wants to get state updates, it wraps itself using connect().
Then the connect function will set up all the wiring for it, using the selector.

selector: This is a function that you write. It specifies what parts of the state a component needs as properties.

* /
import React, { Component } from 'react';
import {
StyleSheet,
Image,
Text,
TouchableOpacity,
Navigator,
View
} from 'react-native';

import Home from './threeTabs'
import Chat from './eachchat'

export default class Index extends Component {
constructor(props){
super(props)
}

renderScene(route, navigator) {
const {state,actions} = this.props;
const routeId = route.id;

if (routeId === 'home') {
return (
<Home
{...this.props}
navigator={navigator}
/>
);
}

if (routeId === 'chat') {
return (
<Chat
{...this.props}
image={route.image}
name={route.name}
navigator={navigator} />
);
}
}

render() {
return (
<View style={{ flex:1 }}>
<Navigator
style={{ flex:1 }}
ref={'NAV'}
initialRoute={{ id: 'home', name: 'home' }}
renderScene={this.renderScene.bind(this)}
/>
</View>
)
}
}
*/
