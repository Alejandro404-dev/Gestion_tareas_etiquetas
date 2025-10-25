import { createContext, useContext } from "react";
import useTareas from "../hooks/useTareas";


const TareasContex = createContext()

export const TareasProvider = ({ children }) => {

    const { tareas, addTarea, removeTarea, filter, filterByLabel } = useTareas()

    return (
        <TareasContex.Provider
            value={{ tareas, addTarea, removeTarea, filter, filterByLabel }}
        >
            {children}
        </TareasContex.Provider>
    )
}

export const useTareasContext = () => {
    const context = useContext(TareasContex)

    if (!context) {
        throw new Error('useTareasContext debe ser usado dentro del TareasProvider')
    }
    return context

}

