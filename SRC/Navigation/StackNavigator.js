import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Profile';
import ForgotScreen from '../Screens/ForgotPassword';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' ,headerShown:false}}
        />
        <Stack.Screen 
         options={{ title: 'Welcome' ,headerShown:false}}
        name="ForgotScreen" component={ForgotScreen} />
      </Stack.Navigator>
  
  );
};

export default(MyStack);