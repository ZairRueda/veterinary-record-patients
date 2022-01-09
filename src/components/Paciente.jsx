import React from 'react'

const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Andres Jimenez</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">05/01/2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quis, debitis, suscipit nobis maiores magni quos quas vero pariatur voluptate consequuntur omnis temporibus distinctio explicabo neque culpa sequi doloribus vitae.</span>
            </p>
        </div>
    )
}

export default Paciente
