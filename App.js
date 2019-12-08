import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';

class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const ApplicationNavigator = createStackNavigator(
  {
    LoginScreen: {
          screen: LoginScreen
      },
      WelcomeScreen: {
          screen: WelcomeScreen
      }
  }, 
  {
      initialRouteName: 'LoginScreen'
  }
);

const AppContainer = createAppContainer(ApplicationNavigator);


export default App; 