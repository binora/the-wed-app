import React, { Component } from 'react';

// Components
import Loader from './Loader';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native';

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
        phoneNumber : ''
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
      <View>
        <TextInput
          placeholder={"Enter Mobile no."}
          onChangeText={this.onChangeText}
          keyboardType="numeric"
          value={this.state.phoneNumber}
          style={styles.input}>
        </TextInput>
        <LoginButton style={styles.login} onPress={this.onLoginPress}>
          Login!
        </LoginButton>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.title}>
          Raman weds Surbhi
        </Text>
        {this.renderLoginButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  title: {
    fontSize: 30
  },
  login: {
    alignSelf: "center",
    width: 100
  },
  input: {
    width: 200
  }
});
