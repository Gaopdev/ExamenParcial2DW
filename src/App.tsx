import './App.css'
import { Search, Card } from './components'
import { useDigimon } from './hooks'

function App() {
  const { digimon, setFiltro, setNivel } = useDigimon()
  return (
    <>
    <Search 
    alEscoger={setNivel}
    alEscribir={setFiltro}
    />
    {digimon.map((p)=>(
        <Card
        nombre={p.nombre}
        imagen={p.imagen}
        nivel={p.nivel}
        />
      ))
    }
    </>
  )
}

export default App
