import {StyleSheet} from 'react-native';
import { Padding, Colors, FontSize, Height } from './css/AppStyleConfig';


const LoginScreenStyle = StyleSheet.create({
    wrapper: {
        flex:1,
        flexDirection: 'column',
    },

    textHeader: {
        height: Height.headerHeight,  
        fontSize: FontSize.Large,
        fontWeight: 'bold',
        color: Colors.darkGreen,
    },

    formContainer: {
        flex:4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreenStyle; 

