import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import { Card, CardItem } from 'native-base';
import Loader from './Loader';
import LinearGradient from 'react-native-linear-gradient';

let { width, height } = Dimensions.get('window');

export default class Notifications extends Component {

  componentWillMount() {
    this.props.fetchNotifications();
  }

  renderNotifications(notifications) {
    if (this.props.isFetching) {
      return <Loader isVisible={this.props.isFetching} style={styles.loader} />
    }
    return notifications.map((notif) => {
      return (
        <Card style={styles.notifCard} key={notif._id}>
          <LinearGradient colors={["#8E0E00", "#1F1C18"]} style={styles.cardBg}>
            <CardItem>
              <Text style={styles.message}>
                Hello,
                </Text>
              <Text style={styles.message}>
                {notif.notif_body}
              </Text>
            </CardItem>
          </LinearGradient>
        </Card>
      )
    });

  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.notifContainer}>
        {this.renderNotifications(this.props.notifications)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  notifContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  notifCard: {
    flex: 0,
    width: 0.9 * width
  },
  message: {
    fontSize: 20,
    color : "white"
  },
  loader : {
    marginTop : 0.3*height
  }
});
