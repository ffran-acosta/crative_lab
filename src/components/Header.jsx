import Logo from '../assets/logo/logo.png'
const Header = () => {
    return (
        <header className="bg-transparent">
            <nav className="flex justify-between items-center">
                <a href="/" className="text-[#bd6097] hover:text-[#834167] text-5xl ml-5">MENU</a>
                <img src={Logo} alt="Creative Lab Logo" className="max-w-[250px] mt-5" />
                <a href="/about-us" className="text-[#bd6097] hover:text-[#834167] text-5xl mr-5">ABOUT US</a>
            </nav>
        </header>
    );
};

export default Header;