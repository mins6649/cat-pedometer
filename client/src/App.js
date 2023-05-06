import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './Login';
import Main from './Main'; 

const Stack = createNativeStackNavigator()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  

  function handleLogin(user) {
    setIsLoggedIn(true);
    setUser(user)
  }

  return (
    <NavigationContainer>
        <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen 
            name="MAIN CONTAINER"
            component={Main}
            initialParams={{user: user}}
          />
        ) : (
          <Stack.Screen 
            name="Login" 
            component={Login} 
            initialParams={{onLogin: handleLogin}}
          />
        )}
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
