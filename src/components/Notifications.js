import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Keyboard,
  ListView
} from 'react-native';

import { Card, CardItem, Button as SendButton } from 'native-base';
import Loader from './Loader';
import LinearGradient from 'react-native-linear-gradient';

import moment from 'moment';

let { width, height } = Dimensions.get('window');

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    console.log(props.notifications)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      notif_body: '',
      dataSource: ds.cloneWithRows(props.notifications)
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSendPress = this.onSendPress.bind(this);
    this.renderNotif = this.renderNotif.bind(this);
  }

  renderNotif(notif) {
    return (
      <Card style={styles.notifCard} key={notif._id}>
        <CardItem>
          <Text style={styles.message}>
            Hello,
                </Text>
          <Text style={styles.message}>
            {notif.notif_body}
          </Text>
          <Text style={styles.small}>
            {moment(notif.sent_at).format('MMMM Do YYYY, h:mm:ss a')}
          </Text>
        </CardItem>
      </Card>
    )
  }

  renderNotifications() {
    if (this.props.isFetching) {
      return <Loader isVisible={this.props.isFetching} style={styles.loader} />
    }
    return (
      <ListView
        contentContainerStyle={styles.notifContainer}
        dataSource={this.state.dataSource}
        renderRow={this.renderNotif}
      />
    )

  }

  onChangeText(text) {
    this.setState({
      notif_body: text
    });
  }

  onSendPress() {
    Keyboard.dismiss();
    if (!this.state.notif_body.length) {
      return;
    }
    this.props.sendNotification(this.state.notif_body);
    this.setState({
      notif_body: ''
    });
  }
  renderSendButton() {
    if (this.props.sendingNotification) {
      return <Loader isVisible={true} />
    }
    return (
      <SendButton
        onPress={this.onSendPress}
        style={styles.sendButton}>
        Send
      </SendButton>
    )
  }
  renderAdminView() {
    if (!this.props.user.is_admin) {
      return <View></View>
    }
    return (
      <View style={styles.notifInputContainer} >
        <TextInput
          placeholder={"Type a message"}
          onChangeText={this.onChangeText}
          value={this.state.notif_body}
          style={styles.input}
          onSubmitEditing={this.onSendPress}
          underlineColorAndroid='rgba(0,0,0,0)' >
        </TextInput>
        {this.renderSendButton()}
      </View>
    )
  }

  render() {
    return (
      <View >
        {this.renderNotifications()}
        {this.renderAdminView()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  notifContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  notifCard: {
    flex: 0,
    width: 0.9 * width
  },
  message: {
    fontSize: 20,
  },
  loader: {
    marginTop: 0.3 * height
  },
  notifInputContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  },
  input: {
    width: .65 * width,
    height: 50,
    borderColor: 'black',
    marginLeft: 0.05 * width
  },
  sendButton: {
    alignSelf: "center",
    height: 50,
    width: 0.2 * width,
  }
});
