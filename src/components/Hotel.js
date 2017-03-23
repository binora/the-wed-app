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

import { Card, CardItem, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


import shagunImage from '../images/shagun.png';
import cardBg from '../images/card_bg.jpg';
import hotelImage from '../images/hotel.jpeg';

let { height, width } = Dimensions.get('window');

export default class Hotel extends Component {
  render() {
    return (
      <View style={styles.hotelContainer}>
        <Card style={styles.card}>
          <CardItem header>
            <Text>Welcome!</Text>
          </CardItem>
          <CardItem cardBody>
            <Image style={styles.hotelImage} source={hotelImage} />
          </CardItem>
          <CardItem content>
            <Text style={{fontSize : 16}}>
              Room :  {(this.props.room ? this.props.room : " To be Alloted")}
              </Text>
            <Text style={styles.shagunText}>
              Shagun Hotel,
              Zirakpur-Panchkula-Kalka Hwy,
              Zirakpur, Punjab 140603
            </Text>
          </CardItem>
          <CardItem style={{ justifyContent: 'space-around' }}>
            <Button transparent onPress={() => Linking.openURL('https://goo.gl/maps/fLH7GhZnzBE2')} >
              <Text style={{color : "blue"}}>Take me there!</Text>
            </Button>
          </CardItem>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hotelContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    flex: 0,
    flexDirection: "column",
    width: 0.9 * width,
  },
  shagunText: {
    width: 0.5*width,
    fontSize: 14,
    lineHeight  :20 
  },
  hotelImage: {
    alignSelf : "center",
    width : width,
    resizeMode: 'cover',
    height : 0.35*height
  }
})
