import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid } from 'react-native';
import { bindActionCreators } from 'redux';

import { Actions } from 'react-native-router-flux';
import FCM from 'react-native-fcm';

import HomeComponent from '../components/Home';

import { fetchEvents } from '../redux/modules/events';
import { fetchNotifications } from '../redux/modules/notifications';

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
        FCM.subscribeToTopic('wedding');
        
        FCM.on('notification', (notif) => {
            console.log(notif);
        });

        FCM.getInitialNotification().then((notif) => {
            console.log(notif);

        });
    }
    render() {
        return <HomeComponent
            isFetching={this.props.isFetching}
            user={this.props.user}
            marriageEvents={this.props.marriageEvents}
            logoutUser={this.props.logoutUser}
            fetchNotifications={this.props.fetchNotifications}
            notifications={this.props.notifications} />
    }
}
const mapStateToProps = (state) => {
    if (!state.auth.isLoggedIn) {
        Actions.pop();
    }
    return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user,
        marriageEvents: state.events.marriageEvents,
        notifications : state.notifs.notifications,
        isFetching : state.notifs.isFetching
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchEvents: fetchEvents,
        logoutUser: logoutUser,
        fetchNotifications : fetchNotifications
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);