import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
  } from 'react-native';

import { Card, CardItem } from 'native-base';

let events = [
  {
    "event_id"  : 1,
    "event_name" : "Shagun",
    "timestamp" : "2017-04-12 16:00:00",
    "description" : "description for shagun event"
  },
  {
    "event_id"  : 2,
    "event_name" : "Sangeet",
    "timestamp" : "2017-04-12 18:00:00",
    "description" : "description for sangeet event"
  },
  {
    "event_id"  : 3,
    "event_name" : "Shaadi",
    "timestamp" : "2017-04-13 14:00:00",
    "description" : "description for Shaadi"
  }
]

export default class Events extends Component {
  renderEvents() {
    return events.map((event) => {
      return (
        <Card style={styles.eventCard} key={event.event_id}>
          <Text>
            Event : {event.event_name}
          </Text>
          <Text>
            When? : {event.timestamp}
          </Text>
          <Text>
            Description : {event.description}
          </Text>
        </Card>
      )
    });

  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.eventContainer}>
        {this.renderEvents()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  eventContainer : {
    flexDirection : "column",
    justifyContent : "center"
  },
  eventCard : {
    height : 250,
    flex : 1,
    flexDirection : "column",
    justifyContent : "space-around"
  }

});
