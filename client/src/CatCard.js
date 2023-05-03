import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// import black1 from './Cats/black1.png'
// import black2 from './Cats/black2.png'
// import calico from './Cats/calico.png'


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