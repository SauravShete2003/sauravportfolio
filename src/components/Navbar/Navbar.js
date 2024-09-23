import { Link } from "react-router-dom";
import { useState } from "react";
import menuIcon from './menu.png';

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="bg-white border-gray-200 rounded" style={{ backgroundColor: '#ADD8E6' }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <span className="self-center text-3xl font-semibold whitespace-nowrap mr-auto text-black italic">
          Saurav Shete
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenu ? "true" : "false"}
          onClick={handleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <img src={menuIcon} alt="Menu Icon" className="w-8 h-7" />
        </button>
        <div className={`w-full md:block md:w-auto ${isMenu ? "" : "hidden"}`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 cursor-pointer text-lg">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block py-1 px-4 text-gray-900 rounded hover:bg-blue-300 transition duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
                  onClick={handleMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
