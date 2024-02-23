const HomeMenu = () => {
    return (
        <main className='container mx-auto'>
            <section className='py-10 '>
                <nav className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <ul className="flex flex-col items-center space-y-4 tracking-wide">
                        <li>
                            <a href="/streams-lab" className="text-[#bd6097] hover:text-[#834167] text-5xl">
                                STREAMS
                            </a>
                        </li>
                        <li>
                            <a href="/content-creation-lab" className="text-[#bd6097] hover:text-[#834167] text-5xl">
                                CONTENT CREATION
                            </a>
                        </li>
                        <li>
                            <a href="/cinematic-video-lab" className="text-[#bd6097] hover:text-[#834167] text-5xl">
                                CINEMATIC VIDEO
                            </a>
                        </li>
                        <li>
                            <a href="/photography-lab" className="text-[#bd6097] hover:text-[#834167] text-5xl">
                                PHOTOGRAPHY
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </main>
    );
};

export default HomeMenu;