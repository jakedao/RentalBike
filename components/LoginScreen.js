import React from "react";
import { View, Text, Alert, TouchableWithoutFeedback, Keyboard,ImageBackground } from "react-native";

import TextArea from "../components/common/TextArea";
import CustomizedButton from '../components/common/CustomizedButton'

import LoginScreenStyle from "../styles/LoginScreenStyle";
import BackgroundStyle from '../styles/common/BackgroundStyle';

class LoginScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            pin:''
        }
    }

    onPressNext = () => {
        console.log('Navigate to WelcomeScreen')
        if((this.state.id.trim() !== '') && (this.state.pin.trim() !== '')){
            this.props.navigation.navigate('WelcomeScreen')
        } else {
            Alert.alert(
                '','Plaese check your credential again',
                [
                    {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
                ],
                {cancelable: false}
            )
        }
    };

    hanldeIDChange = (text) => {
        this.setState({id : text});
    };

    handlePINChange = (text) => {
        this.setState({pin : text});
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
                            <TextArea 
                                placeHolder="Resident ID" 
                                value={this.state.input}
                                onChangeText = {this.hanldeIDChange}/>

                            {this.state.id.trim() === '' 
                            ? <Text style = {LoginScreenStyle.errorMessage}> {'Please input your Resident ID'} </Text> 
                            : null }

                            <TextArea 
                            placeHolder="PIN"
                            value={this.state.input}
                            onChangeText = {this.handlePINChange}/>
                            
                            {this.state.pin.trim() === '' 
                            ? <Text style = {LoginScreenStyle.errorMessage}> {'Please input your PIN'} </Text> 
                            : null}
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
