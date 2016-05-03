/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

 'use strict';
 import React, {
   AppRegistry,
   Component,
   StyleSheet,
   Text
 } from 'react-native';
 import AppNavigator from './app/navigation/AppNavigator'

class hackathon extends Component {
  render() {
    return (
      <AppNavigator
        initilaRoute={{ident: "PeopleIndex"}} />
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('hackathon', () => hackathon);
