import React from 'react';
import {Text,View} from 'react-native';
import Appheader from '../components/Appheader'


export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                <Text>Facebook</Text>
                <Appheader/>
            </View>
        )
    }
}