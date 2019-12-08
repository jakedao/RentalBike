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
          screen: LoginScreen,
          navigationOptions: {
            header: null,
          }
      },
      WelcomeScreen: {
          screen: WelcomeScreen,
          navigationOptions : {
            title: 'Welcome Screen',
            headerLeft: null
          }
      }
  }, 
  {
      initialRouteName: 'LoginScreen'
  }
);

const AppContainer = createAppContainer(ApplicationNavigator);


export default App; 