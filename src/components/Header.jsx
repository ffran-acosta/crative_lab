import Logo from '../assets/logo/logo.png';

const Header = () => {
    return (
        <header className="bg-transparent">
            <nav className="flex justify-around items-center">
                <a href="/" className="text-[#bd6097] hover:text-[#834167] text-3xl md:text-6xl lg:text-8xl ml-5">MENU</a>
                <img
                    src={Logo}
                    alt="Creative Lab Logo"
                    className="w-1/3 md:w-1/4 lg:w-1/5 mt-5 transition-all duration-300 ease-in-out"
                />

                <a href="/about-us" className="text-[#bd6097] hover:text-[#834167] text-3xl md:text-6xl lg:text-8xl mr-5">ABOUT US</a>
            </nav>
        </header>
    );
};

export default Header;