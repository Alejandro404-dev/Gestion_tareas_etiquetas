
import { FiltroTareas } from "./components/FiltroTareas"
import { FormulariosTareas } from "./components/FormulariosTareas"
import { ListadoTareas } from "./components/ListadoTareas"


function App() {
  

  return (
    <>
      <div className="bg-yellow-200 mx-auto p-4 max-w-2xl text-3xl font-bold mb-4 text-center">

        Gestor de tareas
      </div>

      <div className="bg-slate-300 mx-auto p-4 max-w-2xl " >
        <FormulariosTareas/>
        <FiltroTareas/>
        <ListadoTareas/>
        
      </div>

    </>
  )
}

export default App
