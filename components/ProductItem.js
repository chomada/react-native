import {  View,Text , TouchableOpacity,Image } from 'react-native'


const ProductItem = ({item,onSelected}) => {

    
    
  

  return (
    <TouchableOpacity
              onPress={() => onSelected(item)}
            >
                <View>
                    <Text>
                        {item.nombre}
                    </Text>
                </View>
             
            </TouchableOpacity>
  )
}

export default ProductItem;