import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/Config';
import Global,{ colors } from '../styles/Global';

const colorPrueba= StyleSheet.create({
    prueba:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'violet'
    }

});

const Auth = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginView,setLoginView] =useState(false);

    const handleSignUp = ()=>{
        if (email !== "" && password != ""){
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    console.log(userCredential)
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
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
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    setEmail("");
                    setPassword("");
                })
                .finally(()=> {
                    
                })
        }
    }
  return (
    <View style={Global.container}>
        <View>
            <Text style={Global.titulo}>{loginView?'Login':'Registro de usuario'}</Text>
        <TextInput
                    
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Ingrese email"
                ></TextInput>
                 <TextInput
                    
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Ingrese password"
                ></TextInput>
                {loginView?<TouchableOpacity onPress={handleLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>:<TouchableOpacity onPress={handleSignUp}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>}
                <View>
                <Text>{loginView ? 'No tienes usuario?' : 'Ya tienes usuario?'}</Text>
                    <TouchableOpacity
                        onPress={() => setLoginView(!loginView)}>
                        <Text style={{color:colors.darkBlue}}>
                            {loginView ? 'Sign up' : 'Sign in'}
                        </Text>
                    </TouchableOpacity>
                </View>

        </View>
    
    </View>
  )
}

export default Auth

