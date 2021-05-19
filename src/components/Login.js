import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesLogin';
import { useForm } from '../hooks/useForm';

const Login = () => {

    const [Form,handleInputChange] = useForm( {
        email:'duvanli@hotmail.es',
        password:'felipe123'
    });

    return (
        <View style= {styles.container}>
            <View style={ styles.containerLogin}>
            <Text style={styles.title} > Sign In </Text>
            <SafeAreaView >
            
            <TextInput
                style={styles.input}
                // onChangeText={onChangeText}
                value={'Email'}
            />
            <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                value={'Password'}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
            <TouchableOpacity
                // onPress={ onPress }
                activeOpacity={ 0.75 }
                style={styles.fabLocation}
            >
                    <Text style={styles.fabText}> Login </Text>
            </TouchableOpacity>
            
                <Text style={styles.singup}> Sing up?</Text>
            
            </SafeAreaView>
            </View>
        </View>
    );
}


export default Login;
