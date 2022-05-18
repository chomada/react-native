import { useEffect, useState,useContext } from 'react';
import { ImageBackground, View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import ProductItem from '../components/ProductItem';
import {Shop} from '../context/ShopProvider';

import Global from '../styles/Global';
const Products = ({ navigation, route }) => {

  const { category } = route.params;
  const {products} = useContext(Shop);

  const [productFilter, setProductFilter] = useState([])

  useEffect(()=> {

    (async ()=>{
      const productFilter = products.filter(product => product.category === category)
      setProductFilter(productFilter);
    })()

  }, [category])

  const fnRenderItem = ({ item }) => {
    return <ProductItem item={item} onSelected={handleDetail} />
  }

  const handleDetail = (item) => {


    navigation.navigate('Detail', {
      id: item.id,
      title: item.title,
      item: item
    })
  }
  return (
    <View style ={Global.container}>
              <ImageBackground source={require("./../assets/ps52.jpg")} resizeMode="cover" style={Global.image}></ImageBackground>

      {products.length !== 0 ?
        <FlatList
          data={productFilter}
          renderItem={fnRenderItem}
          keyExtractor={item => item.id.toString()}
        />
        :
        <ActivityIndicator size={"large"} color={"blue"} />
      }

    </View>
  )
}

export default Products;
