import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import image from '../assets/muelle.jpeg'
import Register from '../components/Register'

export const RegisterScreen = () => {
  return (
    
    <View style= {{ flex:1 ,backgroundColor: '#1CB3FA'}}>
        <ImageBackground source={image} style={styles.image}>
          <Register />
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





