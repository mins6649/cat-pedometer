import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import CatLibraryScreen from './CatLibraryScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cat Library" component={CatLibraryScreen} />
        </Tab.Navigator>
    )
}
export default AppNavigator;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });