import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import ButtonStyle from '../../styles/common/ButtonStyle';

class CustomizedButton extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <View style = {ButtonStyle.wrapper}>
                <TouchableOpacity
                    style = {ButtonStyle.container}
                    onPress = {this.props.onPressButton} >
                <Text style = {ButtonStyle.buttonText}>{this.props.buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

export default CustomizedButton;