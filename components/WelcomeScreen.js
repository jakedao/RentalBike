import React from 'react';
import {} from 'react-native';

class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View>
                <Text>Welcome Khanh, Enjoy riding</Text>
                <Text>Current balance: 50.000 VDN</Text>
                <Text>Find nearby bikes</Text>
                <Text>TOP UP</Text>
            </View>

        );
    }
};

export default WelcomeScreen;