import React from "react";
import { View, Text, TouchOpacity } from "react-native";

import TextArea from "../components/common/TextArea";
import LoginScreenStyle from "../styles/LoginScreenStyle";

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
                <View style={LoginScreenStyle.formContainer}>
                    <Text style = {LoginScreenStyle.textHeader}> ECO PARK</Text>
                    <TextArea placeHolder="Resident ID" />
                    <TextArea placeHolder="PIN" isPassword={true} />
                </View>
                <View>
                    <TouchOpacity
                        onPress = {this.onPressNext}>
                        <Text> NEXT </Text>
                    </TouchOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;
