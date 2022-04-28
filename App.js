import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './SRC/Navigation/StackNavigator';
const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <MyStack/>
    </NavigationContainer>
  );
};

export default App;