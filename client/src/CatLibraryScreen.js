import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CatLibraryScreen() {

    return(
        <View style={styles.layout}>
            {/* SEARCH BAR: search cats by name! */}
            <Text style={styles.title}>Cat Library</Text>
        </View>
    )
}
export default CatLibraryScreen;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 32,
        marginBottom: 16,
      },
  });