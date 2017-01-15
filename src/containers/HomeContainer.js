import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid, Alert } from 'react-native';
import { bindActionCreators } from 'redux';

import { Actions } from 'react-native-router-flux';
import FCM from 'react-native-fcm';

import HomeComponent from '../components/Home';

import { fetchEvents} from '../redux/modules/events';
import {
    fetchNotifications,
    sendNotification,
    refreshNotifications,
    gotoNotifTab
} from '../redux/modules/notifications';

import { NOTIFICATION_TAB , setInitialTab } from '../redux/modules/misc';

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
            if (notif.opened_from_tray) {
                this.props.setInitialTab(NOTIFICATION_TAB);
                return;
            }
            let title = notif.fcm.title;
            let body = notif.fcm.body;
            Alert.alert(title, body, [
                { text: 'OK', onPress: () => { this.props.refreshNotifications() } }
            ]);

        });

        FCM.getInitialNotification().then((notif) => {
            if (notif.collapse_key) {
                this.props.setInitialTab(NOTIFICATION_TAB);
                return;
            }
        });
    }
    render() {
        return <HomeComponent
            isFetching={this.props.isFetching}
            user={this.props.user}
            marriageEvents={this.props.marriageEvents}
            logoutUser={this.props.logoutUser}
            fetchNotifications={this.props.fetchNotifications}
            sendingNotification={this.props.sendingNotification}
            sendNotification={this.props.sendNotification}
            notifications={this.props.notifications}
            initialTab={this.props.initialTab}/>
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
        notifications: state.notifs.notifications,
        isFetching: state.notifs.isFetching,
        sendingNotification: state.notifs.sendingNotification,
        initialTab : state.misc.initialTab
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchEvents: fetchEvents,
        logoutUser: logoutUser,
        fetchNotifications: fetchNotifications,
        sendNotification: sendNotification,
        refreshNotifications: refreshNotifications,
        setInitialTab : setInitialTab
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);