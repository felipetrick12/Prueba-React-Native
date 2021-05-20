import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/stylesNotes';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { startLogout } from '../store/actions/auth';


const NoteScreen = () => {

    const dispatch = useDispatch(); 

    const handleLogin = () => {
        dispatch(startLogout());
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity
                onPress={ handleLogin }
                activeOpacity={ 0.75 }
                style={styles.contaierIcon}
            >
            <FontAwesome style= {styles.icon} name='sign-out'/> 

        </TouchableOpacity>
    </View>
    );
}



export default NoteScreen;
