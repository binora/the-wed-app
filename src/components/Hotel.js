import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Linking,
  Image,
  TouchableOpacity
  } from 'react-native';

import { Card, CardItem } from 'native-base';


import shagunImage from '../images/shagun.png';

export default class Hotel extends Component {
  render() {
    return (
      <View style={styles.hotelContainer}>
        <Card style={styles.card}>
            <Text style={{fontSize : 50, alignSelf : "center"}}>
              Room : {this.props.room}
            </Text>
        </Card>
        <Card style={styles.card}>

          <View style={styles.location}>

                <TouchableOpacity onPress={() => Linking.openURL('https://goo.gl/maps/fLH7GhZnzBE2')} >
                  <Image source={shagunImage}/>
                </ TouchableOpacity>


        </View>

        </Card>
        <Card style={styles.card}>
            <Text style={{width : 250, fontSize : 15, alignSelf : "center"}}>
              Shagun Hotel,
            </Text>
            <Text style={{width : 250, fontSize : 15, alignSelf : "center"}}>
              Zirakpur-Panchkula-Kalka Hwy,
              Zirakpur, Punjab 140603
            </Text>
        </Card>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  hotelContainer : {
    flex : 1,
    flexDirection : "column"
  },
  card : {
    flex : 1,
    flexDirection : "column",
    justifyContent : "center"
  },
  location : {
    flexDirection : "row",
    justifyContent : "space-around"
  }
})
