import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/home';
import Scan from './src/scan';
import Finish from './src/finish';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'React Scanner'}}
        />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Finish" component={Finish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
