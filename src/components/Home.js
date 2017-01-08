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



const Home = (props) => {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Welcome {props.user.user_name}!
          </Text>
        </View>

        <ScrollableTabView>
          <Hotel tabLabel="Hotel" room={props.user.room}/>
          <Events tabLabel="Events" marriageEvents={props.marriageEvents}/>
          <Notifications tabLabel="Notifications" />
        </ScrollableTabView>
    </View>
    )
};

const styles = StyleSheet.create({
  homeContainer : {
    flex : 1,
    flexDirection : "column"
  },
  header : {
    padding : 15,
    backgroundColor : "red",
    flexDirection : "row",
    justifyContent : "center"
  },
  headerText : {
    fontSize : 15,
    color : "white"
  }
})

export default Home;
