import backgroundImage from '../assets/design_elements/BACKGROUND 1_ 3.png';
const Footer = () => {
  const links = ["Instagram", "Facebook", "Gmail"];
  
  return (
    <footer className="relative bg-transparent" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-screen-xl mx-auto py-8 text-4xl">
        <div className="flex justify-between items-center text-[#bd6097]">
          <span className="font-semibold">&copy; Copyright Creative Lab {new Date().getFullYear()}</span>       
          <ul className="flex list-none ">
            {links.map((link) => (
              <li key={link}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 hover:opacity-75 hover:text-[#834167]"
                  href={`https://${link}.com`}
                >
                  {link[0].toUpperCase() + link.slice(1)}
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