import React from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard,ImageBackground } from "react-native";

import TextArea from "../components/common/TextArea";
import CustomizedButton from '../components/common/CustomizedButton'

import LoginScreenStyle from "../styles/LoginScreenStyle";
import BackgroundStyle from '../styles/common/BackgroundStyle';

class LoginScreen extends React.Component {
    constructor(props){
        super(props);
    }

    onPressNext = () => {
        console.log('Navigate to WelcomeScreen')
        this.props.navigation.navigate('WelcomeScreen')
    };

    render() {
        return (
            <ImageBackground
                resizeMode = 'cover'
                style = {BackgroundStyle.main} 
                source = {require('../assets/images/backgroundImage.jpg')}
            >
                <View style={LoginScreenStyle.wrapper}>
                    <TouchableWithoutFeedback onPress= {Keyboard.dismiss} accessible= {false}>
                        <View style={LoginScreenStyle.formContainer}>
                            <Text style = {LoginScreenStyle.textHeader}> ECO PARK</Text>
                            <TextArea placeHolder="Resident ID" />
                            <TextArea placeHolder="PIN"/>
                        </View>
                    </TouchableWithoutFeedback>
                    <CustomizedButton
                        onPressButton = {this.onPressNext}
                        buttonTitle = 'NEXT'
                    />
                </View>
            </ImageBackground>
        );
    }
}

export default LoginScreen;
