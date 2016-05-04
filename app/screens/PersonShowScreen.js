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
      challengesDataSource: ds.cloneWithRows(challenge)
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
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => this.props.navigator.pop() }>
          <Icon name="chevron-left" style={{marginTop: 15, marginLeft: 10}} size={20} />
        </TouchableOpacity>
        <Text style={styles.toolbarTitle}>Choice your Challenge</Text>
      </View>
        <Card style={styles.containerProfile}>
          <View style={styles.profilePerson}>
            <Image style={styles.profileImage} source={this.props.person.avatar} />
            <Text style={styles.personName}>{`${_.capitalize(this.props.person.firstName)}`} {`${_.capitalize(this.props.person.lastName)}`}</Text>
          </View>
        </Card>
        <Card style={styles.container}>
          <View>
            <Card.Body>
              <ListView
                initialListSize={10}
                dataSource={this.state.challengesDataSource}
                renderRow={(challenge) => this._renderChallengeRow(challenge) } />
            </Card.Body>
            <Card.Actions>
              <Button raised = {true} primary = {"paperDeepOrange"} text = {"T\'es cap ?"} theme = {"dark"} onPress={() => this.props.navigator.pop()}/>
            </Card.Actions>
          </View>
        </Card>
      </ViewContainer>
    )
  }

  _renderChallengeRow(challenge) {
      return (
        <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToChallengeShow(challenge) }>
          <Text>{`${_.capitalize(challenge.title)}`}</Text>
          <Text>{`${_.capitalize(challenge.description)}`}</Text>
          <Icon name="chevron-right" size={20} style={styles.personMoreIcon} />
        </TouchableOpacity>
      )
    }

  _navigateToChallengeShow(challenge) {
    this.props.navigator.push({
      ident: "ChallengeShow",
      challenge,
      person: this.props.person
    })
  }

}

const styles = React.StyleSheet.create({

  container: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },

  containerProfile: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#ccc',
  },

  profileImage: {
    marginTop: 20,
    alignItems: 'center',
  },

  profilePerson: {
    marginTop: 20,
    alignItems: 'center',
  },

  personName: {
    fontSize: 45,
    textAlign:'center',
    padding: 10,
  },

  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 100,
  },

  personMoreIcon: {
    color: "#004D40",
    height: 25,
    marginRight: 25,
    marginTop: 16, // :-D
  },

  toolbar:{
      backgroundColor:'#81c04d',
      paddingTop:40,
      paddingBottom:10,
      flexDirection:'row',
  },

  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      fontSize: 30,
      flex:1,

  },

});

module.exports = PersonShowScreen
