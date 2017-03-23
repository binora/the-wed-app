import React, { Component } from 'react';
import { Navigator } from 'react-native';

// routing
import {Scene, Router, ActionConst} from 'react-native-router-flux';



import Login from '../containers/LoginContainer';
import Home from '../containers/HomeContainer';
import Notifications from '../containers/NotificationsContainer';


export default class App extends Component {
  render() {
    return <Router>
        <Scene key="root" tabs={false} hideNavBar={true} >
          <Scene key="login" component={Login} initial={true}/>
          <Scene key="home" component={Home} hideNavBar={true} title={"home"} />
          <Scene key="notifications" type={ActionConst.PUSH}  component={Notifications} hideNavBar={false} title={"Notifications"} />
        </Scene>
      </Router>
  }
}
