import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'
import { bindActionCreators } from 'redux';

// Dumb component
import LoginComponent from '../components/Login';

// action creators for the above component
import { authenticateUser } from '../redux/modules/auth';


class Login extends Component {
  componentWillMount() {
    if (this.props.isLoggedIn) {
      Actions.home();
      return false;
    }
    return true;
  }

  render() {
    return <LoginComponent authenticateUser={this.props.authenticateUser}/>
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authenticateUser : authenticateUser
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn : state.auth.isLoggedIn
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
