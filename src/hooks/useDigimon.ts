import { useEffect, useState } from 'react'
import type { Digimon } from "../types"

const useDigimon=()=>{
   
    const [digimon,setDigimon]=useState<Digimon[]>([])

    const traerDigimon = async()=>{
      try{
        const respuesta = await fetch("https://digimon-api.vercel.app/api/digimon")
        const datos = await respuesta.json()
        const listadoReal = datos.results.map((p:any)=>({
          nombre:p.name,
          imagen:p.img,
          nivel:p.level
        }))
        setDigimon(listadoReal)
      }
      catch(error){
        console.error("Error al traer los datos", error)
      }
    }
    
    useEffect(()=>{
      traerDigimon()
    },[]) 
    
  return{
    digimon
  }
}
export default useDigimon