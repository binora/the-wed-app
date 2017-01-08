import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View } from 'react-native';

import bgImage from '../images/bg_image.jpeg';

export default class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    backgroudImage : bgImage
  }
});
