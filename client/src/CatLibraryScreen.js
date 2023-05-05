import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import CatList from './CatList';

function CatLibraryScreen() {

    const [cats, setCats] = useState([]);
    useEffect(()=>{
        fetch(`http://192.168.1.186:5555/cats`)
        .then(res => res.json())
        .then(data => setCats(data))
    },[])

    console.log(cats)

    return(
        <View>
            <Text>Cat Library</Text>
            <ScrollView>
                <CatList cats={cats}/>
            </ScrollView>
        </View>
    )
}
export default CatLibraryScreen;

// const styles = StyleSheet.create({
//     layout: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       title: {
//         fontSize: 32,
//         marginBottom: 16,
//       },
//   });