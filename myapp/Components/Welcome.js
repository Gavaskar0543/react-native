import axios from 'axios';
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { useState } from 'react';

const Welcome = () => {
   const [user,SetUser] = useState('');
    const fetchBackendMessage = async () => {
        try {
          const response = await axios.get('https://myappbackend.gavaskark.repl.co/user/welcome');
          
          if (response.status === 200 && response.data.success) {
            console.log('Success:', response.data.user);
            // Handle the successful response here
            SetUser(response.data.user);
          } else {
            console.log('Request failed:', response.data.message);
            // Handle the failed response here
          }
        } catch (error) {
          console.error('Error:', error.message);
          // Handle network errors or other unexpected errors here
        }
      };
      
      // Call the function to fetch the backend message
      fetchBackendMessage();
    return (
        <View style={styles.container}>
            <Text>Welcome Home &#128522; </Text><Text>{user}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    fontSize:25,
    textAlign:'center'
}
})

export default Welcome;
