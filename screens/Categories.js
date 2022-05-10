import {  View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { fetching } from '../services/Fetch';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Config';
import {Shop} from '../context/ShopProvider';


const Categories = ({ navigation }) => {

    const {categories} = useContext(Shop);

    

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
                    return <TouchableOpacity onPress={() => handleCategory(item.nombre)}
                        keyExtractor={item => item.id.toString()}

                    >
                        <Text>{item.nombre}</Text>

                    </TouchableOpacity>
                }}
            /> : <ActivityIndicator size={'large'} color={'blue'} />}


        </View>
    )
}

export default Categories