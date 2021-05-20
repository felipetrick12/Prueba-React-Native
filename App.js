import React, { useEffect, useState } from 'react';
import AppRouter from './src/routes/AppRouter';
import 'react-native-gesture-handler';
import NoteScreen from './src/screens/NoteScreen';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { firebase } from './src/firebase/firebase-config'
import { Text, View } from 'react-native';
import { styles } from './src/styles/stylesLogin';
import { login } from './src/store/actions/auth';



const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);



  useEffect(() => {
      
      firebase.auth().onAuthStateChanged(async (user) => {

          if ( user?.uid ) {
              dispatch( login( user.uid, user.displayName ) );
              setIsLoggedIn( true );
             
          } else {
              setIsLoggedIn( false );
          }
          
          setChecking(false);

      });
      
  }, [ setChecking, setIsLoggedIn ])

  if (checking) {
    return(
    <View style={styles.cargando}>
      <Text style={styles.cargandoTitle}>..Cargando..</Text>
      <LottieView source={require('./src/assets/9844-loading-40-paperplane.json')} autoPlay loop />
      </View>
    )
  }

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {
            isLoggedIn === true
            ? <Stack.Screen  style={{flex:1,position:'absolute'}} name="Notes" component={NoteScreen} />
            : <Stack.Screen name="/" component={AppRouter} />
          
          }
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default App;
