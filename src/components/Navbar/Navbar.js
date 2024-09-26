import { useState } from "react";
import menuIcon from './menu.png';
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="bg-white border-gray-200 rounded" style={{backgroundColor: '#ADD8E6'}} >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 relative">
        <span className="self-center text-3xl font-semibold whitespace-nowrap mr-auto text-black italic">
          Saurav Shete
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenu ? "true" : "false"}
          onClick={handleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <img src={menuIcon} alt="Menu Icon" className="w-8 h-7" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenu ? "" : "hidden"}`}
          style={{ position: 'absolute', top: '100%', left: '0', zIndex: 50 ,}}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-400 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 cursor-pointer text-lg h-9">
            <li>
              <HashLink
                to={"#"}
                smooth
                className="block py-1 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-600 md:py-1 dark:text-white md:dark:text-blue-600"
                aria-current="page"
                onClick={handleMenu}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                to={"#about"}
                className="block py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-1 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#projects"
                smooth
                className="block py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-1 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#skill"
                smooth
                className="block py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-1 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}>
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#contact"
                smooth
                className="block py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-1 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={handleMenu}>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
