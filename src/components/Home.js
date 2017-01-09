import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';




import ScrollableTabView from 'react-native-scrollable-tab-view'
import cardBg from '../images/card_bg.jpg';

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
        <TouchableOpacity onPress={props.logoutUser}>
          <Text style={styles.logout}>
            logout
        </Text>
        </TouchableOpacity>
        </View>

      <ScrollableTabView 
      tabBarBackgroundColor="white" 
      tabBarUnderlineStyle={styles.tabBarUnderline}
      tabBarActiveTextColor="black">
        <Hotel tabLabel="Hotel" room={props.user.room} />
        <Events tabLabel="Events" marriageEvents={props.marriageEvents} />
        <Notifications tabLabel="Notifications" />
      </ScrollableTabView>
    </View>
  )
};


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize:   15
  },
  logout : {
    fontSize:  10
  },
  tabBarUnderline : {
    backgroundColor : "red"
  }
})

export default Home;
