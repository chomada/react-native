import {  StyleSheet, View,Text , TouchableOpacity,Image } from 'react-native'
import Global from '../styles/Global';
const ProductItem = ({item,onSelected}) => {

    
    
  

  return (
    <TouchableOpacity
              onPress={() => onSelected(item)}
            >
                <View>
                    <Text style ={Global.title}>
                        {item.nombre}
                    </Text>
                    <Image source={{ uri: item.image }}
                    resizeMode = "cover"
        style={{
          height: 150,
          
          borderRadius: 5

        }}/>
                </View>
             
            </TouchableOpacity>
  )
}

export default ProductItem;
