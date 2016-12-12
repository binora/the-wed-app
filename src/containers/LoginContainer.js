import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Login from '../components/Login';

import auth from '../actions/auth';

class Login extends Component {
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
    authenticateUser : auth.authenticateUser,
    onChangeText     : auth.onChangeText
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    phone : state.phone
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
