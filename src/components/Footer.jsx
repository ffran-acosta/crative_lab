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
    <footer className="py-4">
      <div className="max-w-screen-xl mx-auto text-2xl lg:text-6xl">
        <div className="flex justify-between items-center text-[#bd6097]">
          <span className="font-semibold tracking-wider bg-black bg-opacity-40 p-2">&copy; Copyright Creative Lab {new Date().getFullYear()}</span>
          <ul className="flex list-none space-x-2 p-2">
            {links.map((link) => (
              <li key={link}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 hover:text-[#834167]"
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