import React from 'react';
import {TextInput, View} from 'react-native';

import {Padding, Height, Colors} from '../../styles/css/AppStyleConfig';
import  TextAreaStyle from '../../styles/common/TextAreaStyle'

class TextArea extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            text:''
        }
 
        handleTextChange = (text) => {
            this.setState({text})
        };
    }
    render(){
        return(
            <View style = {TextAreaStyle.container}>
                <TextInput 
                    backgroundColor = {Colors.darkGrey}
                    style = {TextAreaStyle.textArea}
                    placeholder = {this.props.placeHolder}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    clearTextOnFocus = {true}
                    placeholderTextColor = '#DDDDDD'
                    secureTextEntry = {this.props.placeHolder === "PIN" ? true : false}
                    autoCapitalize = 'none'
                />
            </View>
        );
    }
}

export default TextArea;