import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid } from 'react-native';
import { bindActionCreators } from 'redux';

import { Actions } from 'react-native-router-flux';
import HomeComponent from '../components/Home';

import { fetchEvents } from '../redux/modules/events';

import { logoutUser } from '../redux/modules/auth';



class Home extends Component {
    componentWillMount() {
        if (!this.props.isLoggedIn) {
            return false;
        }
        this.props.fetchEvents();
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.props.isLoggedIn) {
                BackAndroid.exitApp();
            }
            return false;
        });
    }
    render() {
        return <HomeComponent 
        user={this.props.user} 
        marriageEvents={this.props.marriageEvents}
        logoutUser={this.props.logoutUser}/>
    }
}
const mapStateToProps = (state) => {
    if (!state.auth.isLoggedIn) {
        Actions.pop();
    }
    return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user,
        marriageEvents : state.events.marriageEvents
    };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchEvents : fetchEvents,
    logoutUser : logoutUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);