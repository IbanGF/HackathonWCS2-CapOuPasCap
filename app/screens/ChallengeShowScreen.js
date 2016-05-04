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

    return (
      <View style={styles.mainContainer}>
           <View style={styles.toolbar}>
             <TouchableOpacity onPress={() => this.props.navigator.pop() }>
               <Icon name="chevron-left" style={{marginTop: 15, marginLeft: 10}} size={20} />
             </TouchableOpacity>
             <Text style={styles.toolbarTitle}>Challenge V/S {this.props.person.firstName}</Text>
           </View>
           <View style={styles.content}>
               <Image style={styles.thumbnail} source={require('../../assets/avatars/iban.jpg')} />
               <Text style={styles.toolbarTitle}></Text>
               <Image style={styles.thumbnail} source={this.props.person.avatar} />
           </View>
       </View>

    )
  }

}

const styles = React.StyleSheet.create({


  thumbnail: {
      width: 150,
      height: 150,
      marginTop: 30,
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
    mainContainer:{
        flex:1,
    },
    content:{
        backgroundColor:'#ebeef0',
        flexDirection:'row',
          padding: 15,
        flex:1,
    },
});

module.exports = ChallengeShowScreen
