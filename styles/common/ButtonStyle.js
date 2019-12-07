import {StyleSheet} from 'react-native';

import { Colors } from '../css/AppStyleConfig';

const ButtonStyle = StyleSheet.create({
    wrapper: {
        flex:1, 
        alignItems: 'center', 
        padding: 20
    },

    container: {
        alignItems: 'center',
        backgroundColor: Colors.lightBlue,
        padding: 20,
    },
    buttonText: {
        color: Colors.pureWhite
    },
});

export default ButtonStyle;