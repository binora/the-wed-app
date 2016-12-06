import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
  } from 'react-native';

import { Card, CardItem } from 'native-base';

let notifications = [
  {
    "id"      : 1,
    "message" : "This is first notification"
  },
  {
    "id"      : 2,
    "message" : "This is a notification"
  },
  {
    "id"      : 4,
    "message" : "This is a notification"
  },
  {
    "id"      : 3,
    "message" : "This is a notification"
  }
]

export default class Notifications extends Component {
  renderNotifications() {
    return notifications.map((notif) => {
      return (
        <Card style={styles.notifCard} key={notif.id}>
          <Text style={styles.message}>
            {notif.message}
          </Text>
        </Card>
      )
    });

  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.notifContainer}>
        {this.renderNotifications()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  notifContainer : {
    flexDirection : "column",
    justifyContent : "center"
  },
  notifCard : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "flex-start",
    height : 100
  },
  message : {
    fontSize : 20
  }
});
