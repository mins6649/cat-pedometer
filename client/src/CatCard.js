import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function CatCard({name, image, description }){
   
    return(
        <View style={styles.catCardContainer}>
            <View style={styles.catCard}>
                <Text style={styles.catCardText}>{name}</Text>
                <Image  
                    source={image} 
                    style={{width: 90, height: 90, position: 'relative'}} 
                />
            </View>
        </View>
    )
}
export default CatCard;

const styles = StyleSheet.create({
    catCardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '33%',
        marginVertical: 10
    },
    catCard: {
        backgroundColor: 'pink',
        borderRadius: 20,
        padding: 7,
        height: 110
    },
    catCardText: {
        textAlign: 'center',
        fontFamily: 'Gaegu-Bold',
        fontSize: 20
    }
  });