import React, { useState } from 'react';
import validator from 'validator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesLogin';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailPassword } from '../store/actions/auth';
import { RemoveError, setError } from '../store/actions/ui';



const Login = () => {

    const [email, setEmail] = useState('duvanli@hotmail.es');
    const [password, setContra] = useState('duva.es');
    
    //HOOKS 
    const navigation = useNavigation();
    const dispatch = useDispatch(); 
    const {msgError} = useSelector(select=>  select.ui ) 


    const onPress = () => {
        navigation.navigate('Register')
    };

    const handleLogin = () => {

        if (FormValid()){
            dispatch(loginWithEmailPassword(email,password));
        }
      }

      const FormValid = () => {

         if (!validator.isEmail(email)){
   
           dispatch( setError('Email No Valido'));
           return false;
         }
          else if (password.length <=5 )
         {
           dispatch( setError('Contraseña con mas de 5 caracteres'));
           return false;
         }
           dispatch(RemoveError());
           return true;
         }

    return (
        <View style= {styles.container}>
            <ScrollView style={[{flex: 1}]}>  
            <View style={ styles.containerLogin}>
            <Text style={styles.title} > Sign In </Text>
            {
        
                (msgError!==null)&&  
                <Text style={styles.error} > {msgError} </Text>

            }
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
         </ScrollView>
        </View>
    );
}


export default Login;
