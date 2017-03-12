import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid, Alert } from 'react-native';
import { bindActionCreators } from 'redux';

import { Actions } from 'react-native-router-flux';
import FCM from 'react-native-fcm';

import HomeComponent from '../components/Home';

import { fetchEvents} from '../redux/modules/events';
import { refreshNotifications, fetchNotifications} from '../redux/modules/notifications';

import {incrementBadgeCount, clearBadgeCount} from '../redux/modules/misc';

import { logoutUser } from '../redux/modules/auth';

class Home extends Component {
   componentWillMount() {
        if (!this.props.isLoggedIn) {
            return false;
        }
        this.props.fetchEvents();
        this.props.fetchNotifications();
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.props.isLoggedIn) {
                BackAndroid.exitApp();
            }
            return false;
        });
        FCM.subscribeToTopic('wedding');

        FCM.on('notification', (notif) => {
            console.log("notifications")
            if (notif.opened_from_tray) {
                return;
            }
            let title = notif.fcm.title;
            let body = notif.fcm.body;
            Alert.alert(title, body, [
                { text: 'OK', onPress: () => { this.props.refreshNotifications() } }
            ]);
            this.props.incrementBadgeCount();
        });

        FCM.getInitialNotification().then((notif) => {
            if (notif.collapse_key) {
                return;
            }
        });
    }

    gotoNotifications() {
        this.props.clearBadgeCount();
        Actions.notifications();
    }
    render() {
        return <HomeComponent
            isFetching={this.props.isFetching}
            gotoNotifications={this.gotoNotifications.bind(this)}
            user={this.props.user}
            marriageEvents={this.props.marriageEvents}
            logoutUser={this.props.logoutUser}
            initialTab={this.props.initialTab}
            badgeCount={this.props.badgeCount}
            />
    }
}
const mapStateToProps = (state) => {
    if (!state.auth.isLoggedIn) {
        console.log("popping")
        Actions.pop();
    }
    return {
        isFetching : state.events.isFetching,
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user,
        marriageEvents: state.events.marriageEvents,
        badgeCount : state.misc.badgeCount
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchEvents: fetchEvents,
        logoutUser: logoutUser,
        refreshNotifications: refreshNotifications,
        fetchNotifications : fetchNotifications,
        clearBadgeCount : clearBadgeCount,
        incrementBadgeCount : incrementBadgeCount
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);