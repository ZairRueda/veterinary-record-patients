import { useState, useEffect } from 'react'
import Error from './Error'

/*// Estructura del state
import {useState} from 'react'

const [cliente, setCliente] = useState({})

Donde:  cliente = nuestra funcion principal
        setCliente = la funcion con la que integramos valore y modificamos al funcion principal
        ({}) = el valor inicial de nuestra funcion 
            este puede ser:
                (0) - un total
                ([]) - un arreglo
                (false) - un modal

*/

const Formulario = ({pacientes, setPacientes}) => {

    // El state tiene que ser declarado siempre antes del return 
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    const generarID = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validacion del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){

            setError(true)

            setTimeout(() => {
                setError(false)
            }, 2000);

            return
        }

        setError(false)

        // Objeto Paciente - para la integracion al prop de pacientes
        const objetoPaciente = { 
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            idx: generarID()
        }

        setPacientes([...pacientes, objetoPaciente])

        // Reiniciar el formulario

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 uppercase font-bold"
            >

                {error && <Error>
                    <p>Hay al menos un elemento faltante</p>
                </Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700">
                        Nombre Mascota
                    </label>

                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700">
                        Nombre Propietario
                    </label>

                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700">
                        Alta
                    </label>

                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700">
                        Sintomas
                    </label>

                    <input
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700"
                    value="Agregar Paciente"
                />
            </form>
        </div>
    );
}

export default Formulario;