import {  Text, TouchableOpacity, View,StyleSheet } from 'react-native'
import Global from '../styles/Global';
const OrderItem = ({item}) => {

  return (
    <View>
        <Text style={Global.orderTitle}>Date: {item.createdAt}, Total: ${item.total}</Text>
  </View>
  )
}

export default OrderItem;

