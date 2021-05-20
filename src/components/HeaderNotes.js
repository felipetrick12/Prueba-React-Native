import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import { Text, View } from 'react-native';
import { styles } from '../styles/stylesNotes';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/actions/auth';



const HeaderNotes = () => {

    const dispatch = useDispatch(); 
    const {name} = useSelector(select=>  select.auth );

    const handleLogin = () => {
        dispatch(startLogout());
    }

    const handleSide = () => {
        console.log('COmponente')
        
    }

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
        <View style={styles.container2}>
       
            <FontAwesome 
            onPress={ handleSide }
            style= {styles.icon} name='sticky-note'
            /> 
            <Text
            style= {styles.text}
            maxLength={20}
            >
                Bienvenido {name}
            </Text>       
            <FontAwesome 
            onPress={ handleLogin }
            style= {styles.icon2} name='sign-out'
            /> 

        </View>

        <View style={styles.cargando}>
            <Text style={styles.cargandoTitle}>No hay notas</Text>
            <LottieView source={require('../assets/37323-notebook.json')} autoPlay  />
        </View>  
    </View>
    );
}



export default HeaderNotes;