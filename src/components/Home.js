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

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


// Import custom components
import Container from './Container';
import Hotel from './Hotel';
import Events from './Events';



const Home = (props) => {

  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <View style={styles.userName}>
          <Text style={styles.headerText}>
            {props.user.user_name}
          </Text>
        </View>
        <View style={styles.headerOptions}>
          <TouchableOpacity onPress={props.gotoNotifications}>
            <View style={styles.notifIconView}>
              <Icon
                name="bell-o"
                style={styles.notifIcon} />
              <View style={props.badgeCount ? styles.notifBadge : styles.hiddenNotifBadge}>
                <Text style={props.badgeCount ? styles.badgeText : styles.hiddenBadgeText}>{props.badgeCount}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.logoutUser}>
            <Text style={styles.logout}>
              logout
        </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollableTabView
        contentProps={{ keyboardShouldPersistTaps: true }}
        tabBarBackgroundColor="#EEEEEE"
        tabBarUnderlineStyle={styles.tabBarUnderline}
        tabBarActiveTextColor="black"
        page={props.initialTab}>
        <Hotel tabLabel="Hotel" room={props.user.room} />
        <Events tabLabel="Events" marriageEvents={props.marriageEvents} />
      </ScrollableTabView>
    </View>
  )
};


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#EEEEEE"
  },
  notifIconView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 30,
    height: 30,
  },
  hiddenNotifBadge: {
    backgroundColor: "transparent"
  },
  notifBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },
  header: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 20,
  },
  logout: {
    fontSize: 10,
    paddingLeft : 20
  },
  tabBarUnderline: {
    backgroundColor: "red"
  },
  notifIcon: {
    fontSize: 20,
    marginTop: 3,
    marginRight: 2
  },
  hiddenBadgeText: {
    color: "transparent"
  },
  badgeText: {
    color: "white",
    fontSize: 10
  },
  headerOptions: {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'flex-end',
  }

})

export default Home;
