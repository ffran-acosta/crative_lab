const Header = () => {
    return (
        <header>
            <div className="font-thunderhouse bg-black shadow">
                <nav className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <ul className="flex justify-between text-lg">
                        <li className="flex space-x-4">
                            <a href="" className="text-[#bd6097] hover:text-gray-700 font-bold">
                                MENU
                            </a>
                        </li>
                        <li className="font-bold">
                            <a href="/creative-lab" className="text-[#bd6097] hover:text-gray-700">
                                CREATIVE LAB
                            </a>
                        </li>
                        <li>
                            <a href="/about-us" className="text-[#bd6097] hover:text-gray-700 font-bold">
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