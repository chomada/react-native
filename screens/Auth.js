import React, { useState } from 'react'
import { StyleSheet,ImageBackground, Button,Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/Config';
import Global from '../styles/Global';



const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginView,setLoginView] =useState(false);

    const handleSignUp = ()=>{
        if (email !== "" && password != ""){
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setEmail("");
                    setPassword("");
                    // ..
                })
                .finally(()=> {
                    
                })
        }

    }
    const handleLogin = () => {
        if (email !== "" && password != ""){
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setEmail("");
                    setPassword("");
                })
                .finally(()=> {
                    
                })
        }
    }
  return (
    <View  style={Global.container}>
        <ImageBackground source={require("./../assets/ps5.jpg")} resizeMode="cover" style={Global.image}></ImageBackground>
        <View>
            <Text style={Global.title}>{loginView?'Login':'Register'}</Text>
        <TextInput
                    style={Global.input}

                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your mail"
                    placeholderTextColor ='gray'

                    
                ></TextInput>
                 <TextInput
                    style={Global.input}

                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    placeholderTextColor ='gray'
                ></TextInput>
                {loginView?<TouchableOpacity onPress={handleLogin}>
                    <Text style={Global.btn}
>Login</Text>
                </TouchableOpacity>:<TouchableOpacity onPress={handleSignUp}>
                    <Text style={Global.btn}
>Sign Up</Text>
                </TouchableOpacity>}
                <View>
                <Text style={Global.textWhite}>{loginView ? 'New to native?' : 'Already have an account?'}</Text>
                    <Button
                        title={loginView ? 'Sign up' : 'Sign in'}

                        onPress={() => setLoginView(!loginView)}>
                        <Text style={Global.marginer}>
                            
                        </Text>

                    </Button>
                </View>

        </View>
    
    </View>
  )
}

export default Auth;

