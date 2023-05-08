import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './Login';
import Main from './Main'; 
import PedometerProvider from './PedometerProvider';

const Stack = createNativeStackNavigator()

function App() {
  const [user, setUser] = useState(null);
  const [cats, setCats] = useState([]);
  useEffect(()=>{
      fetch(`http://192.168.1.186:5555/cats`)
      .then(res => res.json())
      .then(data => setCats(data))
  },[])
 

  const handleLogin = (user) => {
    setUser(user)
  }
  
  return (
    <NavigationContainer>
        <Stack.Navigator>
        {user != null ? (
            <Stack.Screen 
              name="MAIN CONTAINER"
              component={Main}
              initialParams={{user, cats}}
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
