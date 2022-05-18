import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../screens/Auth';
import { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Config';
import { onAuthStateChanged } from 'firebase/auth';
import MainTab from './tabs/MainTab';
import { Shop } from '../context/ShopProvider';

const MainNavigation=()=> {
    const {userMail} = useContext(Shop);

    const [user,setUser]= useState(null);
    const Stack =createNativeStackNavigator();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                userMail(user.email)
                
                // ...
            } else {
                setUser(null)
                // User is signed out
                // ...
            }
        });
    }, [])


  return (
    <NavigationContainer>
        {user?<MainTab></MainTab>: <Auth ></Auth>}
      
    </NavigationContainer>
  )
}
export default MainNavigation;