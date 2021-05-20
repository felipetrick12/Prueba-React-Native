import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { horizontalAnimation } from '../rules/transition';

const Drawer = createStackNavigator();

const AppRouter = () => {
  return (
        <Drawer.Navigator
          screenOptions={{
            headerShown: false
          }}
          mode="modal"
        >
          
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} options={horizontalAnimation} />

        </Drawer.Navigator>
  );
}


export default AppRouter;
