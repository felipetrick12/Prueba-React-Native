import React  from 'react';
import image from '../../assets/leon.jpg';
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { notesActive } from '../../store/actions/notes';
import { endMenu } from '../../store/actions/ui';


const Elements = (elemento) => {

    const dispatch = useDispatch();

    const handleClick= ()=> {
        
        dispatch(notesActive(elemento))
        dispatch(endMenu());
    }

    return (
        <TouchableOpacity
                onPress={ handleClick }
                activeOpacity={ 0.5 }
                style={styles.container}
            >

        <ImageBackground source={image} style={styles.image} />
        <Text style={styles.text}>{elemento.note}</Text>

    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'90%',
        height:60,
        flexDirection:'row',
        backgroundColor:'red',
        borderRadius:10,
        marginTop:10,
        overflow:'hidden',
        
    },
    image: {
        width:60,
        height:'100%',
        backgroundColor:'black',
        borderRadius:60

    },
    text:{
        width:'65%',
        color:'white',
        paddingTop:5,
        paddingLeft:15,
        fontFamily: 'Pattaya-Regular',
    }
    
})

export default Elements;