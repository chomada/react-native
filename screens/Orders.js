import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem';
import {Shop} from '../context/ShopProvider';
const Orders = () => {

  const {orders} = useContext(Shop);

  const fnRender = ({ item }) => {
    return (
      <OrderItem
        item={item}
        
      />
    )
  }
  return (
    <View>
    <Text>Ordenes</Text>
    {orders.length !== 0 ?
      <FlatList
        data={orders}
        renderItem={fnRender}
        keyExtractor={item => item.id.toString()}
      />
      :
      <ActivityIndicator size={"large"} color={"blue"} />
    }

  </View>
  )
}

export default Orders