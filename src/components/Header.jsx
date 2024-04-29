import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-customBlack">
            <nav className="flex justify-between items-center py-6">
                <div className="text-customViolet ml-5 font-extrabold text-3xl">
                    <a href="/">CREATIVE LAB</a>
                </div>
                <div className="hidden md:flex items-center font-bold">
                    <a href="/projects" className="text-customViolet text-xl md:text-xl lg:text-xl mr-5">
                        PROJECTS
                    </a>
                    <a href="/contact" className="text-customViolet text-xl md:text-xl lg:text-xl mr-5">
                        CONTACT
                    </a>
                    <div className="text-customViolet text-xl md:text-xl lg:text-xl mr-5">
                        <a href="mailto:you@example.com">you@example.com</a>
                    </div>
                </div>
                <button
                    className="md:hidden text-customViolet text-3xl ml-5"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <IoClose /> : <CiMenuKebab />}
                </button>
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col items-center font-bold mr-3">
                        <a href="/projects" className="text-customViolet">
                            PROJECTS
                        </a>
                        <a href="/contact" className="text-customViolet">
                            CONTACT
                        </a>
                        <div className="text-customViolet">
                            <a href="mailto:you@example.com">you@example.com</a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;