import { streamClients } from '../../data/clients.js'

const StreamCards = () => {

    return (
        
        <div className='flex flex-col w-full text-customViolet py-20'>
            {streamClients.map((client, index) => (
                <div key={index} className='flex justify-center w-full flex-wrap mb-20 xl:justify-around'>
                    <h2 className='text-7xl xl:text-7xl font-black pb-6 xl:pb-0'>{index + 1}/</h2>
                    <img src={client.gif} alt={client.name} className='rounded-3xl mx-5' style={{ maxHeight: '600px' }} />
                    <div className='flex flex-col max-w-screen-sm pt-8 xl:pt-0'>
                        <h2 className='text-4xl lg:text-5xl xl:text-7xl font-black justify-center flex'>{client.name}</h2>
                        <p className='pt-4 font-semibold text-base text-justify'>{client.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StreamCards