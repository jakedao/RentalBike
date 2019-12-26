import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {Provider} from 'react-redux';

import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';
import store from './store';


class App extends React.Component{
  render(){
    return(
      <Provider store = {store}>
        <AppContainer/>
      </Provider>
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