
import { useContext } from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import {Shop} from '../context/ShopProvider';
const Detail = ({ route}) => {

  const {item} = route.params;
  const {addCart} = useContext(Shop);
  const handleAdd = () => {
    addCart(item, 1)
  }

  return (
      <View>
          <Text>{item.nombre}</Text>
          <Image source ={{uri: item.image}}
              style = {{
              height: 200,
              width: '95%',
            }}
            resizeMode = "cover"/>
            <TouchableOpacity onPress={handleAdd}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
      </View>
  )
}

export default Detail