import React, { createContext, useState } from 'react'

export const Team = createContext()

const TeamProvider = ({children}) => {
  

const [equipo,setEquipo]=useState([]);
const[contador,setContador]=useState(0);
const [total,setTotal] =useState(0);
const[elegido,setElegido]=useState('');
const[equipoGanador,setEquipoGanador]=useState([]);

  const addToTeam=(personaje)=>{
    setContador(contador+1)
    setEquipo([...equipo,personaje])
    setEquipoGanador([...equipoGanador,personaje])
    
  }

  const clearTeam=()=>{
    setEquipo([]);
    setEquipoGanador([]);
    setContador(0);
  }

  const removeCharacter=(personaje)=>{
    const cartFiltrado = equipo.filter(elemento => elemento.id !== personaje.id);
    setEquipo(cartFiltrado);
    setEquipoGanador(cartFiltrado);
    setContador(contador-1)

  }
  const totalPower = ()=>{
    const suma = equipo.reduce((acc, item) => acc += (item.power), 0)
    
    setTotal(suma)

  }
  const elegirPersonaje=(personaje)=>{
    if(personaje.id!==635){
      
      setElegido(personaje)
      
    }
  }
  const removeElegido=(personaje)=>{
    let newTeam=equipo.filter(per=>per.id!==personaje.id)
    setEquipo(newTeam);
    
    
  }
  return (
    <Team.Provider value={{
      
      equipo,
      contador,
      total,
      elegido,
      elegirPersonaje,
      addToTeam,
      removeCharacter,
      clearTeam,
      totalPower,
      removeElegido,
      equipoGanador
    }}>
      {children}
    </Team.Provider>
  )
}

export default TeamProvider