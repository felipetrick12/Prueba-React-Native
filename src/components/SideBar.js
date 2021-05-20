import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';    
import { Text, View } from 'react-native';
import { styles } from '../styles/stylesAside';
import { useDispatch, useSelector } from 'react-redux';
import SideElements from './SideElements';




const SideBar = () => {

    const dispatch = useDispatch(); 
    const {name} = useSelector(select=>  select.auth );


    return (
        <View style={{
            width:'65%',height:'100%',
            backgroundColor:'black',
            borderBottomRightRadius:10,
            borderTopRightRadius:10
        }}>
        <View style={styles.container2}>
        <FontAwesome 
            // onPress={ handleSide }
            style= {styles.icon1} name='chevron-left'
        /> 
        <FontAwesome 
            // onPress={ handleSide }
            style= {styles.icon} name='calendar'
        /> 
        <Text style={styles.Title}>New Note</Text>
       
        </View>

            <SideElements />
    </View>
    );
}



export default SideBar;