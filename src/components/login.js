import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Dimensions
} from 'react-native';

let { height , width } = Dimensions.get('window');


import rishuImage from '../images/me.jpg';

export default class Login extends Component {
  render() {
    return (
      <Image source={rishuImage} style={styles.container}>
        <TextInput placeholder={"Phone no."} style={styles.phoneNumber}></TextInput>
      </Image>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    resizeMode : 'cover',
    width : null,
    height : null,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column'
  },
  phoneNumber : {
    width : 0.8*width,
    backgroundColor : "white"
  }
});
