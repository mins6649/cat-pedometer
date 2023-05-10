import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function CatCard({name, image, description }){
   
    return(
        <View style={styles.container}>
            <View style={styles.catCard}>
                <Text style={styles.text}>{name}</Text>
                <Image  
                    source={image} 
                    style={{width: 64, height: 64, position: 'relative'}} 
                />
            </View>
        </View>
    )
}
export default CatCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '33%',
        marginVertical: 10,
    },
    catCard: {
        backgroundColor: 'pink',
        borderRadius: 20,
        flexBasis: '33%',
        padding: 7
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Gaegu-Bold',
        fontSize: 20
    }
  });