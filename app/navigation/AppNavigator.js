'use strict'
import React, { Component, Navigator, Text, BackAndroid } from 'react-native'
import PeopleIndexScreen from '../screens/PeopleIndexScreen'
import PersonShowScreen from '../screens/PersonShowScreen'

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

class AppNavigator extends Component {

    _renderScene(route, navigator) {

    _navigator = navigator;

    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "PeopleIndex":
        return (
          <PeopleIndexScreen
            {...globalNavigatorProps} />
        )

      case "PersonShow":
        return (
          <PersonShowScreen
            {...globalNavigatorProps}
            person={route.person} />
        )

      default:
        return (
          <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
        )
    }
  }

  render() {
    return (
        <Navigator
          initialRoute={{ident: "PeopleIndex"}}
          ref="appNavigator"
          style={styles.navigatorStyles}
          renderScene={this._renderScene} />
    )
  }

}

const styles = React.StyleSheet.create({

})

module.exports = AppNavigator
