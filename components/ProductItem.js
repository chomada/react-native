import {  View,Text , TouchableOpacity } from 'react-native'


const ProductItem = ({item,onSelected}) => {

    
    
  

  return (
    <TouchableOpacity
              onPress={() => onSelected(item)}
            >
                <View>
                    <Text>
                        {item.title}
                    </Text>
                </View>
             
            </TouchableOpacity>
  )
}

export default ProductItem;