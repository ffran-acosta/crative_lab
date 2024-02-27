import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const links = ["Instagram", "Facebook", "Gmail"];

  const getIcon = (link) => {
    switch (link) {
      case "Instagram":
        return <FaInstagramSquare />;
      case "Facebook":
        return <FaFacebookSquare />;
      case "Gmail":
        return <IoMdMail />;
      default:
        return null;
    }
  };

  return (
    <footer className="">
      <div className="max-w-screen-xl mx-auto  text-4xl">
        <div className="flex justify-between items-center text-[#bd6097]">
          <span className="font-semibold tracking-wider bg-black bg-opacity-40">&copy; Copyright Creative Lab {new Date().getFullYear()}</span>
          <ul className="flex list-none ">
            {links.map((link) => (
              <li key={link} className='mx-2'>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 hover:opacity-75 hover:text-[#834167]"
                  href={`https://${link.toLowerCase()}.com`}
                >
                  {getIcon(link)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;