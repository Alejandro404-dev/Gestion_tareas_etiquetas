import { useTareasContext } from "../context/TareasContext"

export const FiltroTareas = () => {

  const { tareas, filter, filterByLabel } = useTareasContext()

  const labels = Array.from(new Set(tareas.map(tarea => tarea.label.toUpperCase())))
  console.log(labels)

  const handleFilterChange = (e) => {
    console.log ('Recibiendo la etiqueta: ', e.target.value )
    filterByLabel(e.target.value)
  }


  return (
    <div className="mb-4  " >

      <h2 className=" text-xl font-bold mb-2 " >Filtrar por Etiqueta</h2>
      <select
        className="border p-2 rounded mb-2 w-full bg-white "
        onChange= {handleFilterChange}
        value={filter}

      >
        <option> -- ETIQUETAS -- </option>
        {labels.map((label, index) => (
          <option
            key={index}
            value={label}
          >
            {label}
          </option>

        ))}

      </select>
    </div>
  )
}
