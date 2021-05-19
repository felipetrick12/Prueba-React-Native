import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import image from '../assets/muelle.jpeg'
import Login from '../components/Login';

export const LoginScreen = () => {
  return (
    
    <View style= {{ flex:1 ,backgroundColor: '#1CB3FA'}}>
        <ImageBackground source={image} style={styles.image}>
          <Login />
      </ImageBackground>
    </View>
  );  
};

const styles = StyleSheet.create({
    image:{ 
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    }
})





