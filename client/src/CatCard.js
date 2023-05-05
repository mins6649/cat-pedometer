import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function CatCard({name, image, description }){
   
    return(
        <View>
            <Text>{name}</Text>
            <Image  
                source={image} 
                style={{width: 64, height: 64, position: 'relative'}} 
            />
        </View>
    )
}
export default CatCard;