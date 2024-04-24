const HomeMenu = () => {
    return (
        <div className='h-screen w-full container mx-auto text-center text-customViolet flex justify-center items-center'>
            <div className="w-1/2 flex flex-col justify-center">
                <div className=" inline-block">
                        <p className="font-extrabold text-7xl">CREATIVE</p>
                        <p className="font-extrabold text-7xl">LAB</p>
                        <p className="text-7xl font-extralight">COMPANY</p>
                </div>
            </div>
            <div className="w-1/2">
                {/* Aquí puedes añadir tu imagen en el futuro */}
            </div>
        </div>
    );
};

export default HomeMenu;