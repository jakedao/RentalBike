import {StyleSheet} from 'react-native';
import { Height, Padding } from '../css/AppStyleConfig';

const TextAreaStyle = StyleSheet.create({
    container: {
        width: '90%',
        padding: Padding.Small,
    },

    textArea: {
        height: Height.textHeight,
        padding: Padding.Small,
    }
});

export default TextAreaStyle;