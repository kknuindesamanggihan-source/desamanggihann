import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const CpButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Ganti nomor sesuai kebutuhan Anda (format internasional, tanpa tanda +)
    window.open("https://wa.me/6282293529765", "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-2 right-4 md:bottom-4 md:right-8 bg-green-500 text-white py-4 px-3 rounded-full shadow-lg cursor-pointer flex items-center transition-all duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: isHovered ? '160px' : '48px',
        height: '48px',
      }}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isHovered ? -10 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-center"
        style={{ width: '48px', height: '48px' }}
      >
        <FaWhatsapp size={24} />
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="whitespace-nowrap text-sm text-center"
        style={{ marginLeft: isHovered ? '8px' : '0', overflow: 'hidden' }}
      >
        Hubungi <br /> Kami
      </motion.span>
    </motion.div>
  );
};

export default CpButton;
