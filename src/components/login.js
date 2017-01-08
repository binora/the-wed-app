import React, { Component } from 'react';


// Components
import Loader from './Loader';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Dimensions
} from 'react-native';

let { width , height } = Dimensions.get('window');

import { Button as LoginButton } from 'native-base';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ''
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onLoginPress = this.onLoginPress.bind(this);
  }

  componentWillUpdate() {
    if (this.props.auth.isLoggedIn) {
      this.setState({
        phoneNumber: ''
      });
    }
  }
  onChangeText(text) {
    if (text.length > 10) {
      return;
    }
    this.setState({
      phoneNumber: text
    });
  }

  onLoginPress() {
    this.props.loginUsingPhoneNumber(this.state.phoneNumber)
  }

  renderLoginButton() {
    if (this.props.auth.isFetching) {
      return <Loader isVisible={this.props.auth.isFetching} />
    }
    return (
      <View style={styles.loginView}>
        <TextInput
          placeholder={"Phone No."}
          onChangeText={this.onChangeText}
          keyboardType="numeric"
          value={this.state.phoneNumber}
          onSubmitEditing={this.onLoginPress}
          style={styles.input}
          underlineColorAndroid='rgba(0,0,0,0)'>
        </TextInput>
        <LoginButton
          style={styles.loginButton}
          onPress={this.onLoginPress}
          btnFontFamily={"respective"} >
          Login
        </LoginButton>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>
            Raman weds Surbhi
        </Text>
        </View>
        {this.renderLoginButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems : "center",
    backgroundColor : 'red'
  },
  heading: {
    marginTop: 60,
    marginBottom: 100
  },
  title: {
    fontSize: 40,
    fontFamily: "respective"
  },
  loginView: {
    minHeight: 200,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  loginButton: {
    alignSelf: "center",
    width: 100,

  },
  input: {
    width: .66*width,
    borderWidth : 1,
    borderRadius : 5,
    height : 50,
    borderColor : 'gray'
  }
});
