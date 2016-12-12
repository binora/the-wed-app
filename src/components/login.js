import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
  } from 'react-native';

import { Button as LoginButton} from 'native-base';

const Login = (props) => {
    console.log(props);
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>
        Raman weds Surbhi
      </Text>

      <TextInput
        placeholder={"Enter Mobile no."}
        onChangeText={props.onChangeText}
        keyboardType="numeric"
        value={props.phone}
        style={styles.input}>
      </TextInput>

      <LoginButton style={styles.login} onPress={props.onLoginPress}>
        Login!
      </LoginButton>

    </View>
  )
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
});

export default Login;
