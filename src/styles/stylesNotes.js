import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width:100,
        height:100,
        backgroundColor: 'black',
        fontSize:40      ,
        alignSelf:'center'   
    },
    containerLogin: {
         width:'80%',
         height: '80%',
         marginHorizontal:'10%',
         marginTop:'10%',
    },
    title:{
        fontSize: 30,
        paddingTop:20,
        paddingBottom:10,
        paddingLeft:10,
        fontFamily: 'Pattaya-Regular'
    },
    icon: {
        position:'absolute',
        marginTop:23,
        marginLeft:5,
        fontSize:20,
        color:'#F64410'
    },
    input: {
        width:'80%',
        height: 40,
        marginLeft:30,
        marginBottom:12,
        marginTop:12,
        marginRight:12,
        borderBottomWidth: 1,
        color:'black',
        fontFamily: 'Pattaya-Regular'
    },
    fabLocation:{
        alignItems:'center',
        backgroundColor:'#F64410',
        justifyContent:'center',
        borderRadius:20,
        marginTop:20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        width: '100%',
    },
    fabText: {
        color: 'white',
        padding:5,
        fontSize: 20,
        fontWeight: 'normal',
        alignSelf: 'center',
        fontFamily: 'Pattaya-Regular'
    },
    singup:{
        alignSelf: 'flex-end',
        marginTop:5,
        marginRight:20,
        color:'#F64410',
        textDecorationLine:'underline'
    }
});