import {  View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { fetching } from '../services/Fetch';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Config';


const Categories = ({ navigation }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const data = await fetching('https://fakestoreapi.com/products/categories');
                setCategories(data)
            }
            catch (error) {
                console.log(error)
            }

        })()

    }, [])

    const handleCategory = (categoryID) => {

        navigation.navigate('Products', {
            category: categoryID
        })
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <View>

            <TouchableOpacity onPress={handleSignOut}>
                <Text>
                    Sign out
                </Text>
            </TouchableOpacity>
            <Text>Categories</Text>

            {categories.length !== 0 ? <FlatList
                data={categories}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => handleCategory(item)}
                        keyExtractor={item => item.toString()}

                    >
                        <Text>{item}</Text>

                    </TouchableOpacity>
                }}
            /> : <ActivityIndicator size={'large'} color={'blue'} />}


        </View>
    )
}

export default Categories