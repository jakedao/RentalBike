import React from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";

import TextArea from "../components/common/TextArea";
import LoginScreenStyle from "../styles/LoginScreenStyle";
import ButtonStyle from '../styles/common/ButtonStyle'

class LoginScreen extends React.Component {
    constructor(props){
        super(props);

        onPressNext = () => {
            console.log('DO NOTHING HERE')
        };
    }

    render() {
        return (
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
        );
    }
}

export default LoginScreen;
