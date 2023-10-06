import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome Home &#128522;</Text>
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
