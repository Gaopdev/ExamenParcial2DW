import './App.css'
import { Search } from './components'
import useDigimon from './hooks/useDigimon'

function App() {
  const { digimon, setFiltro, setNivel } = useDigimon()
  return (
    <>
    <Search 
    alEscoger={setNivel}
    alEscribir={setFiltro}
    />
    
    </>
  )
}

export default App
