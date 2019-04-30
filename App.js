/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Dimensions, Text, View, FlatList, TouchableHighlight, Image, Button} from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';
import SelectTeams from './components/SelectTeams.js';
import ListGames from './components/ListGames.js'

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

const AppNavigator = createStackNavigator({
  Home: SelectTeams,
  ListGames: ListGames
});

export default createAppContainer(AppNavigator);

// const AppNavigator = createStackNavigator({
//   /// opens the first component in this list upon start of app
//   StartPage: SelectTeams, 
//   //Results: ListGames,
// });

// const AppContainer = createAppContainer({AppNavigator});

// export default AppContainer;