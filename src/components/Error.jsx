
// == Component if we have a error ==
const Error = ({children}) => {
    return (
        <div className='bg-red-600 text-white text-center p-3 uppercase mb-3 rounded-md'>
            {children}
        </div>
    )
}

export default Error
