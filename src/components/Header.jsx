const Header = () => {
    return (
        <header>
            <div className="bg-black shadow">
                <nav className="w-full m-auto py-6 px-4 sm:px-6 lg:px-8 justify-center">
                    <ul className="flex justify-between tracking-wide items-center">
                        <li>
                            <a href="/" className="text-[#bd6097] hover:text-[#834167] text-5xl">
                                MENU
                            </a>
                        </li>
                        <li className="mb-">
                            <h2 className="text-[#bd6097]  text-7xl">
                                CREATIVE LAB
                            </h2>
                        </li>
                        <li>
                            <a href="/about-us" className="text-[#bd6097] hover:text-[#834167]  text-5xl">
                                ABOUT US
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;