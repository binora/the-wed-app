import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux';

// Dumb component
import LoginComponent from '../components/Login';

// action creators for the above component
import { authenticateUser, loginUsingAccessToken } from '../redux/modules/auth';


class Login extends Component {
  componentWillMount() {
    this.props.loginUsingToken();
  }

  render() {
    return <LoginComponent authenticateUser={this.props.authenticateUser} auth={this.props.auth}/>
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authenticateUser : authenticateUser,
    loginUsingToken : loginUsingAccessToken
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
