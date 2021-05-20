import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1  ,
        backgroundColor:'black'
    },
    contaierIcon:{ 
        width:45,
        height:60,
        position:'absolute',
        alignSelf:'flex-end',
        marginTop:10,
        right:10,
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    icon: {
       
        fontSize:50,
        color:'#F64410',
    },
});