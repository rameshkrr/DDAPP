import React from 'react';
import { StatusBar , View , Text , ActivityIndicator,Image } from 'react-native';
export default class Splash extends React.Component {
    render() {
       
        return (
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#fff'}}>
                <StatusBar backgroundColor="#EE3F8B" barStyle="light-content"/> 
                <Image style={{flex: 1,
    alignSelf: 'stretch',
    width: 250,
    height: undefined,
    resizeMode:'contain',
    justifyContent:'center',
    marginLeft:50
    }} source={require('../img/logo2.png')} />
                <ActivityIndicator color={'#EE3F8B'} style={{position:'absolute',bottom:200}} /> 
            </View>
        )
    }
}