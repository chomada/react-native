import { ActivityIndicator, FlatList, Modal, ImageBackground, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../context/ShopProvider'
import CartItem from '../components/CartItem'
import Global from '../styles/Global';
import { addDoc, collection, doc, getDoc, writeBatch } from 'firebase/firestore'
import { db } from '../firebase/Config'

const Cart = () => {

  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false)
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [checkoutText, setCheckoutText] = useState("")
  const [loadingCheckout, setLoadingCheckout] = useState(false)

  const value = useContext(Shop);

  const fnRender = ({ item }) => {
    return (
      <CartItem
        item={item}
        handleRemove={value.removeItem}
      />
    )
  }

  useEffect(() => {
    setTotal(value.sumaTotal())
  }, [value.cart])

  const handlePurchase = () => {

    if (nombre === "" || direccion === "") {
      return
    }
    const orderGenerada = {
      buyer: {
        nombre: nombre,
        direccion: direccion,
      },
      usuario:value.usuario,
      items: value.cart
      ,
      total: total,
      createdAt: new Date().toLocaleString()
    }

    //Primer paso: abrir un batch
    const batch = writeBatch(db)//ver en qué level colocarlo

    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []

    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    value.cart.forEach((prod) => {
      setLoadingCheckout(true)
      getDoc(doc(db, 'productos', prod.id))
        .then((documentSnapshot) => {
          if (documentSnapshot.data().stock >= prod.quantity) {
            batch.update(doc(db, 'productos', documentSnapshot.id), {
              stock: documentSnapshot.data().stock - prod.quantity
            })
          } else {
            outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
          }

          if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), orderGenerada).then(({ id }) => {
              batch.commit().then(() => {
                setCheckoutText(`Generate order with Id: ${id}`)
              })
            }).catch((err) => {
              setCheckoutText(`Error: ${err.message}`)
            })
          } else {
            let mensaje = ''
            for (const producto of outOfStock) {
              mensaje += `${producto.nombre} `
            }
            setCheckoutText(`Out of stock: ${mensaje}`)
          }
    

          setLoadingCheckout(false)
        })
    })
  }

  return (
    <View style={Global.container}
    >
                            <ImageBackground source={require("./../assets/ps52.jpg")} resizeMode="cover" style={Global.image}></ImageBackground>

      {value.cart.length !== 0 ?
        <>
          <FlatList
            data={value.cart}
            keyExtractor={item => item.id}
            renderItem={fnRender}
          >
          </FlatList>
          <View>
            <Text>Total: {(total.toFixed(1))}</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={Global.btn}
>Purchase</Text>
            </TouchableOpacity>
          </View>
        </>
        :
        <Text style={Global.title}>Cart empty...</Text>
      }
      
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={Global.modalParent}>
          <View style={Global.modalContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={Global.close} >X</Text>
            </TouchableOpacity>
            <TextInput style={Global.input}
              placeholder='Enter your name'
              onChangeText={setNombre}
              value={nombre}
            />
            <TextInput style={Global.input}
              placeholder='Enter your address'
              onChangeText={setDireccion}
              value={direccion}
            />
            <Text>Are you sure?</Text>
            <TouchableOpacity style={Global.btn} onPress={() => setModalVisible(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePurchase}>
              <Text style={Global.btn} >Confirm</Text>
            </TouchableOpacity>
            {loadingCheckout && <ActivityIndicator size={'small'} color={"green"} />}
            {!loadingCheckout && <Text>{checkoutText}</Text>}
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default Cart;

