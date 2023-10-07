import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigation = useNavigation();

  const handleLogin = () => {
    // Replace this with your authentication logic.
  const userData = {
    name:username,
    password:password
  }
  
  loginUser(userData)
  .then((success) =>{
    if(success){
      console.log('Login success');
      Alert.alert('login success');
      navigation.navigate('welcome');
    }else{
      console.log('Login Faliled');
      Alert.alert('Something went wrong');
    }

  });
}
const loginUser = async (userData) => {
  try {
    const response = await axios.post('https://myappbackend.gavaskark.repl.co/user/already/login', userData);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default LoginScreen;
