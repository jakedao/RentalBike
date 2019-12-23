import React from 'react';
import { View, Text, Image } from 'react-native';

import WelcomeScreenStyle from '../styles/WelcomScreenStyle' ;

import CustomizedButton from '../components/common/CustomizedButton';


class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
    }
    
    onTopUp = ()=> {
        console.log('IMPLEMENTING')
    };

    render(){
        return(
            <View style = {{flex:1, flexDirection:'column'}}>
                <Text style = {WelcomeScreenStyle.welcomeMessage}> Welcome Khanh,</Text>
                <Text>Current balance: 50.000 VDN</Text>
                <Text>Find nearby bikes</Text>
                <CustomizedButton
                    onPressButton = {this.onTopUp}
                    buttonTitle = 'TOP UP'
                />
            </View>

        );
    }
};

export default WelcomeScreen;