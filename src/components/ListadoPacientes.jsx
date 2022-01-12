import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes}) => {




    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

            {pacientes && pacientes.length ? (

                <>

                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                <p className="text-lg mt-5 text-center mb-10">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>



                {/* Note
                    Siempre que vayamos a mostrar un listado con .map 
                    o parecido este tiene que tener un Key unico para protejer la integridad de la app
                    Pero no es recomendado usar el indice de un arreglo como el Key 

                */}
                { pacientes.map( paciente => (
                    
                    <Paciente
                        key={paciente.idx}
                        paciente={paciente}
                    />
                ))}

                </>

            ) : (
                <>
                <h2 className="font-black text-3xl text-center">Aun no hay pacientes</h2>

                <p className="text-lg mt-5 text-center mb-10">
                    Agrega tus pacientes, {''}
                    <span className="text-indigo-600 font-bold">aqui podras administrarlos</span>
                </p>
                </>
            )}



            

        </div>
    )
}

export default ListadoPacientes
