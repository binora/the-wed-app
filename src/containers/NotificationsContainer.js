import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { bindActionCreators } from 'redux';

// Dumb component
import NotificationsComponent from '../components/Notifications';

import {
    sendNotification,
    fetchNotifications
} from '../redux/modules/notifications'

import { clearBadgeCount } from '../redux/modules/misc';


class Notifications extends Component {
    render() {
        return (
            <NotificationsComponent
                isFetching={this.props.isFetching}
                notifications={this.props.notifications}
                user={this.props.user}
                sendingNotification={this.props.sendingNotification}
                sendNotification={this.props.sendNotification} />
        )

    }
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        notifications: state.notifs.notifications,
        isFetching: state.notifs.isFetching,
        sendingNotification: state.notifs.sendingNotification
    };
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchNotifications: fetchNotifications,
        sendNotification: sendNotification,
        clearBadgeCount: clearBadgeCount
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
