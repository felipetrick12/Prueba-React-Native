import React, { useState } from 'react';
import validator from 'validator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesRegister';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveError, setError } from '../store/actions/ui';
import { startWithNamePasswordEmail } from '../store/actions/auth';




const Register = () => {

    //STATE
    const [name, setNombre] = useState('duvan');
    const [email, setEmail] = useState('duvanli@hotmail.es');
    const [password, setContra] = useState('duva.es');

    //HOOKS
    const navigation = useNavigation();
    const {msgError} =useSelector(select=>  select.ui ) 
    const dispatch = useDispatch(); 


    //FUNCTIONS
    const onPress = () => {
        navigation.goBack();
    };

    const handleSubmit = () => {

        console.log(msgError)

        if (FormValid()){

            dispatch(startWithNamePasswordEmail( email, password, name));
            console.log('Formulario Correcto')
      
          }
    }

    const FormValid = () => {

     if(name.trim().length===0)
        {
         dispatch( setError('Ingrese un nombre'));
         return false
       }
       else if (!validator.isEmail(email)){

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
            <Text style={styles.title} > Sign Up </Text>
            {
        
                (msgError!==null)&&  
                <Text style={styles.error} > {msgError} </Text>

            }
            <SafeAreaView  >
            
            <View style= {styles.containerInput}>
                    <FontAwesome style= {styles.icon} name='user'/> 
                    <TextInput
                        name="Nombre"
                        style={styles.input}
                        defaultValue={name}
                        onChangeText={text => setNombre(text)}
                        placeholder="@alguien.com"
                        placeholderTextColor="gray"
                    />
            </View>

                <View style= {styles.containerInput}>
                    <FontAwesome style= {styles.icon} name='envelope'/> 
                    <TextInput
                        name="email"
                        style={styles.input}
                        defaultValue={email}
                        onChangeText={text2 => setEmail(text2)}
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
                            onChangeText={text3 => setContra(text3)}
                            secureTextEntry={true}
                            placeholder="*******"
                            placeholderTextColor="gray"
                    />
                </View>
        
            <TouchableOpacity
                onPress={ handleSubmit }
                activeOpacity={ 0.75 }
                style={styles.fabLocation}
            >
                    <Text style={styles.fabText}> Register </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={ 0.75 }
            >
                <Text style={styles.back}> back</Text>
            </TouchableOpacity>
            
            </SafeAreaView>
            </View>
         </ScrollView>
        </View>
    );
}


export default Register;
