import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';    
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../../styles/stylesAside';
import { useDispatch, useSelector } from 'react-redux';
import SideElements from './SideElements';
import { endMenu } from '../../store/actions/ui';
import HeaderNotes from '../HeaderNotes';


const SideBar = () => {

    const dispatch = useDispatch(); 
    const {select} = useSelector(select=>  select.ui );

    const handleSide = () => {
        dispatch(endMenu());
    }


    return (
    <View style={styl.container}>

        <View style={styles.container2}>
        <FontAwesome 
            onPress={ handleSide }
            style= {styles.icon1} name='chevron-left'
        /> 
        <FontAwesome 
            style= {styles.icon} name='calendar'
        /> 
        <Text style={styles.Title}>New Note</Text>
       
        </View>

            <SideElements />

        {select ? null : <HeaderNotes />}
    </View>
    );
}


const styl = StyleSheet.create({
    container:
    {
        width:'80%',height:'100%',
        backgroundColor:'black',
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        borderWidth:2,
        borderRightColor:'white',
        borderTopColor:'white'
    }
})

export default SideBar;