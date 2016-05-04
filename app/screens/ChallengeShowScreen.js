'use strict'
import React, { Component, Text, View, TouchableOpacity, Navigator, Image } from 'react-native'
import ViewContainer from '../components/ViewContainer';
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, PRIMARY_COLORS, COLOR, Card } from 'react-native-material-design';


const challenge = [
  {title: "Beer pong master", description: "Become the new ping pong super man"},
  {title: "Tennis", description: "Try not to loose"},
  {title: "Ping pong", description: "lalalalal lal all a"},
]

class ChallengeShowScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    var personBackgroundColor = "#607D8B";
    return (
      <ViewContainer style={{backgroundColor: personBackgroundColor}}>
        <TouchableOpacity onPress={() => this.props.navigator.pop() }>
          <Icon name="chevron-left" style={{marginTop: 15, marginLeft: 10}} size={20} />
        </TouchableOpacity>

        <Card style={styles.container}>
          <View>
            <Card.Body style={styles.versusWrapper}>
              <Image style={styles.thumbnail} source={require('../../assets/avatars/iban.jpg')} />
              <Image style={styles.thumbnail} source={this.props.person.avatar} />
              <Text>{this.props.person.firstName}</Text>
            </Card.Body>
          </View>
        </Card>
      </ViewContainer>
    )
  }

}

const styles = React.StyleSheet.create({

  container: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },

  versusWrapper: {
    marginTop: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  thumbnail: {
    flex: 1,
      width: 200,
      height: 200,
    },
});

module.exports = ChallengeShowScreen
