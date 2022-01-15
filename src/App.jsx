import { useState, useEffect } from 'react'

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([ ])
  const [paciente, setPaciente] = useState({})

  // == Local Storage ==
  // Los effect se ejecutan de arriba a abajo 
  useEffect(() => {
    // Si el effect esperado es global solo itera una vez
    const obtenerLS = () => {
      const pacientesLS = JSON.parse( localStorage.getItem('pacientes')) || []
      setPacientes(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect(() => {
    // Si el effect esperado es especifico se itera multiples veces
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  // == Delete Patient ==
  const eliminarPaciente = idx => {
    const pacientesFiltrados = pacientes.filter(paciente => paciente.idx !== idx)
    setPacientes(pacientesFiltrados)
  }

  // == Component Body ==
  return (
    <div className="container mx-auto mt-20">

      <Header />

      <div className="mt-12 md:flex">

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>

    </div>
  )
}

export default App

/* Notas :
* En anteriores verciones se utilizaba import Raact from React, si trabajamos en un proyecto que lo tenga es importante no eliminarlo
* Toda funcion o componente debe conetener un return, si son multiples elementos deben estar rodeados por un elemento padre, en caso de requerir un elemento padre debemos usar un FRACTMENT que serian solo las <> ejem:
  <> 
    <multipleselementos>

    </multipleselementos>
  </>

* Lo que podemos hacer antes del return
    Todo tipo de funciones y objetos
  Lo cual no se pude hacer despues del return
  A menos que agregemos { las llave para decirle que sera codigo JS}
    Pero aun asi esta limitado a ternarios en lugar de If
    asi que solo se puede usar shots de codigo y resultados de funciones u objetos
* Importacion de Componentes
    en el lugar que ira, se agrega <NombreComponente/>
*/