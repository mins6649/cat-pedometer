import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function Logout() {
    
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      })
    //   .then(() => onLogout());
    // redirect to login page!
    }
  
    return (
        <View>
            <Button
                title='Logout'
                onPress={handleLogout}
            />
        </View>
        
    //   <header>
    //     <button onClick={handleLogout}>Logout</button>
    //   </header>
    );
  }
  export default Logout;