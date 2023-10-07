import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios'



const SignupScreen = () => {
  const navigation = useNavigation(); // Access the navigation object

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSignup = async () => {
     

    const userData = {
      name: username,
      password: password,
      Confirmpassword: confirmPassword, // Make sure this matches the password
    };
    
    registerUser(userData)
      .then((success) => {
        if (success) {
          console.log('Registration successful.');
          Alert.alert('Account created')
          // Redirect to a success page or perform other actions
          navigation.navigate('Login');
        } else {
          console.log('Registration failed.');
          Alert.alert('Something went wrong');
          // Handle registration failure
        }
      });


    
  };
  const registerUser = async (userData) => {
    try {
      const response = await axios.post('https://myappbackend.gavaskark.repl.co/user/newUser', userData);
  
      if (response.status === 200 && response.data.success) {
        // Registration was successful
        return true;
      } else {
        // Registration failed
        return false;
      }
    } catch (error) {
      // Handle network errors or server errors
      console.error(error);
      return false;
    }
  };
  
 
  

  
  
  /////////////////////////////////////
  


  const fetchBackendMessage = async () => {
    try {
      const response = await axios.get('https://myappbackend.gavaskark.repl.co/1');
      
      if (response.status === 200 && response.data.success) {
        console.log('Success:', response.data.message);
        // Handle the successful response here
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
  

//////////////////////////////////////

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Account &#x2B50; </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <Button title="Create" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default SignupScreen;
