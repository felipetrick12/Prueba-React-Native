import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import image from '../assets/muelle.jpeg'
import Login from '../components/Login';

const NoteScreen = () => {
    return (
    <View style= {{ flex:1 ,backgroundColor: '#1CB3FA'}}>
        <View source={image} style={styles.image}>
          <Login />
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    image:{ 
      flex: 1,
      backgroundColor:'black'
    }
})

export default NoteScreen;
