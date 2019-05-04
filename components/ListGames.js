//Select teams 
import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, FlatList, TouchableHighlight, Image, Button, AsyncStorage, MenuButton, Icon, TouchableOpacity} from 'react-native';
//import Util from './Util.js';

var username;

export class SelectTeams extends Component/*<Props>*/ {
  static navigationOptions = ({ navigation }) => {
    return{
      //headerLeft: null, //removes back arrow, not necessarily needed here
      headerTitle: (
        <View style={{flexDirection: "row", marginLeft: 10}}>
          <Text style={styles.headerText}> List of Selected Games </Text>
        </View>
      ),
      headerStyle: { backgroundColor: '#007ebc' },
    }
  }

  constructor(props){
    super(props);
    this.state = {
      SelectedTeams: [],
      SelectedOpponents: []
    }
  }

  render() {
    const { navigation } = this.props;
    const selectTeams = navigation.getParam('SelectedTeams');
    const selectOpponents = navigation.getParam('SelectedOpponents');
    return (
      <View>
        <Text> Games: </Text>
        <Text> Teams: {selectTeams} </Text>
        <Text> Opponents: {selectOpponents} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  headerText:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  button: {
  	height: 50,
  	top: 25,
    marginVertical: 10,
    backgroundColor: '#007EBC',
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

export default SelectTeams;