import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux';

// Dumb component
import LoginComponent from '../components/Login';

// action creators for the above component
import { loginUsingPhoneNumber, loginUsingAccessToken } from '../redux/modules/auth';


class Login extends Component {
  componentWillMount() {
    this.props.loginUsingAccessToken();
  }

  render() {
    return <LoginComponent loginUsingPhoneNumber={this.props.loginUsingPhoneNumber} auth={this.props.auth}/>
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUsingPhoneNumber : loginUsingPhoneNumber,
    loginUsingAccessToken : loginUsingAccessToken
  }, dispatch);
}

const mapStateToProps = (state) => {
  if (state.auth.isLoggedIn) {
    Actions.home();
  }
  return {
    auth : state.auth
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
