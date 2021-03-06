import React, { Component } from 'React'

import { StyleSheet } from 'react-native';

import Spinner from 'react-native-spinkit';

const Loader = (props) => {
    return <Spinner
        isVisible={props.isVisible}
        type={"Pulse"}
        size={50}
        color={"red"}
        style={props.style} />
};

export default Loader;