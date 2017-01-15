import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import bgImage from '../images/bg_image.jpg';

export default class Container extends Component {
  render() {
    return (
        <Image source={bgImage} style={styles.container} >
          {this.props.children}
        </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode : 'stretch',
    height : undefined,
    width : undefined
  }
});
