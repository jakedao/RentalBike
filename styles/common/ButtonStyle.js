import {StyleSheet} from 'react-native';

import { Colors, Padding } from '../css/AppStyleConfig';

const ButtonStyle = StyleSheet.create({
    wrapper: {
        flex:1, 
        alignItems: 'center', 
    },

    container: {
        alignItems: 'center',
        backgroundColor: Colors.darkGreen,
        padding: Padding.Regular,
        borderRadius: 5,
        
    },
    buttonText: {
        color: Colors.pureWhite
    },
});

export default ButtonStyle;