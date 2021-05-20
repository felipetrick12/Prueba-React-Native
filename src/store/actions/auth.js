import { types } from "../../types/types";
import { firebase } from '../../firebase/firebase-config'
import { finishLoading, startLoading } from './ui';
import { Alert } from "react-native";


export const loginWithEmailPassword= (email,password) => {

    return (dispatch)=> {

        dispatch(startLoading()); 
        setTimeout(() => {
        
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user})=> {

            
            dispatch( login(user.uid,user.displayName) )
            dispatch(finishLoading());

        })
        .catch (err => {
            console.log(err)
            dispatch(finishLoading());
            Swal.fire('Error',err.message,'error')
        })
        }, 1000);
        

    }
}


export const startWithNamePasswordEmail= (email,password,name) => {

    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async ({user}) =>{

            await user.updateProfile({displayName:name})
            dispatch(
                login(user.uid,user.displayName)
            ) 

        }).catch (err => {
            console.log(err.message);
            Alert.alert(err.message);
        } )
    }
}


export const login = (uid, displayName) => ({
    
    type: types.login,
        payload: {
            uid,
            displayName 
        }
});

export const startLogout = ()=> {

    return async (dispatch) => {
        await  firebase.auth().signOut();

        dispatch( logout());
    }
}

export const logout = ()=> ({

    type: types.logout
    
})
