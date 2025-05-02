import React, { useState } from "react";
import { motion } from "framer-motion";
import logoMinahasa from "../assets/logo-kab-minahasa.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Beranda",
    href: "/",
  },
  {
    id: 2,
    title: "Profil Desa",
    href: "/profil-desa",
    submenu: [
      { id: 1, title: "Visi Misi", href: "/profil-desa#visimisi" },
      { id: 2, title: "Struktur Pemerintahan Desa", href: "/profil-desa#struktur" },
      { id: 3, title: "Wilayah Desa", href: "/profil-desa#wilayah" },
      { id: 4, title: "Sejarah", href: "/profil-desa#sejarah" },

    ],
  },
  { id: 3, title: "Infografis", href: "/infografis" },
  { id: 4, title: "Potensi", href: "/potensi-desa" },
  { id: 5, title: "Berita", href: "/berita" },

];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-3 px-6 md:px-12 flex justify-between items-center border-b-2 border-[#d9d9d9] shadow-md"
      >
        {/* Logo */}
        <div className="flex flex-row justify-start items-center gap-2">
          <img src={logoMinahasa} alt="Logo Minahasa" className="w-8 md:w-10 h-auto" />
          <div className="flex flex-col">
            <h1 className="font-bold text-base md:text-xl text-primary">Desa Koka</h1>
            <h1 className="font-normal text-sm md:text-xl text-dark">Kabupaten Minahasa</h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.submenu ? (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <span className="inline-block py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-dark duration-200 hover:font-bold">
                      {menu.title}
                    </span>
                    {isDropdownOpen && (
                      <ul className="absolute left-0 bg-light bg-opacity-50 shadow-lg rounded-lg p-2 w-48">
                        {menu.submenu.map((submenuItem) => (
                          <li key={submenuItem.id}>
                            <Link
                              to={submenuItem.href}
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
                    to={menu.href}
                    className="inline-block py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-dark duration-200 hover:font-extrabold"
                  >
                    {menu.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu List */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-light w-full p-4 shadow-md"
        >
          <ul className="flex flex-col gap-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                {menu.submenu ? (
                  <div className="space-y-2">
                    <span
                      className="py-2 px-3 text-primary text-md font-semibold cursor-pointer hover:text-secondary duration-200 hover:font-bold"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {menu.title}
                    </span>
                    {isDropdownOpen && (
                      <ul className="bg-light border rounded-lg p-2 w-full">
                        {menu.submenu.map((submenuItem) => (
                          <li key={submenuItem.id}>
                            <Link
                              to={submenuItem.href}
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
                    to={menu.href}
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

export default Navbar;