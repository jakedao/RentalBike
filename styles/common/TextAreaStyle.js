import {StyleSheet} from 'react-native';

import { Height, Padding, Colors } from '../css/AppStyleConfig';

const TextAreaStyle = StyleSheet.create({
    container: {
        width: '90%',
        padding: Padding.Small,
    },

    textArea: {
        height: Height.textHeight,
        padding: Padding.Small,
        backgroundColor: 'rgba(225,225,225,0.5)'
    }
});

export default TextAreaStyle;