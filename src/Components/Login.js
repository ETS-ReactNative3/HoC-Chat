import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FBLoginButton from './FBLoginButton'

class Login extends Component {
    render() {
        return (
            <View>
            <Text>Velkommen til login skærmen!</Text>
              <FBLoginButton />
           
          
            </View>
        );
    }
}

export default Login;