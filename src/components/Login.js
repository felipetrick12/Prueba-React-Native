import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesLogin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

    const [email, setEmail] = useState('duvanli@hotmail.es');
    const [contra, setContra] = useState('duva.es');
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Register')
    };

    return (
        <View style= {styles.container}>
            <View style={ styles.containerLogin}>
            <Text style={styles.title} > Sign In </Text>
            <SafeAreaView >
            
                <View style= {styles.containerInput}>
                    <FontAwesome style= {styles.icon} name='user'/> 
                    <TextInput
                        name="email"
                        style={styles.input}
                        defaultValue={email}
                        onChangeText={text => setEmail(text)}
                        placeholder="@alguien.com"
                        placeholderTextColor="gray"
                    />
                </View>
                        
                <View style= {styles.containerInput}>
                    <FontAwesome style= {styles.icon} name='lock' />
                    <TextInput
                            name="password"
                            style={styles.input}
                            defaultValue={contra}
                            onChangeText={text2 => setContra(text2)}
                            secureTextEntry={true}
                            placeholder="*******"
                            placeholderTextColor="gray"
                    />
                </View>
                    
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
