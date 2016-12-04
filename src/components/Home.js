import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
  } from 'react-native';


import ScrollableTabView from 'react-native-scrollable-tab-view'

// Import custom components
import Container from './Container';
import Hotel from './Hotel';
import Events from './Events';
import Notifications from './Notifications';

export default class Home extends Component {

  render() {
    return (
      
      <ScrollableTabView>
        <Hotel tabLabel="Hotel" />
        <Events tabLabel="Events" />
        <Notifications tabLabel="Notifications" />
      </ScrollableTabView>
    )
  }
}
