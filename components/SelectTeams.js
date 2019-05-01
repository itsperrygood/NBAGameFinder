//Select teams 
import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, FlatList, TouchableHighlight, Image, Button, AsyncStorage, MenuButton, Icon, TouchableOpacity} from 'react-native';
//import Util from './Util.js';

var teams = ["Bucks","Bulls","Cavaliers","Celtics","Clippers","Grizzlies","Hawks","Heat","Hornets","Jazz","Kings","Knicks","Lakers","Mavericks","Magic","Nets","Nuggets","Pacers","Pelicans","Pistons","Raptors","Rockets","Sixers","Spurs","Suns","Thunder","Timberwolves","Trailblazers","Warriors","Wizards"]
// var teams = ["Atlanta Hawks", 
// "Boston Celtics",
// "Brooklyn Nets",
// "Charlotte Hornets",
// "Chicago Bulls", 
// "Cleveland Cavaliers", 
// "Dallas Mavericks", 
// "Denver Nuggets", 
// "Detroit Pistons", 
// "Golden State Warriors", 
// "Houston Rockets", 
// "Indiana Pacers", 
// "LA Clippers", 
// "LA Lakers", 
// "Memphis Grizzlies",
// "Miami Heat", 
// "Milwaukee Bucks", 
// "Minnesota Timberwolves", 
// "New Orleans Pelicans",
// "New York Knicks", 
// "Oklahoma City Thunder", 
// "Orlando Magic", 
// "Philadelphia Sixers", 
// "Phoenix Suns", 
// "Portland Trail Blazers", 
// "Sacramento Kings", 
// "San Antonio Spurs", 
// "Toronto Raptors", 
// "Utah Jazz", 
// "Washington Wizards"];

export class SelectTeams extends Component/*<Props>*/ {
  static navigationOptions = ({ navigation }) => {
    return{
      headerLeft: null, //removes back arrow, not necessarily needed here
      headerTitle: (
        <View style={{flexDirection: "row", marginLeft: 10}}>
          <Text style={styles.headerText}> NBA Game Finder </Text>
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
    return (
      <View>
      	<Text> Find all games in where [teams selected on the left] will play [teams selected on the right] in the 2018-19 season </Text>
        <Text> Select team(s) </Text>
	      <View style={{flexDirection:"row"}}>
          <FlatList
            style = {{height:"75%"}}
            ItemSeparatorComponent = {() => <View style={{height: 2, width: "50%", backgroundColor: "#007ebc"}} />}
            data = {teams} //state change triggers re-render
            renderItem = {({item}) => ( //"item" iterates through each element in the array set as 'data'
              <TouchableHighlight 
                style = {styles.list}
                activeOpacity = {0.5}
                underlayColor = '#66a8c1'
                onPress = {() => {}}
                // onPress = {() => this.props.navigation.navigate('AddToCalendar', {
                //   SelectedTeams: this.state.SelectedTeams,
                //   SelectedOpponents: this.state.SelectedOpponents,
                // })}
              >
                <Text style = {styles.text2}> {item} </Text>
              </TouchableHighlight>
            )}
          />
          <FlatList
            style = {{height:"75%"}}
            ItemSeparatorComponent = {() => <View style={{height: 2, width: "50%", backgroundColor: "#007ebc"}} />}
            data = {teams} //state change triggers re-render
            renderItem = {({item}) => ( //"item" iterates through each element in the array set as 'data'
              <TouchableHighlight 
                style = {styles.list}
                activeOpacity = {0.5}
                underlayColor = '#66a8c1'
                onPress = {() => {}}
                // onPress = {() => this.props.navigation.navigate('AddToCalendar', {
                //   SelectedTeams: this.state.SelectedTeams,
                //   SelectedOpponents: this.state.SelectedOpponents,
                // })}
              >
                <Text style = {styles.text2}> {item} </Text>
              </TouchableHighlight>
            )}
          />
	      </View>
        <TouchableHighlight 
	      	style={{ backgroundColor: 'mediumseagreen', left: 240, width: 130, height: 40, justifyContent: 'center', alignItems: 'center'}}  
	      	onPress={() => {this.props.navigation.navigate('ListGames')}}
	      >
					<Text style = {{color: '#FFFFFF', fontSize: 18}}> FIND GAMES </Text>
	      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    height: 30,
    width: "50%",
    //flex: 1,
    marginVertical: 0,
    margin: 0,
    backgroundColor: '#b9d9e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  text2: {
    color: '#007ebc',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
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