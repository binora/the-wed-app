import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
  } from 'react-native';

import { Button as LoginButton} from 'native-base';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone : ""
    }
  }

  onChangeText(text) {
    this.setState({
      phone : text
    });
  }

  onLoginPress() {
    console.log('Login button pressed');
  }
  render() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.title}>
          Raman weds Surbhi
        </Text>

        <TextInput
          placeholder={"Enter Mobile no."}
          onChangeText={this.onChangeText.bind(this)}
          keyboardType="numeric"
          style={styles.input}>
          {this.state.phone}
        </TextInput>


        <LoginButton style={styles.login} onPress={this.onLoginPress.bind(this)}>
          Login!
        </LoginButton>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginContainer  : {
    flex : 1,
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "space-around"
  },
  title : {
    fontSize : 30
  },
  login : {
    alignSelf : "center",
    width : 100
  },
  input : {
    width : 200
  }

})
