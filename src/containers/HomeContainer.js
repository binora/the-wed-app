import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid } from 'react-native';
import { bindActionCreators } from 'redux';

import HomeComponent from '../components/Home';

import { fetchEvents } from '../redux/modules/events';



class Home extends Component {
    componentWillMount() {
        this.props.fetchEvents();
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.props.isLoggedIn) {
                BackAndroid.exitApp();
            }
            return false;
        });
    }
    render() {
        return <HomeComponent user={this.props.user} marriageEvents={this.props.marriageEvents} />

    }
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user,
        marriageEvents : state.events.marriageEvents
    };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchEvents : fetchEvents
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);