import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import image from '../assets/leon.jpg';


const Elements = ({element}) => {

    return (
        <TouchableOpacity
                // onPress={ handleLogin }
                activeOpacity={ 0.5 }
                style={styles.container}
            >
        {/* <View style={styles.container2}> */}

        <ImageBackground source={image} style={styles.image} />
        <Text style={styles.text}>{element}</Text>

        {/* </View> */}
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'90%',
        flexDirection:'row',
        backgroundColor:'red',
        borderRadius:10,
        marginTop:10,
        overflow:'hidden',
        
    },
    // container2:{
    //     width:'50%',
    //     height:'100%',
    //     backgroundColor:'red'
    // },
    image: {
        width:60,
        height:60,
        backgroundColor:'black',
        borderRadius:60

    },
    text:{
        width:'70%',
        color:'white',
        paddingTop:5,
        paddingLeft:15,
        fontFamily: 'Pattaya-Regular',
    }
    
})

export default Elements;