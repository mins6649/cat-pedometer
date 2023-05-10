import React, {useContext} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Image} from 'react-native';
import { pedometerContext } from './PedometerProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen({navigation, route}) {
    const { totalSteps, catsToBeCollected, dailySteps, remainingSteps, currentStepCount, gotcha} = useContext(pedometerContext)
    let isGotcha = <Button onPress = {gotcha} title= {catsToBeCollected.toString() + ` Cat${catsToBeCollected === 1 ? '' : 's'} Ready To Be Collected!`}/>
    let noGotcha = 
    <View style={styles.noGotchaContainer}>
      <Image
        style={styles.sadCat}
        source={require('../assets/sadCat.png')}
      />
      <Text style={styles.noGotcha}>
        No cats to be collected
      </Text>
    </View>

    function handleLogout() {
      fetch(`http://192.168.1.186:5555/logout`, {
        method: "DELETE",
      })
      .then(() => {
        route.params.setUser(null)
        AsyncStorage.removeItem('loggedIn');
      });
    }

    return(
        <View style={styles.layout}>
            <ImageBackground source={require('../assets/nature-background.jpeg')} style={styles.background}>
              <Text style={styles.title}>PawDometer</Text>
                <View style={styles.container}>
                  <Text>Today's Current Steps: </Text>
                  <Text style={styles.stepsText}>{dailySteps} steps</Text>
                </View>

                <View style={styles.container}>
                  <Text>Currently on a walk? Count your steps:</Text>
                  <Text style={styles.stepsText}>{currentStepCount} steps</Text>
                </View>

                <View style={styles.container}>
                    <Text>Total Number of Steps:</Text>
                    <Text style={styles.stepsText}>{totalSteps} steps</Text>
                </View>

                <View style={[styles.container, (catsToBeCollected > 0) ? styles.gachaContainerReady : styles.gachaContainer]}>
                    {catsToBeCollected ? isGotcha : noGotcha}
                </View>
                {/* <View style={[styles.container, styles.cat_animation]}>
                    <Text>CAT ANIMATION</Text>
                </View> */}
                <Button
                  onPress={handleLogout}
                  title='Logout'
                />
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
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        textShadowColor: 'pink',
        textShadowOffset: {width: -3, height: 1},
        textShadowRadius: 5,
        paddingVertical: 10
      },
      container:{
        backgroundColor: 'rgba(255, 192, 203, 0.9)',
        width: 300,
        justifyContent: 'center',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 15
      },
      cat_animation: {
        height: 250,
      },
      gachaContainer: {
        height: 200
      },
      gachaContainerReady: {
        backgroundColor: 'rgba(255, 165, 0, 0.9)',
        height: 200
      },
      stepsText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10
      },
      noGotchaContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
      },
      noGotcha: {
        textAlign: 'center'
      },
  });