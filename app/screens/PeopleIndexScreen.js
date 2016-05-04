'use strict'
import React, { Component, Text, View, ListView, TouchableOpacity, Navigator, Image, Tab, TabLayout } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Avatar } from 'react-native-material-design';

const people = [
  {firstName: "mauricio", lastName: "oporto", gender: 'male', avatar: require('../../assets/avatars/mauricio.jpg')},
  {firstName: "iban", lastName: "goenaga", gender: 'male', avatar: require('../../assets/avatars/iban.jpg')},
  {firstName: "jeremy", lastName: "boush", gender: 'male', avatar: require('../../assets/avatars/jeremy.jpg')},
  {firstName: "laurane", lastName: "bletterie", gender: 'female', avatar: require('../../assets/avatars/laurane.jpg')},
    {firstName: "mauricio", lastName: "oporto", gender: 'male', avatar: require('../../assets/avatars/mauricio.jpg')},
    {firstName: "iban", lastName: "goenaga", gender: 'male', avatar: require('../../assets/avatars/iban.jpg')},
    {firstName: "jeremy", lastName: "boush", gender: 'male', avatar: require('../../assets/avatars/jeremy.jpg')},
    {firstName: "laurane", lastName: "bletterie", gender: 'female', avatar: require('../../assets/avatars/laurane.jpg')},
      {firstName: "mauricio", lastName: "oporto", gender: 'male', avatar: require('../../assets/avatars/mauricio.jpg')},
      {firstName: "iban", lastName: "goenaga", gender: 'male', avatar: require('../../assets/avatars/iban.jpg')},
      {firstName: "jeremy", lastName: "boush", gender: 'male', avatar: require('../../assets/avatars/jeremy.jpg')},
      {firstName: "laurane", lastName: "bletterie", gender: 'female', avatar: require('../../assets/avatars/laurane.jpg')},
        {firstName: "mauricio", lastName: "oporto", gender: 'male', avatar: require('../../assets/avatars/mauricio.jpg')},
        {firstName: "iban", lastName: "goenaga", gender: 'male', avatar: require('../../assets/avatars/iban.jpg')},
        {firstName: "jeremy", lastName: "boush", gender: 'male', avatar: require('../../assets/avatars/jeremy.jpg')},
        {firstName: "laurane", lastName: "bletterie", gender: 'female', avatar: require('../../assets/avatars/laurane.jpg')},
]

class PeopleIndexScreen extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer style={{backgroundColor: '#E0E0E0'}}>
        <View style={styles.header}><Text style={styles.titleText}>A qui lancer un défi?</Text></View>
        <ListView
          initialListSize={10}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => this._renderPersonRow(person)} />
      </ViewContainer>
    )
  }

  _renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person) }>
        <Avatar image={<Image source={person.avatar} />} />
        <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={20} style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

  _navigateToPersonShow(person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person
    })
  }

}

const styles = React.StyleSheet.create({

  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    backgroundColor: "#004D40",
    marginBottom: 15,
  },

  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#9E9E9E",
  },

  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    height: 70,
    marginLeft: 10,
  },

  personName: {
    justifyContent: "center",
    marginTop: 14, // :-D
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#455A64",
  },

  personMoreIcon: {
    color: "#004D40",
    height: 25,
    marginRight: 25,
    marginTop: 16, // :-D
  }

});

module.exports = PeopleIndexScreen
