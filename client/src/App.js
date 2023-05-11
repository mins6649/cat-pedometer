import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFonts} from 'expo-font';

import Login from './Login';
import Main from './Main'; 
//npx expo install react-native@0.71.7
const Stack = createNativeStackNavigator()


function App() {
  const [fontsLoaded] = useFonts({
    'Gaegu-Regular': require('../assets/fonts/Gaegu-Regular.ttf'),
    'Gaegu-Bold': require('../assets/fonts/Gaegu-Bold.ttf')
  });
  const [user, setUser] = useState(null);
  const [cats, setCats] = useState(null);
  useEffect(()=>{
      fetch(`http://192.168.1.186:5555/cats`)
      .then(res => res.json())
      .then(data => setCats(data))
      AsyncStorage.getItem('loggedIn').then((value) => {
        if (value) {
          fetch(`http://192.168.1.186:5555/users/${value}`)
          .then(res => res.json())
          .then(data => setUser(data))
        }
     });
  },[])
  const handleLogin = (user) => {
    setUser(user)
    AsyncStorage.setItem('loggedIn', String(user.id));
  }
  
  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator>
        {user != null && cats !=null ? (
            <Stack.Screen 
              name="Walk 10K steps to get a cat"
              component={Main}
              initialParams={{user, cats, setUser}}
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

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Gaegu-Regular'
  },
});
