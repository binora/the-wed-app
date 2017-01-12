import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import { Card, CardItem } from 'native-base';

let { height, width } = Dimensions.get('window');

import cardBg from '../images/card_bg.jpg';

export default class Events extends Component {
  renderEvents(events) {
    return events.map((event) => {
      return (
        <Card style={styles.eventCard} key={event._id}>
          <Image source={cardBg} style={styles.cardImage}>
          <CardItem header>
            <Text style={styles.eventName}>
              {event.name}
            </Text>
        </CardItem>
          <CardItem>
            <Text style={styles.cardText}>
              {event.start_time}
              </Text>
              <Text style={styles.cardText}>
              {event.event_date && (new Date(event.event_date)).toDateString()}
            </Text>
          </CardItem>

          <CardItem header>
            <Text style={styles.cardText}>
              {event.venue}
            </Text>
          </CardItem>
            </Image>
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
  eventContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems : "center"
  },
  eventCard: {
    marginTop : 20,
    width : 0.9*width,
    flex: 1,
    flexDirection: "column"
  },
  cardImage: {
    height: null,
    width: null,
    resizeMode: 'cover'
  },
  eventName : {
    fontFamily : "ds_regular",
    fontSize : 25,
    color : "white"

  },
  cardText : {
    fontFamily : "ds_regular",
    color : "white",
    fontSize :20
  }
});
