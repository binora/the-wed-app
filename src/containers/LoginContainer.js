import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Login from '../components/Login';

import * as loginActions from '../actions/actions_login';

class LoginContainer extends Component {
  render() {
    return (
      <Login
        phone={this.props.phone}
        onChangeText={this.props.onChangeText}
        onLoginPress={this.props.authenticateUser}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // authenticateUser : dispatch(auth.authenticateUser),
    onChangeText     : loginActions.onChangeText
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    phone : state.login.phone
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
