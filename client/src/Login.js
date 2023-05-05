import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Login({navigation, route}) {

    const [username, setUsername] = useState("");

    async function handleSubmit() {

      fetch(`http://192.168.1.186:5555/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then(async res => {
          if (res.status==200){
            
            let user = await res.json()
            console.log(`USERNAME: ${username}`)
            console.log(user)
            route.params.onLogin(user) //TAKES US TO MAIN PAGE
            // navigation.navigate('Main', {username: username})
          }
          else{
            console.log("error loggin in")
          }
        })
    }
  
    return (
      <View>
        <TextInput 
            onChangeText={text => setUsername(text)}
            value={username}
            placeholder='username'
        />
        <Button 
          title='Login'
          onPress={handleSubmit}
        />
      </View>
    );
  }
  export default Login;
  