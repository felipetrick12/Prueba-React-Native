import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import SideBar from './Menu/SideBar';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../styles/stylesNotes';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../store/actions/auth';
import { startMenu } from '../store/actions/ui';
import { notesClean } from '../store/actions/notes';


const HeaderNotes = () => {

    
    //HOOKS
    const dispatch = useDispatch(); 
    const {name} = useSelector(select=>  select.auth );
    const {select} = useSelector(select=>  select.ui );
    const {active} = useSelector(select=>  select.notes );
    
    useEffect(() => {

    }, [select,active]);

    //State 
    const [state, setState] = useState(active !== null ? active.note:'' );

    const handleLogin = () => {
        dispatch(startLogout());
        dispatch(notesClean());
    }

    const handleSide = () => {
            dispatch(startMenu());
    }

    return (
        <View style={{flex:1,backgroundColor:'#100D0D'}}>
        {
            select ? (<SideBar />) :null
        }
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

        {
            active ? 
            (
                <View style={styles.cargandoNotes}>
                <TextInput
                            style={styles.input}
                            defaultValue={state}
                            onChangeText={text2 => setState(text2)}
                            placeholder="Ingresa tu nota"
                            placeholderTextColor="gray"
                            multiline={true}
                    />
                </View> 
            ) 
            :(
                <View style={styles.cargando}>
                    <Text style={styles.cargandoTitle}>Escoge tu nota</Text>
                    <LottieView source={require('../assets/37323-notebook.json')} autoPlay  />
                </View>  
            )
        }
        
    </View>
    );
}



export default HeaderNotes;