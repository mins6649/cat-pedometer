import React, {useContext} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import { pedometerContext } from './PedometerProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen({navigation, route}) {
    const { totalSteps, catsToBeCollected, dailySteps, remainingSteps, currentStepCount, gotcha} = useContext(pedometerContext)
    let isGotcha = <Button onPress = {gotcha} title= {catsToBeCollected.toString() + 'Cat Ready To Be Collected!'}/>
    let noGotcha = <Text>No cats to be collected</Text>

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
                <Text style={styles.title}>Name Of App</Text>
                    
                <View style={styles.container}>
                  <Text>Today's Current Steps: </Text>
                  <Text>{dailySteps} steps</Text>
                </View>

                <View style={styles.container}>
                  <Text>Currently on a walk? Count your steps:</Text>
                  <Text>{currentStepCount} steps</Text>
                </View>

                <View style={styles.container}>
                    <Text>Total Number of Steps:</Text>
                    <Text>{totalSteps}</Text>
                </View>

                <View style={styles.container}>
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