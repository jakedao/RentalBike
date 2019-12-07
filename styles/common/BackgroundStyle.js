import {StyleSheet} from 'react-native';
import { Height, Width, ScreenDimension } from '../css/AppStyleConfig';

const BackgroundStyle = StyleSheet.create({
    main: {
        flex: 1,
        width: ScreenDimension.ScreenWidth,
        height: ScreenDimension.ScreenHeight,
    },
});

export default BackgroundStyle;