const Header = () => {
    return (
        <header className="bg-customBlack">
            <nav className="flex justify-between items-center p-6">
                <div className="text-customViolet text-xl md:text-xl lg:text-2xl ml-5 font-extrabold">
                    CREATIVE LAB
                </div>
                <div className="flex items-center">
                    <a href="/projects" className="text-customViolet text-xl md:text-xl lg:text-xl mr-5 font-semibold">
                        PROJECTS
                    </a>
                    <a href="/contact" className="text-customViolet text-xl md:text-xl lg:text-xl mr-5 font-semibold">
                        CONTACT
                    </a>
                </div>
                <div className="text-customViolet text-xl md:text-xl lg:text-xl mr-5">
                    <a href="mailto:you@example.com">you@example.com</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;