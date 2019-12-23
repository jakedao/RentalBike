import React from 'react';
import {TextInput, View,Text } from 'react-native';
import PropTypes from 'prop-types';

import {Padding, Height, Colors} from '../../styles/css/AppStyleConfig';
import  TextAreaStyle from '../../styles/common/TextAreaStyle'

class TextArea extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        onChangeText: PropTypes.func
      }

    render(){
        const {value, onChangeText, ...extraProps} = this.props;
        return(
            <View style = {TextAreaStyle.container}>
                <TextInput 
                    backgroundColor = {Colors.darkGrey}
                    style = {TextAreaStyle.textArea}
                    placeholder = {this.props.placeHolder}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    placeholderTextColor = '#DDDDDD'
                    secureTextEntry = {this.props.placeHolder === "PIN" ? true : false}
                    autoCapitalize = 'none'
                    onKeyPress = {this.handleKeyPress}
                />
            </View>
        );
    }
}

export default TextArea;