import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FacebookScreen from './screens/Facebook';
import InstagramScreen from './screens/Instagram';
import Appheader from './Headercomp/Appheader'


export default class App extends React.Component{
  render(){
    return(
      
      <AppContainer/>
     
    )

  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
});
const AppContainer=createAppContainer(TabNavigator)
