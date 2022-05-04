import { useEffect, useState } from 'react';
import {  View,Text,ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { fetching } from '../services/Fetch';


const Products = ({navigation, route}) => {

    const {category}= route.params;
    const [products,setProducts] = useState([]);
    
    useEffect(()=>{

        try{
            (async()=>{
                const data = await fetching(`https://fakestoreapi.com/products/category/${category}`)
                setProducts(data)
    
            })()

        }catch(error){
            console.log(error);
        }
      
    },[category]);

    const fnRenderItem = ({item}) => {
        return <TouchableOpacity
              onPress={() => handleDetail(item)}
            >
              <Text>
                {item.title}
              </Text>
            </TouchableOpacity>
    }
  
const handleDetail = (item) => {

        console.log("adentro del evento", item)
        navigation.navigate('Detail', {
            id: item.id,
            title: item.title,
            item: item
        })
    }
  return (
    <View>
        <Text>Products</Text>
        {products.length !== 0 ? 
        <FlatList
          data={products}
          renderItem={fnRenderItem}
          keyExtractor={item => item.id.toString()}
        />
        :
        <ActivityIndicator size={"large"} color={"blue"}/>
      }
        
    </View>
  )
}

export default Products