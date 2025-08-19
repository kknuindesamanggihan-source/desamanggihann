import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import logoMinahasa from "../../assets/logodesa.jpg";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Beranda",
    to: "/",
  },
  {
    id: 2,
    title: "Profil Desa",
    to: "/profil-desa",
    submenu: [
      { id: 1, title: "Visi Misi", to: "/profil-desa#visimisi" },
      { id: 2, title: "Struktur Pemerintahan Desa", to: "/profil-desa#struktur" },
      { id: 3, title: "Wilayah Desa", to: "/profil-desa#wilayah" },
    ],
  },
  { id: 3, title: "Infografis", to: "/infografis" },
  { id: 4, title: "Potensi", to: "/potensi-desa" },
  { id: 5, title: "Berita", to: "/berita" },
];

const NavbarHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="items-center py-8 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 md:px-6 gap-12 flex justify-between lg:justify-center items-center "
      >
        <div className="flex flex-row justify-start items-center gap-2 md:gap-4">
          <img
            src={logoMinahasa}
            alt="Logo Kabupaten Semarang"
            className="w-8 md:w-12 h-auto"
          /> 
          <div className="flex flex-col">
            <h1 className="font-bold text-base md:text-lg lg:text-xl text-light">Desa Manggihan</h1>
            <h1 className="font-normal text-sm md:text-base text-light">Kabupaten Semarang</h1>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.submenu ? (
                  <>
                    <Link
                      to={menu.to}
                      className="inline-block py-2 px-3 text-light text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {menu.title}
                    </Link>
                    {isDropdownOpen && (
                      <ul
                        className="absolute left-0 bg-light bg-opacity-50 shadow-lg rounded-lg p-2 w-48"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        {menu.submenu.map((submenuItem) => (
                          <li key={submenuItem.id}>
                            <Link
                              to={submenuItem.to}
                              className="block py-2 px-2 text-primary text-base font-medium hover:bg-bgBlue hover:text-dark duration-200 rounded-lg"
                            >
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={menu.to}
                    className="inline-block py-2 px-3 text-light text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden flex flex-row items-center gap-4">
          <button  
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FiX className="text-3xl text-light" aria-hidden="true" />
            ) : (
              <FiMenu className="text-3xl text-light" aria-hidden="true" /> 
            )}
          </button>
        </div>
      </motion.div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-2 bg-light w-full p-4 shadow-md rounded-md bg-opacity-75"
        >
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.submenu ? (
                  <div className="space-y-2">
                    <Link
                      to={menu.to}
                      className="py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {menu.title}
                    </Link>
                    {isDropdownOpen && (
                      <ul className="bg-light bg-opacity-50 shadow-lg rounded-lg p-2 w-full">
                        {menu.submenu.map((submenuItem) => (
                          <li key={submenuItem.id}>
                            <Link
                              to={submenuItem.to}
                              className="block py-2 px-2 text-primary text-base font-medium hover:bg-bgBlue hover:text-dark duration-200 rounded-lg"
                            >
                              {submenuItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={menu.to}
                    className="py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default NavbarHome;
