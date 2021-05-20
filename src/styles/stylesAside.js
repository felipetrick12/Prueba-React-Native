import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'black'
    },
    icon: {
        padding:10,
        fontSize:40,
        color:'#F64410',
    },
    icon2:{
        padding:10,
        fontSize:40,
        color:'#F64410',
    },
    text: {
        textAlign:'center',
        width:200,
        paddingTop:15,
        fontSize:20,
        color:'white',
        fontFamily: 'Pattaya-Regular'
    },
    cargando:{
        flex:1,
        backgroundColor: 'black' ,
        
     },
     cargandoTitle:{
         color: 'white',
         fontSize:40,
         fontFamily: 'Pattaya-Regular',
         textAlign: 'center',
         paddingVertical: '50%'
     }
});