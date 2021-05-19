import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesRegister';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Register = () => {

    const [nombre, setNombre] = useState('duvan');
    const [email, setEmail] = useState('duvanli@hotmail.es');
    const [contra, setContra] = useState('duva.es');
    const navigation = useNavigation();


    const onPress = () => {
        navigation.goBack();
    };

    return (
        <View style= {styles.container}>
            <View style={ styles.containerLogin}>
            <Text style={styles.title} > Sign Up </Text>
            <SafeAreaView >
            
            <View style= {styles.containerInput}>
                    <FontAwesome style= {styles.icon} name='user'/> 
                    <TextInput
                        name="Nombre"
                        style={styles.input}
                        defaultValue={nombre}
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
                            defaultValue={contra}
                            onChangeText={text3 => setContra(text3)}
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
        </View>
    );
}


export default Register;
