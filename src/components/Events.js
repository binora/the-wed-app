import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
  } from 'react-native';

import { Card, CardItem } from 'native-base';

export default class Events extends Component {
  renderEvents(events) {
    return events.map((event) => {
      return (
        <Card style={styles.eventCard} key={event._id}>
          <Text>
            Event : {event.name}
          </Text>
          <Text>
            Date : {event.event_date && (new Date(event.event_date)).toDateString()}
          </Text>
          <Text>
            Start time : {event.start_time}
          </Text>
          <Text>
            Venue : {event.venue}
          </Text>
        </Card>
      )
    });

  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.eventContainer}>
        {this.renderEvents(this.props.marriageEvents)}
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
