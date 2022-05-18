import { ImageBackground, View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Config';
import { Shop } from '../context/ShopProvider';
import Global from '../styles/Global';

const Categories = ({ navigation }) => {

    const { categories,clearCart } = useContext(Shop);



    const handleCategory = (categoryID) => {

        navigation.navigate('Products', {
            category: categoryID
        })
    }
    const handleSignOut = () => {
        clearCart();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <View style={Global.container}
        >
        <ImageBackground source={require("./../assets/ps52.jpg")} resizeMode="cover" style={Global.image}></ImageBackground>


            <Text style={Global.title}>Categories</Text>

            {categories.length !== 0 ? <FlatList
                data={categories}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={Global.list} onPress={() => handleCategory(item.nombre)}
                        keyExtractor={item => item.id.toString()}

                    >
                        <Text style={Global.textButton2}
                        >{item.nombre}</Text>

                    </TouchableOpacity>
                }}
            /> : <ActivityIndicator size={'large'} color={'blue'} />}
            <TouchableOpacity style={Global.btn} onPress={handleSignOut}>
                <Text style={Global.textButton}
                >
                    Sign out
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Categories;

