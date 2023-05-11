import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import CatLibraryScreen from './CatLibraryScreen';
import PedometerProvider from './PedometerProvider';

const Tab = createBottomTabNavigator();

function Main({navigation, route}) {
    return(
        <PedometerProvider user={route.params.user} cats={route.params.cats}>
        <Tab.Navigator>
            <Tab.Screen name="Home" options={{title: 'Home', headerShown:false}} component={HomeScreen} initialParams={{setUser: route.params.setUser}}/>
            <Tab.Screen name="Cat Library" options={{title: 'Cat Library', headerShown:false}} component={CatLibraryScreen}/>
        </Tab.Navigator>
        </PedometerProvider>
    )
}
export default Main;
