import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigationState } from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import CatLibraryScreen from './CatLibraryScreen';

const Tab = createBottomTabNavigator();

function Main({navigation, route}) {
    const user = route.params.user
    console.log('MAIN')
    console.log(user)

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" options={{title: 'Home'}} component={HomeScreen} initialParams={{user: user}}/>
            <Tab.Screen name="Cat Library" options={{title: 'Cat Library'}} component={CatLibraryScreen} />
        </Tab.Navigator>
    )
}
export default Main;

// function Main({ navigation, route }) {
//     const [username, setUsername] = useState(null);
  
//     useEffect(() => {
//       if (route.params && route.params.username) {
//         setUsername(route.params.username);
//       }
//     }, [route.params]);

//     console.log(`username: ${username}`)
  
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" options={{ title: 'Home' }}>
//           {props => <HomeScreen {...props} username={username} />}
//         </Tab.Screen>
//         <Tab.Screen name="Cat Library" options={{ title: 'Cat Library' }}>
//           {props => <CatLibraryScreen {...props} username={username} />}
//         </Tab.Screen>
//       </Tab.Navigator>
//     )
//   }
  
// export default Main;