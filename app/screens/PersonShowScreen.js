'use strict'
import React, { Component, Text, View, ListView, TouchableOpacity, Image } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Avatar, Button, PRIMARY_COLORS, COLOR, Card } from 'react-native-material-design';

const challenge = [
  {title: "Beer pong master", description: "Become the new ping pong super man"},
  {title: "Tennis", description: "Try not to loose"},
  {title: "Ping pong", description: "lalalalal lal all a"},
]

class PersonShowScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource: ds.cloneWithRows(challenge)
    }
  }

  render() {
    var personBackgroundColor
    switch(this.props.person.gender) {
      case 'male':
        personBackgroundColor = "#607D8B"
        break
      case 'female':
        personBackgroundColor = "#E91E63"
        break
    }

    return (
      <ViewContainer style={{backgroundColor: personBackgroundColor}}>

        <TouchableOpacity onPress={() => this.props.navigator.pop() }>
          <Icon name="chevron-left" style={{marginTop: 15, marginLeft: 10}} size={20} />
        </TouchableOpacity>
          <Card style={styles.container}>
            <View>
              <Card.Media
                style={styles.profileImage}
                image={<Image source={this.props.person.avatar} />}
                overlay
              />
              <Card.Body>
                <Text style={styles.personFirstName}>{`${_.capitalize(this.props.person.firstName)}`}</Text>
                <Text style={styles.personLastName}>{`${_.capitalize(this.props.person.lastName)}`}</Text>
              </Card.Body>
              <Card.Actions>
                <Button raised = {true} primary = {"paperDeepOrange"} text = {"T\'es cap ?"} theme = {"dark"} onPress={() => this.props.navigator.pop()}/>
              </Card.Actions>
            </View>
          </Card>
      </ViewContainer>
    )
  }

}

const styles = React.StyleSheet.create({

  container: {
    marginTop: 40,
    flexDirection: "column",
    alignItems: "center",
  },

  profileImage: {
    backgroundColor: 'black',
  },

  personFirstName: {
    fontSize: 45,
  },

  personLastName: {
    fontSize: 30,
  },

});

module.exports = PersonShowScreen
