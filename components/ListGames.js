//Select teams 
import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, FlatList, TouchableHighlight, Image, Button, AsyncStorage, MenuButton, Icon, TouchableOpacity} from 'react-native';

var selectedGames;
var teamAbrv = ["Bucks":"MIL","Bulls":"CHI","Cavaliers":"CLE","Celtics":"BOS",
"Clippers":"LAC","Grizzlies":"MEM","Hawks":"ATL","Heat":"MIA","Hornets":"CHA",
"Jazz":"UTA","Kings":"SAC","Knicks":"NYK","Lakers":"LAL","Mavericks":"DAL",
"Magic":"ORL","Nets":"BKN","Nuggets":"DEN","Pacers":"IND","Pelicans":"NOP",
"Pistons":"DET","Raptors":"TOR","Rockets":"HOU","Sixers":"PHI","Spurs";"SAS",
"Suns":"PHX","Thunder":"OKC","Timberwolves":"MIN","Trailblazers":"POR",
"Warriors":"GSW","Wizards":"WAS"];]

export class SelectTeams extends Component/*<Props>*/ {
  static navigationOptions = ({ navigation }) => {
    return{
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
    const { navigation } = this.props;
    const selectedYear = navigation.getParam('SelectedYear');
    this.state = {
      schedule: [],
      SelectedTeams: [],
      SelectedOpponents: []
    }
    this.getSchedule(selectedYear)
      .then (result => {
      this.setState ({schedule: result}) //changes the state when getSchedule finishes
      //this.filterGames()
    })
  }

  getSchedule = async function(year){
    console.log ("_____________________GET ASSET DATA________________________")

    try{
      var response = await fetch("http://data.nba.net/json/cms/"+year+"/league/nba_games.json",{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'   
        }
      })
    }catch(err){
      alert("Error getting NBA schedule: " + err)
    } 
    const scheduleJson = await response;
      
    return scheduleJson; 
  };

  filterGames(){
    const { navigation } = this.props;
    const selectTeams = navigation.getParam('SelectedTeams');
    const selectOpponents = navigation.getParam('SelectedOpponents');
    for(i=0;i<this.state.schedule.sports_content.schedule.game.length;i++){
      for(j=0;j<selectTeams.length;j++){
        if(this.state.schedule.sports_content.schedule.game[i].h_abrv.includes(selectTeams[j])
        || this.state.schedule.sports_content.schedule.game[i].v_abrv.includes(selectTeams[j])){
          for(k=0;k<selectOpponents.length;k++){
            if(this.state.schedule.sports_content.schedule.game[i].h_abrv.includes(selectOpponents[k])
            || this.state.schedule.sports_content.schedule.game[i].v_abrv.includes(selectOpponents[k])){
              selectGames.push(this.state.schedule.sports_content.schedule.game[i])
            }
          }
        } 
      }
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