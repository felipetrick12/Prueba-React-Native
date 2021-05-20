import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesLogin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { loginWithEmailPassword } from '../store/actions/auth';


const Login = () => {

    const [email, setEmail] = useState('duvanli@hotmail.es');
    const [password, setContra] = useState('duva.es');
    
    //HOOKS 
    const navigation = useNavigation();
    const dispatch = useDispatch(); 

    const onPress = () => {
        navigation.navigate('Register')
    };

    const handleLogin = () => {
        dispatch(loginWithEmailPassword(email,password));
      }

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
                            defaultValue={password}
                            onChangeText={text2 => setContra(text2)}
                            secureTextEntry={true}
                            placeholder="*******"
                            placeholderTextColor="gray"
                    />
                </View>
                    
            <TouchableOpacity
                onPress={ handleLogin }
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
