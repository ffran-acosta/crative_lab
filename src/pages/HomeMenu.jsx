const HomeMenu = () => {
    return (
        <main className='container mx-auto'>
            <section className='py-10 '>
                <nav className="flex w-full">
                    <ul className="flex w-full flex-col items-center text-8xl">
                        <li className="py-4">
                            <a href="/streams-lab" className="text-[#bd6097] hover:text-[#834167]">STREAMS</a>
                        </li>
                        <li className="py-4">
                            <a href="/content-creation-lab" className="text-[#bd6097] hover:text-[#834167]">CONTENT CREATION</a>
                        </li>
                        <li className="py-4">
                            <a href="/cinematic-video-lab" className="text-[#bd6097] hover:text-[#834167]">CINEMATIC VIDEO</a>
                        </li>
                        <li className="py-4">
                            <a href="/photography-lab" className="text-[#bd6097] hover:text-[#834167]">PHOTOGRAPHY</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </main>
    );
};

export default HomeMenu;