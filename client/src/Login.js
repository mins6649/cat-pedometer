import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Login({navigation, route}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isForm, setIsForm] = useState(false);
    const [createUsername, setCreateUsername] = useState("");
    const [createEmail, setCreateEmail] = useState("")
    const [createPassword, setCreatePassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const signupForm = <View>
                          <TextInput 
                            onChangeText={text => setCreateUsername(text)}
                            value={createUsername}
                            placeholder='username'
                          />
                          <TextInput 
                            onChangeText={text => setCreateEmail(text)}
                            value={createEmail}
                            placeholder='email'
                          />
                          <TextInput 
                            onChangeText={text => setCreatePassword(text)}
                            value={createPassword}
                            placeholder='password'
                          />
                          {errorMessage !== "" && errorMessage}
                          <Button 
                            title='Signup!'
                            onPress={handleSignup}
                          />
                        </View>
    function showForm(){
      setIsForm(!isForm)
    }
    async function handleSubmit() {
      fetch(`http://192.168.1.186:5555/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then(async res => {
          if (res.status==200){
            let user = await res.json()
            route.params.onLogin(user)
          }
          else{
            console.log("error loggin in")
          }
        })
    }
    function handleSignup(){
      const userObj = {username: createUsername, email: createEmail, password: createPassword}
      fetch('http://192.168.1.186:5555/signup',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      })
      // .then(res => res.json())
      .then(async res => {
        if (res.status==201){
          let user = await res.json()
          route.params.onLogin(user)
        } else if(res.status == 406){
          setErrorMessage('Username already exists')
        } else if(res.status == 409){
          setErrorMessage('Email already exists')
        } else if(res.status == 422){
          setErrorMessage('Please enter a password')
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
        <TextInput 
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder='password'
            secureTextEntry
        />
        <Button 
          title='Login'
          onPress={handleSubmit}
        />

        {/* SIGNUP */}
        <Button 
          title='Need an account?'
          onPress={showForm}
        />
        {isForm ? signupForm : null}
      </View>
    );
  }
  export default Login;
  