import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid } from 'react-native';

import { Actions } from 'react-native-router-flux';


import HomeComponent from '../components/Home';



class Home extends Component {
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.props.isLoggedIn) {
                BackAndroid.exitApp();
            }
            return false;
        });
    }
    render() {
        return <HomeComponent user={this.props.user} />

    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(Home);