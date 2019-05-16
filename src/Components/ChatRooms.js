import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase'



class ChatRooms extends Component {
    
    handleLogout = () => {
        firebase.auth().signOut()
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => this.setState({ errorMessage: error.message }))
      }

    render() {
        return (
            <View>
                <Text>Her er dine chatrooms glhf</Text>
               
            <Button
            onPress={this.handleLogout}
            title="Log ud"
            color="#3c50e8"
            />  
             </View>
        );
    }
}

export default ChatRooms;