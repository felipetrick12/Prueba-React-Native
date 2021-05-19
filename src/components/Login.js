import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesLogin';
import { useForm } from '../hooks/useForm';

const Login = () => {

    const [email, setEmail] = useState('duvanli@hotmail.es');
    const [contra, setContra] = useState('duva.es');


    const onPress = () => {
       console.log(email,contra)
    };

    return (
        <View style= {styles.container}>
            <View style={ styles.containerLogin}>
            <Text style={styles.title} > Sign In </Text>
            <SafeAreaView >
            
            <TextInput
                name="email"
                style={styles.input}
                defaultValue={email}
                onChangeText={text => setEmail(text)}
                placeholder="@alguien.com"
                placeholderTextColor="gray"
            />
            <TextInput
                name="password"
                style={styles.input}
                defaultValue={contra}
                onChangeText={text2 => setContra(text2)}
                secureTextEntry={true}
                placeholder="*******"
                placeholderTextColor="gray"
            />
            <TouchableOpacity
                // onPress={ onPress }
                activeOpacity={ 0.75 }
                style={styles.fabLocation}
            >
                    <Text style={styles.fabText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={ 0.75 }
            >
                <Text style={styles.singup}> Sing up?</Text>
            </TouchableOpacity>
            
            
            </SafeAreaView>
            </View>
        </View>
    );
}


export default Login;
