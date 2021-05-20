import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import image from '../assets/muelle.jpeg'
import Register from '../components/Register'

export const RegisterScreen = () => {
  return (
    
        <ImageBackground source={image} style={styles.image}>
          <Register />
      </ImageBackground>
  );  
};

const styles = StyleSheet.create({
  container:{
    flex:1

  },
    image:{
      flex:1,
      resizeMode: "cover",
      justifyContent: "center"
    }
})





