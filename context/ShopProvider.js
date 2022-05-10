import React, { createContext, useState,useEffect } from 'react'
import { db } from "../firebase/Config";
import { collection, getDocs, query } from "firebase/firestore";

export const Shop = createContext()

const ShopProvider = ({children}) => {
  
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=> {

      (async ()=>{
          const queryCollection = query(collection(db, "productos"))
          const queryCollectionCategories = query(collection(db, "categories"))
          const querySnapshot = await getDocs(queryCollection);
          const querySnapshotCategories = await getDocs(queryCollectionCategories)
          const productos = []
          querySnapshot.forEach((doc)=> {
              const producto = {id: doc.id, ...doc.data()}
              productos.push(producto)
          })

          const categories = []
          querySnapshotCategories.forEach((doc)=> {
              const category = {id: doc.id, ...doc.data()}
              categories.push(category)
          })

          setProducts([...productos])
          setCategories([...categories])
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


// const [equipo,setEquipo]=useState([]);
// const[contador,setContador]=useState(0);
// const [total,setTotal] =useState(0);
// const[elegido,setElegido]=useState('');
// const[equipoGanador,setEquipoGanador]=useState([]);

//   const addToTeam=(personaje)=>{
//     setContador(contador+1)
//     setEquipo([...equipo,personaje])
//     setEquipoGanador([...equipoGanador,personaje])
    
//   }

//   const clearTeam=()=>{
//     setEquipo([]);
//     setEquipoGanador([]);
//     setContador(0);
//   }

//   const removeCharacter=(personaje)=>{
//     const cartFiltrado = equipo.filter(elemento => elemento.id !== personaje.id);
//     setEquipo(cartFiltrado);
//     setEquipoGanador(cartFiltrado);
//     setContador(contador-1)

//   }
//   const totalPower = ()=>{
//     const suma = equipo.reduce((acc, item) => acc += (item.power), 0)
    
//     setTotal(suma)

//   }
//   const elegirPersonaje=(personaje)=>{
//     if(personaje.id!==635){
      
//       setElegido(personaje)
      
//     }
//   }
//   const removeElegido=(personaje)=>{
//     let newTeam=equipo.filter(per=>per.id!==personaje.id)
//     setEquipo(newTeam);
    
    
//   }
  return (
    <Shop.Provider value={{
      
      products,
      categories,
      addCart
      
    }}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider