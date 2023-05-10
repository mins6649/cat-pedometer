import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Pressable } from 'react-native';


function Login({navigation, route}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isForm, setIsForm] = useState(false);
    const [createUsername, setCreateUsername] = useState("");
    const [createEmail, setCreateEmail] = useState("")
    const [createPassword, setCreatePassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const signupForm = 
    <View>
        <TextInput 
          onChangeText={text => setCreateUsername(text)}
          value={createUsername}
          placeholder='username'
          style={styles.textInput}
        />
        <TextInput 
          onChangeText={text => setCreateEmail(text)}
          value={createEmail}
          placeholder='email'
          style={styles.textInput}
        />
        <TextInput 
          onChangeText={text => setCreatePassword(text)}
          value={createPassword}
          placeholder='password'
          style={styles.textInput}
        />
        {errorMessage !== "" && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <View style={styles.buttonContainer}>
          <View style={styles.signupButton}>
            <Button 
              title='Signup!'
              onPress={handleSignup}
              color='white'
            />
          </View>
        </View>
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
        <ImageBackground source={require('../assets/nature-background.jpeg')} style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.title}>PawDometer</Text>
            <TextInput 
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder='username'
                style={styles.textInput}
            />
            <TextInput 
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder='password'
                secureTextEntry
                style={styles.textInput}
            />
            {/* TODO: need to add error message for login */}
            <View style={styles.buttonContainer}>
              <View style={styles.loginButton}>
                <Button 
                  title='Login'
                  onPress={handleSubmit}
                  color='white'
                />
              </View>
            </View>
            {/* SIGNUP */}
            <Button 
              title='Need an account?'
              onPress={showForm}
            />
          </View>
          {isForm ? signupForm : null}
        </ImageBackground>
      </View>
    );
  }
  export default Login;
  
const styles = StyleSheet.create({
  background: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  container: {
    paddingTop: 20
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textShadowColor: 'pink',
    textShadowOffset: {width: -3, height: 1},
    textShadowRadius: 5,
    fontFamily: 'Gaegu-Bold'
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  loginButton: {
    backgroundColor: '#6a92f2',
    width: 200,
    borderRadius: 20
  },
  textInput: {
    marginVertical: 10,
    marginHorizontal: 100,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    color: '#20232a',
    fontSize: 20,
    padding: 8,
    fontFamily: 'Gaegu-Regular'
  },
  buttonText: {
    textAlign: 'center'
  },
  signupButton: {
    backgroundColor: '#86bb6a',
    width: 200,
    borderRadius: 20
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});