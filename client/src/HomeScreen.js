import React, {useContext} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import { pedometerContext } from './PedometerProvider';


function HomeScreen({navigation, route}) {
    const { totalSteps, catsToBeCollected, dailySteps, currentStepCount, gotcha} = useContext(pedometerContext)
    let isGotcha = <Button onPress = {gotcha} title= {catsToBeCollected.toString() + 'Cat Ready To Be Collected!'}/>
    let noGotcha = <Text>No cats to be collected</Text>

    return(
        <View style={styles.layout}>
            <ImageBackground source={require('../assets/nature-background.jpeg')} style={styles.background}>
                <Text style={styles.title}>Name Of App</Text>
                    
                {/* DAILY STEPS CONTAINER */}
                <View style={styles.container}>
                <Text>Today's Current Steps: {dailySteps} steps</Text>
                <Text>Walk! And watch this go up: {currentStepCount}</Text>
                </View>

                {/* TOTAL STEPS CONTAINER */}
                <View style={styles.container}>
                    <Text>Total Number of Steps:</Text>
                    <Text>{totalSteps}</Text>
                </View>

                {/* make this ternary condition based on catsToBeCollected */}
                <View style={styles.container}>
                    {catsToBeCollected ? isGotcha : noGotcha}
                </View>
                <View style={[styles.container, styles.cat_animation]}>
                    <Text>CAT ANIMATION</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        justifyContent: 'space-around',
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
        fontSize: 32,
        marginBottom: 16,
      },
      container:{
        backgroundColor: 'orange',
        width: 300,
        height: 70,
        justifyContent: 'center',
        borderRadius: 50,
        padding: 20,
      },
      cat_animation: {
        height: 250,
      },
  });