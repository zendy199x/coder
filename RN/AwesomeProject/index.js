import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import {name as appName} from './app.json';

export default class App extends Component {
    render() {
        return(
            <View>
            
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);
