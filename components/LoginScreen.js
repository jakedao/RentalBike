import React from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard,ImageBackground } from "react-native";

import TextArea from "../components/common/TextArea";
import LoginScreenStyle from "../styles/LoginScreenStyle";
import ButtonStyle from '../styles/common/ButtonStyle';
import BackgroundStyle from '../styles/common/BackgroundStyle';

class LoginScreen extends React.Component {
    constructor(props){
        super(props);

        onPressNext = () => {
            console.log('DO NOTHING HERE')
        };
    }

    render() {
        return (
            <ImageBackground
                resizeMode = 'cover'
                style = {BackgroundStyle.main} 
                source = {require('../assets/images/backgroundImage.jpg')}
                //opacity = {4}
            >
                <View style={LoginScreenStyle.wrapper}>
                    <TouchableWithoutFeedback onPress= {Keyboard.dismiss} accessible= {false}>
                        <View style={LoginScreenStyle.formContainer}>
                            <Text style = {LoginScreenStyle.textHeader}> ECO PARK</Text>
                            <TextArea placeHolder="Resident ID" />
                            <TextArea placeHolder="PIN"/>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style = {ButtonStyle.wrapper}>
                        <TouchableOpacity
                            style = {ButtonStyle.container}
                            onPress = {this.onPressNext}>
                            <Text style = {ButtonStyle.buttonText}> NEXT </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default LoginScreen;
