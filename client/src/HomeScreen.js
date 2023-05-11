import React, {useContext} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Image, Modal} from 'react-native';
import { pedometerContext } from './PedometerProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CatList from './CatList';
// import Modal from "react-native-modal";

function HomeScreen({navigation, route}) {
    const { totalSteps, catsToBeCollected, dailySteps, currentStepCount, openGatcha, catUserOwns, gotcha} = useContext(pedometerContext)
    let isGotcha = <Button onPress = {gotcha} title= {catsToBeCollected.toString() + ` Cat${catsToBeCollected === 1 ? '' : 's'} Ready To Be Collected!`}/>
    let noGotcha = 
    <View style={styles.noGotchaContainer}>
      <Image
        style={styles.sadCat}
        source={require('../assets/sadCat.png')}
      />
      <Text style={[styles.noGotcha, styles.text]}>
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
                  <Text style={styles.text}>Today's Current Steps: </Text>
                  <Text style={[styles.text, styles.stepsText]}>{dailySteps} steps</Text>
                </View>

                <View style={styles.container}>
                  <Text style={styles.text}>Count your steps as you walk:</Text>
                  <Text style={[styles.text, styles.stepsText]}>{currentStepCount} steps</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>Total Number of Steps:</Text>
                    <Text style={[styles.text, styles.stepsText]}>{totalSteps} steps</Text>
                </View>

                <View style={[styles.container, (catsToBeCollected > 0) ? styles.gachaContainerReady : styles.gachaContainer]}>
                    {catsToBeCollected ? isGotcha : noGotcha}
                </View>
                
                <Modal 
                  visible={openGatcha}
                  transparent={true}
                  // presentationStyle='overFullScreen' 
                >
                  <View style={styles.modalContainer}>
                    <Text style={styles.gotchaTitle}>You have a new cat!</Text>
                    <View style={styles.modal}>
                      {catUserOwns.length > 0 ? <CatList cats={[catUserOwns[catUserOwns.length-1]]}/> : null}
                    </View>
                  </View>
                </Modal>

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
        paddingVertical: 10,
        fontFamily: 'Gaegu-Bold'
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
        fontSize: 28,
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
      text: {
        fontFamily: 'Gaegu-Bold',
        fontSize: 18
      },
      modalContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(100,100,100,0.5)',
        flex: 1,
        justifyContent: 'center'
      },
      modal: {
        marginTop: 20,
        height: 100
      },
      gotchaTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Gaegu-Bold',
        color: 'white'

      }
  });