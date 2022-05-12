import React, { createContext, useState,useEffect } from 'react'
import { db } from "../firebase/Config";
import { collection, getDocs, query } from "firebase/firestore";

export const Shop = createContext()

const ShopProvider = ({children}) => {
  
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])


  useEffect(()=> {

      (async ()=>{
          const queryCollection = query(collection(db, "productos"))
          const queryCollectionCategories = query(collection(db, "categories"))
          const queryCollectionOrders = query(collection(db, "orders"))
          const querySnapshot = await getDocs(queryCollection);
          const querySnapshotCategories = await getDocs(queryCollectionCategories)
          const querySnapshotOrders = await getDocs(queryCollectionOrders)

          const productos = []
          querySnapshot.forEach((doc)=> {
              const producto = {id: doc.id, ...doc.data()}
              productos.push(producto)
          })
          const ordenes=[]
          querySnapshotOrders.forEach((doc)=> {
            const orden = {id: doc.id, ...doc.data()}
            ordenes.push(orden)
        })

          const categories = []
          querySnapshotCategories.forEach((doc)=> {
              const category = {id: doc.id, ...doc.data()}
              categories.push(category)
          })

          setProducts([...productos])
          setCategories([...categories])
          setOrders([...ordenes])
          console.log("productos: ",productos,"categorias: ",categories,"ordenes: ",ordenes)
      })()

  }, [])
  console.log(cart)
  const addCart = (product, quantityToAdd) => {

    const producto = isInCart(product);
    console.log(producto);
    if (producto) {
        producto.quantity += quantityToAdd;
        const cartFiltrado = cart.filter(elemento => elemento.id !== producto.id);
        cartFiltrado.push(producto);
        setCart(cartFiltrado);
        //Deberíamos agregar la cantidad al producto existente
    } else {
        //Agregamos un nuevo objeto al carrito
        setCart([...cart, { ...product, quantity: quantityToAdd }]);
    }
}

//Función auxiliar que me determina si el producto está o no en el cart
const isInCart = (producto) => {
    return cart.find(elemento => elemento.id === producto.id);
}
const sumaTotal = () => {
  const suma = cart.reduce((acc, item) => acc += (item.price * item.quantity), 0)
  return suma;
}

const conteoItems = () => {
  const suma = cart.reduce((acc, item) => acc += (item.quantity), 0)
  return suma;
}

const removeItem = (id) => {
  const auxCart = cart.filter(item => item.id !== id);
  setCart(auxCart);
}

console.log("holi")
  return (
    <Shop.Provider value={{
      
      products,
      categories,
      orders,
      cart,
      sumaTotal,
      conteoItems,
      removeItem,
      addCart

      
    }}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider