import React, { useContext} from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import CatList from './CatList';
import { pedometerContext } from './PedometerProvider';

function CatLibraryScreen({navigation, route}) {
    const {catUserOwns} = useContext(pedometerContext)

    return(
        <View>
            <Text>Cat Library</Text>
            <ScrollView>
                <CatList cats={catUserOwns}/>
            </ScrollView>
        </View>
    )
}
export default CatLibraryScreen;

// const styles = StyleSheet.create({
//     layout: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       title: {
//         fontSize: 32,
//         marginBottom: 16,
//       },
//   });