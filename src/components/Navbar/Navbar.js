import { useState } from "react";
import menuIcon from "./menu.png";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav
      className="bg-white border-gray-200 rounded"
      style={{ backgroundColor: "#ADD8E6" }} 
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 relative">
        <span className="self-center text-3xl font-semibold whitespace-nowrap mr-auto text-black italic">
          Saurav Shete
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenu ? "true" : "false"}
          onClick={handleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <img src={menuIcon} alt="Menu Icon" className="w-8 h-7" />
        </button>
        <div
          className={`w-full ${isMenu ? "block" : "hidden"} md:block md:w-auto`}
          style={{ position: "relative", zIndex: 50 }}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-6 border border-gray-400 rounded-lg bg-blue-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-blue-200 md:dark:bg-white dark:border-gray-700 text-lg ">
            {/* Home Link */}
            <li>
              <HashLink
                to={"#"}
                smooth
                className="block py-2 px-4 text-gray-900 bg-white rounded hover:bg-blue-300 md:bg-transparent md:text-blue-700 md:hover:bg-transparent md:hover:text-blue-600 md:py-1"
                aria-current="page"
                onClick={handleMenu}
              >
                Home
              </HashLink>
            </li>
            {/* About Link */}
            <li>
              <HashLink
                to={"#about"}
                smooth
                className="block py-2 px-4 text-gray-900 bg-white rounded hover:bg-blue-300 md:bg-transparent md:text-blue-700 md:hover:bg-transparent md:hover:text-blue-600 md:py-1"
                onClick={handleMenu}
              >
                About
              </HashLink>
            </li>
            {/* Projects Link */}
            <li>
              <HashLink
                to="#projects"
                smooth
                className="block py-2 px-4 text-gray-900 bg-white rounded hover:bg-blue-300 md:bg-transparent md:text-blue-700 md:hover:bg-transparent md:hover:text-blue-600 md:py-1"
                onClick={handleMenu}
              >
                Projects
              </HashLink>
            </li>
            {/* Skills Link */}
            <li>
              <HashLink
                to="#skill"
                smooth
                className="block py-2 px-4 text-gray-900 bg-white rounded hover:bg-blue-300 md:bg-transparent md:text-blue-700 md:hover:bg-transparent md:hover:text-blue-600 md:py-1"
                onClick={handleMenu}
              >
                Skills
              </HashLink>
            </li>
            {/* Contact Link */}
            <li>
              <HashLink
                to="#contact"
                smooth
                className="block py-2 px-4 text-gray-900 bg-white rounded hover:bg-blue-300 md:bg-transparent md:text-blue-700 md:hover:bg-transparent md:hover:text-blue-600 md:py-1"
                onClick={handleMenu}
              >
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
