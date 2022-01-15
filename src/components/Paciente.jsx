import React from 'react'

// == Component schema of any patient - this componet uses props ==
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    // == Confirmation of Deleted ==
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')
        if (respuesta) {
            eliminarPaciente(paciente.idx)
        }
    }

    return (
        <div id={'paciente-' + paciente.idx} className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
            
            <div className='p-3 bg-gray-50 shadow-inner mb-5 shadow-gray-300 rounded-xl'>
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-semibold normal-case">{paciente.nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-semibold normal-case">{paciente.propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-semibold normal-case">{paciente.email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                    <span className="font-semibold normal-case">{paciente.fecha}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                    <span className="font-semibold normal-case">{paciente.sintomas}</span>
                </p>
            </div>
            

            <div className='flex justify-evenly'>
                <button
                    type="button"
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg active:translate-x-1 active:translate-y-1 shadow-md shadow-indigo-200'
                    // Es necesario usar un arrow function para que la funcion integrada onClick cumpla con su funcionamiento
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg active:translate-x-1 active:translate-y-1 shadow-md shadow-red-100"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>

        </div>
    )
}

export default Paciente
