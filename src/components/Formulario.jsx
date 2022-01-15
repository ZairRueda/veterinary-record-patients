import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    // States of Patient
    // El state tiene que ser declarado siempre antes del return 
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    // State for check
    const [error, setError] = useState(false)

    useEffect(() => {

        // == Check to patient ==
        // Forma de comprobar si un objeto tiene algo - Object.keys(objetoEnCuestion)
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            // console.log(paciente.idx);

        }

    }, [paciente])
    
    // ID is required to make a unique patient for after check and identification
    const generarID = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    // Validate Form
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
            sintomas
        }

        // Check Edit Patient
        if(paciente.idx) {
            // Editando Registro
            objetoPaciente.idx = paciente.idx

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.idx === paciente.idx ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)

            setPaciente({})
        } else {
        // If not, make a new register

            objetoPaciente.idx = generarID()

            setPacientes([...pacientes, objetoPaciente])

        }

        // Reload From States
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="font-semibold text-lg mt-5 text-center mb-10">
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
                        className="font-semibold border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-50 shadow-inner shadow-gray-200"
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
                        className="font-semibold border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-50 shadow-inner shadow-gray-200"
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
                        className="font-semibold border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-50 shadow-inner shadow-gray-200"
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
                        className="font-semibold border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-50 shadow-inner shadow-gray-200"
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
                        className="font-semibold border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-50 shadow-inner shadow-gray-200"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 rounded-lg active:translate-x-1 active:translate-y-1 shadow-md shadow-indigo-200"
                    value={paciente.idx ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
    );
}

export default Formulario;