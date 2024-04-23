// import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <footer className="flex flex-col bg-customBlack text-customWhite ">

            <div className="w-full flex justify-around">
                <div className="text-white w-1/2 text-start p-7">
                    <section className="text-xl">
                        <p className="text-white">GOT A PROJECT IN MIND?</p>
                    </section>
                    <section className="text-7xl font-medium">
                        LET&#x27;S 
                    </section>
                    <section className="text-7xl font-medium">
                        CONNECT
                    </section>
                </div>
                <div className="p-7">
                    <form action="" className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="flex">
                            <input type="text" name="name" placeholder="Name" className="flex-1 m-1 p-2 bg-black text-white rounded-full border-none" required />
                            <input type="email" name="email" placeholder="Email" className="flex-1 m-1 p-2 bg-black text-white rounded-full border-none" required />
                        </div>
                        <textarea name="message" placeholder="Message" className="flex-1 m-1 p-3 bg-black text-white rounded-full border-none" required></textarea>
                        <button type="submit" className="m-1 p-1 bg-white text-customBlack rounded-full font-semibold">SUBMIT</button>
                    </form>
                </div>
            </div>

            <div className="w-full text-center text-customViolet text-5xl py-32 font-extrabold">
                DO YOU FEEL CREATIVE?
            </div>

            <div className="w-full text-customViolet pb-4 font-medium">
                <nav className="flex justify-around list-none">
                    <li>
                        <a href="">INSTAGRAM </a>
                    </li>
                    <li>
                        <a href="">BEHANCE </a>
                    </li>
                    <li>
                        <a href="">EMAIL</a>
                    </li>
                    <li>
                        <a href="">FACEBOOK </a>
                    </li>
                    <li>
                        <a href="">YOUTUBE  </a>
                    </li>
                    {/* <FaArrowRight /> */}
                </nav>
            </div>

        </footer>
    )
}

export default Footer