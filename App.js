import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { Provider } from 'react-redux';
import { store } from './src/store/store'
import { connect } from 'react-redux';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { horizontalAnimation } from './src/rules/transition';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          mode="modal"
        >
          <Stack.Screen name="Home" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} options={horizontalAnimation} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
