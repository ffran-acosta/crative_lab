import backgroundImage from '../assets/design_elements/BACKGROUND 1_ 3.png';

const Header = () => {
    return (
        <header className="relative bg-transparent" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="relative z-10 flex items-start justify-between">
                    <div>
                        <a href="/" className="text-[#bd6097] hover:text-[#834167] text-5xl">MENU</a>
                    </div>
                    <div className="hidden space-x-8 sm:-my-pixel sm:flex">
                        <h2 className="text-[#bd6097]  text-7xl">CREATIVE LAB</h2>
                    </div>
                    <div>
                        <a href="/about-us" className="text-[#bd6097] hover:text-[#834167] text-5xl">ABOUT US</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;