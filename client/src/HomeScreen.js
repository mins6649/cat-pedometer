import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import PedometerCounter from './PedometerCounter';

function HomeScreen({navigation, route}) {

    const user = route.params.user
    console.log(user)
    const datesArr = user.dates
    const totalSteps = datesArr.reduce(function (acc, obj) { return acc + obj.steps; }, 0);

    return(
        <View style={styles.layout}>
            <ImageBackground source={require('../assets/nature-background.jpeg')} style={styles.background}>
                <Text style={styles.title}>Name Of App</Text>

                {/* DAILY STEPS CONTAINER */}
                <View style={styles.container}>
                    {/* <Text>Today's Current Steps:</Text>
                    <Text>12345</Text> */}
                    <PedometerCounter/>
                </View>

                {/* TOTAL STEPS CONTAINER */}
                <View style={styles.container}>
                    <Text>Total Number of Steps:</Text>
                    <Text>{totalSteps}</Text>
                </View>

                {/* MISC CONTAINERS:  */}
                <View style={styles.container}>
                    <Text>GOTCHA: "New Cat Alert"</Text>
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