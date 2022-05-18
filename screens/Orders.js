import { ActivityIndicator, FlatList, ImageBackground, Text,  View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import OrderItem from '../components/OrderItem';
import {Shop} from '../context/ShopProvider';
import { db } from "../firebase/Config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Global from '../styles/Global';
const Orders = () => {

  const {usuario} = useContext(Shop);
  const [orders,setOrders]= useState([]);
  useEffect(()=> {

    (async ()=>{

        const queryCollectionOrders = query(collection(db, "orders"),where("usuario", "==", usuario));
   
        const querySnapshotOrders = await getDocs(queryCollectionOrders)

        const ordenes=[]
        querySnapshotOrders.forEach((doc)=> {
          const orden = {id: doc.id, ...doc.data()}
          ordenes.push(orden)
      })
        setOrders([...ordenes])
        
    })()

}, [orders])

  const fnRender = ({ item }) => {
    return (
      <OrderItem
        item={item}
        
      />
    )
  }
  return (
    <View style={Global.container}>
                    <ImageBackground source={require("./../assets/ps52.jpg")} resizeMode="cover" style={Global.image}></ImageBackground>

    {orders.length !== 0 ?
      <FlatList
        data={orders}
        renderItem={fnRender}
        keyExtractor={item => item.id.toString()}
      />
      :
      <Text style={Global.title}>You don't have orders yet...</Text>
    }

  </View>
  )
}

export default Orders;

