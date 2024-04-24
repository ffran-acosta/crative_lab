import { streamClients } from '../../data/clients.js'

const StreamCards = () => {

    const test1 = streamClients[0]

    return (
        <div className='flex w-full text-customViolet py-32 justify-around'>
            <div className='flex text-7xl font-extrabold'>
                1/
            </div>
            <div className='flex items-center ' >
                <img src={test1.gif} alt={test1.name} className=' rounded-3xl' style={{ maxHeight: '600px' }} />
            </div>
            <div className='flex flex-col p-2 max-w-screen-sm'>
                <h2 className='text-7xl font-extrabold'>{test1.name}</h2>
                <p className='pt-4 font-medium'>{test1.description}</p>
            </div>
        </div>
    )
}

export default StreamCards