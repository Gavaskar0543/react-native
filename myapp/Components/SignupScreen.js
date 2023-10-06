import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import {customFetch} from  '../Api';
import { API_URLS } from '../Utils/constant';


const SignupScreen = () => {
  const navigation = useNavigation(); // Access the navigation object

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSignup = async () => {
     
    try {
      const response = await postData(username, password);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }


    
  };
 

const postData = async (email, password) => {
  try {
    const data = { email, password };
    const response = await axios.post('https://example.com/api/data', data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

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
