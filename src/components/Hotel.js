import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Linking,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Card, CardItem } from 'native-base';


import shagunImage from '../images/shagun.png';
import cardBg from '../images/card_bg.jpg';

let { height, width } = Dimensions.get('window');

export default class Hotel extends Component {
  render() {
    return (
      <View style={styles.hotelContainer}>
        <Card style={styles.card}>
          <Image source={cardBg} style={styles.cardBg}>
            <CardItem header>
              <Text style={styles.room}>
                Room : {this.props.room}
              </Text>
            </CardItem>
          </Image>
        </Card>
        <Image source={cardBg} style={styles.cardBg}>
          <Card style={styles.card}>
            <Text style={}>
              Shagun Hotel,
            </Text>
            <Text style={{ width: 250, fontSize: 15, alignSelf: "center" }}>
              Zirakpur-Panchkula-Kalka Hwy,
              Zirakpur, Punjab 140603
            </Text>
          </Card>
        </Image>
        <Card style={styles.card}>

          <View style={styles.location}>
            <TouchableOpacity onPress={() => Linking.openURL('https://goo.gl/maps/fLH7GhZnzBE2')} >
              <Image source={shagunImage} />
            </ TouchableOpacity>

          </View>

        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hotelContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: 0.9 * width
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  cardBg: {
    height: null,
    width: null,
    resizeMode: "cover"
  },
  room: {
    fontSize: 50,
    alignSelf: "center",
    fontFamily: "ds_regular",
    color: "white"
  },
  address: {
    width: 250,
    fontSize: 15,
    alignSelf: "center",
    fontFamily : "ds_regular",
    color : "white"
  }
})
