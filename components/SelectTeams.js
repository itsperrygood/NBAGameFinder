//Select teams 
import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, FlatList, TouchableHighlight, Image, Button, AsyncStorage, MenuButton, Icon, TouchableOpacity} from 'react-native';
//import Util from './Util.js';

var teams = ["Bucks","Bulls","Cavaliers","Celtics","Clippers","Grizzlies","Hawks",
"Heat","Hornets","Jazz","Kings","Knicks","Lakers","Mavericks","Magic","Nets",
"Nuggets","Pacers","Pelicans","Pistons","Raptors","Rockets","Sixers","Spurs",
"Suns","Thunder","Timberwolves","Trailblazers","Warriors","Wizards"];
var selectTeams = [];
var selectOpponents = [];

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
    console.log ("_____________________CONSTRUCTOR________________________") 
  }

  toggleTeamSelect(teamName) {
    if(selectTeams.includes(teamName) == false){ //if team name is not already in selected list
      selectTeams.push(teamName)
    }else{
      for(i=0;i<selectTeams.length;i++){ //if team name is in selected list, find and remove it
        if(selectTeams[i]==teamName){
          selectTeams.splice(i,1)
        }
      }
    }
    this.setState({SelectedTeams: selectTeams})    
  }

  toggleOpponentSelect(teamName) {
    if(selectOpponents.includes(teamName) == false){ //if team name is not already in selected list
      selectOpponents.push(teamName)
    }else{
      for(i=0;i<selectOpponents.length;i++){ //if team name is in selected list, find and remove it
        if(selectOpponents[i]==teamName){
          selectOpponents.splice(i,1)
        }
      }
    }
    this.setState({SelectedOpponents: selectOpponents})    
  }

  buttonStyleTeam (teamName){
    if(selectTeams.includes(teamName) == true){ //if team is selected, return highlighted color
      return {
        height: 40,
        width: "100%",
        //flex: 1,
        marginVertical: 0,
        margin: 0,
        backgroundColor: '#90c3ce',
        justifyContent: 'center',
        alignItems: 'center',
      }
    } else {
      return { //if not selected, return default color
        height: 40,
        width: "100%",
        //flex: 1,
        marginVertical: 0,
        margin: 0,
        backgroundColor: '#b9d9e5',
        justifyContent: 'center',
        alignItems: 'center',
      }
    }
  }

  buttonStyleOpponent (teamName){
    if(selectOpponents.includes(teamName) == true){ //if opponent selected
      return {
        height: 40,
        width: "100%",
        //flex: 1,
        marginVertical: 0,
        margin: 0,
        backgroundColor: '#7b7e84',
        justifyContent: 'center',
        alignItems: 'center',
      }
    } else {
      return {
        height: 40,
        width: "100%",
        //flex: 1,
        marginVertical: 0,
        margin: 0,
        backgroundColor: '#b2a9a9',
        justifyContent: 'center',
        alignItems: 'center',
      }
    }
  }

  render() {
    return (
      <View>
      	<Text> Find all games in which [teams selected on the left] will play [teams selected on the right] in the 2018-19 season </Text>
        <Text style={{color: '#000000', top: 10, fontSize: 18}}>          Select Team(s)               Select Opponent(s)   </Text>
	      <View style={{flexDirection:"row", height:"80%",top:10}}>
          <FlatList
            ItemSeparatorComponent = {() => <View style={{height: 2, width: "100%", backgroundColor: "#007ebc"}} />}
            data = {teams} //state change triggers re-render
            renderItem = {({item}) => ( //"item" iterates through each element in the array set as 'data'
              <TouchableHighlight 
                style = {this.buttonStyleTeam(item)}
                activeOpacity = {0.5}
                underlayColor = '#90c3ce'
                onPress = { () => {this.toggleTeamSelect(item)} }
              >
                <Text style = {styles.text2}> {item} </Text>
              </TouchableHighlight>
            )}
          />
          <FlatList
            ItemSeparatorComponent = {() => <View style={{height: 2, width: "100%", backgroundColor: "#000000"}} />}
            data = {teams} //state change triggers re-render
            renderItem = {({item}) => ( //"item" iterates through each element in the array set as 'data'
              <TouchableHighlight 
                style = {this.buttonStyleOpponent(item)}
                activeOpacity = {0.5}
                underlayColor = '#7b7e84'
                onPress = { () => {this.toggleOpponentSelect(item)} }
              >
                <Text style = {styles.text3}> {item} </Text>
              </TouchableHighlight>
            )}
          />
	      </View>
        <TouchableHighlight 
	      	style={{ backgroundColor: 'mediumseagreen', top: 15, left: 240, width: 130, height: 40, justifyContent: 'center', alignItems: 'center'}}  
          onPress = {() => {
            this.props.navigation.navigate('ListGames', {
              SelectedTeams: this.state.SelectedTeams,
              SelectedOpponents: this.state.SelectedOpponents,
              SelectedYear: "2018",
            })
          }}
	      >
					<Text style = {{color: '#FFFFFF', fontSize: 18}}> FIND GAMES </Text>
	      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    height: 40,
    width: "100%",
    //flex: 1,
    marginVertical: 0,
    margin: 0,
    backgroundColor: '#b9d9e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list2: {
    height: 40,
    width: "100%",
    //flex: 1,
    marginVertical: 0,
    margin: 0,
    backgroundColor: '#b2a9a9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  text2: {
    color: '#007ebc',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    color: '#000000',
    fontSize: 24,
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