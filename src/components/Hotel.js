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
import LinearGradient from 'react-native-linear-gradient';


import shagunImage from '../images/shagun.png';
import cardBg from '../images/card_bg.jpg';

let { height, width } = Dimensions.get('window');

export default class Hotel extends Component {
  render() {
    return (
      <View style={styles.hotelContainer}>
        <Card style={styles.card}>
          <LinearGradient colors={["#8E0E00", "#1F1C18"]} style={styles.cardBg}>
            <CardItem >
              <Text style={styles.room}>
                Room  {this.props.room}
              </Text>
            </CardItem>
          </LinearGradient>
        </Card>
        <Card style={styles.card}>

          <View style={styles.location}>
            <TouchableOpacity onPress={() => Linking.openURL('https://goo.gl/maps/fLH7GhZnzBE2')} >
              <Image source={shagunImage} />
            </ TouchableOpacity>
          </View>

          <LinearGradient colors={["#8E0E00", "#1F1C18"]} style={styles.cardBg}>
            <Text style={styles.shagunText}>
              Shagun Hotel,
            </Text>
            <Text style={styles.address}>
              Zirakpur-Panchkula-Kalka Hwy,
              Zirakpur, Punjab 140603
            </Text>
          </LinearGradient>
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
    flex : 0,
    width: 0.9 * width,
    marginBottom : 20
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  room: {
    fontSize: 50,
    alignSelf: "center",
    color: "#EEEEEE"
  },
  address: {
    width: 250,
    fontSize: 15,
    alignSelf: "center",
    color : "#EEEEEE",
    paddingBottom : 10
  },
  shagunText : {
    width: 250,
    fontSize: 15,
    alignSelf: "center",
    color : "#EEEEEE",
    paddingTop : 10
  }
})
