import { Button, View, Text,ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import {useState,useEffect} from 'react';
import { fetching } from '../services/Fetch';


const Categories = ({navigation}) => {

    const [categories,setCategories]= useState([]);

    useEffect( () => {

        (async()=>{
            try{
                const data =  await fetching ('https://fakestoreapi.com/products/categories');
                setCategories(data)
              }
              catch (error){
                  console.log(error)
              }

        })()
      
    }, [])

    const handleCategory=(categoryID)=>{
        
        navigation.navigate('Products',{
            category: categoryID
        })
    }
    
  return (
    <View>
        <Text>Categories</Text>

        {categories.length!==0? <FlatList
        data={categories}
        renderItem={({item})=>{
        return <TouchableOpacity onPress={()=>handleCategory(item)}
        keyExtractor= {item=>item.toString()}
        
        >
            <Text>{item}</Text>
        
        </TouchableOpacity>}}
        />:<ActivityIndicator size={'large'} color={'blue'}/>}
       
    
    </View>
  )
}

export default Categories