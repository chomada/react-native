import {  Text, TouchableOpacity, View } from 'react-native'

const OrderItem = ({item}) => {

  return (
    <View>
    <TouchableOpacity >
        <Text>Orden:{item.buyer.nombre}, {item.buyer.direccion}</Text>
    </TouchableOpacity>
  </View>
  )
}

export default OrderItem;