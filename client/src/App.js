import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';


// BackgroundTask.define(async () => {
//   // make post request (record steps for the day: table:DATE)
//   // Remember to call finish()
//   BackgroundTask.finish()
// })

function App() {
  return (      
    <NavigationContainer>
      <AppNavigator/>
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
