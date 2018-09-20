import React from 'react';
import { StyleSheet, Button, Image, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import CameraScreen from './screens/CameraScreen'
import ResultScreen from './screens/ResultScreen'

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Camera: { screen: CameraScreen },
    Details: { screen: DetailsScreen },
    Results: { screen: ResultScreen },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        // color: '#000',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
