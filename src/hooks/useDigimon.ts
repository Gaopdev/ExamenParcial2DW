import { useEffect, useState } from 'react'
import type { Digimon } from "../types"

const useDigimon=()=>{
   
    const [digimon,setDigimon]=useState<Digimon[]>([])
    const [filtro, setFiltro] = useState("")
    const [nivel, setNivel] = useState("Todos")

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
    
    const filtratDigimon = digimon.filter((p) => {
      const filtradoTexto = p.nombre.toLowerCase().includes(filtro.toLowerCase())
      const filtroNivel = nivel === "Todos" || p.nivel === nivel
      return filtradoTexto && filtroNivel
    })
  return{
    digimon: filtratDigimon,
    setFiltro,
    setNivel
  }
}
export default useDigimon