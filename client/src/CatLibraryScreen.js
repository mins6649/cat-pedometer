import React, { useContext} from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground} from 'react-native';
import CatList from './CatList';
import { pedometerContext } from './PedometerProvider';

function CatLibraryScreen({navigation, route}) {
    const {catUserOwns} = useContext(pedometerContext)
    return(
        <View style={styles.layout}>
            <ImageBackground source={require('../assets/nature-background.jpeg')} style={styles.background}>
                <Text style={styles.title}>My Cats</Text>
                <ScrollView>
                    <CatList cats={catUserOwns}/>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}
export default CatLibraryScreen;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      background: {
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      title: {
        fontSize: 30,
        marginVertical: 16,
        textAlign: 'center',
        fontFamily: 'Gaegu-Bold',
        color: 'white'
      },
  });