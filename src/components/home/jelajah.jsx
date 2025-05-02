import React from "react";
import { FadeUp } from '../Hero';
import { motion } from "framer-motion";
import { BsBank } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { TbSeeding } from "react-icons/tb";

const JelajahDesa = () => {
  const items = [
    {
      icon: <BsBank className="text-xl lg:text-2xl text-primary group-hover:translate-y-2 duration-300" />,
      text: "Profil Desa",
      link: "/profil-desa"
    },
    {
      icon: <FaChartLine className="text-xl lg:text-2xl text-primary group-hover:translate-y-2 duration-300" />,
      text: "Infografis",
      link: "/infografis"
    },
    {
      icon: <IoNewspaperSharp className="text-xl lg:text-2xl text-primary group-hover:translate-y-2 duration-300" />,
      text: "Berita",
      link: "/berita"
    },
    {
      icon: <TbSeeding className="text-xl lg:text-2xl text-primary group-hover:translate-y-2 duration-300" />,
      text: "Potensi Desa",
      link: "/potensi-desa"
    }
  ];

  return (
    <section id="jelajah-home" className="px-6 md:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Teks Kiri */}
        <div className="text-center md:text-left space-y-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl lg:text-3xl text-dark font-bold border-b-2 border-primary border-opacity-25 pb-2"
          >
            Jelajahi Desa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm lg:text-lg text-dark2"
          >
            Melalui website ini Anda dapat menjelajahi segala hal yang terkait dengan Desa, 
            mulai dari aspek pemerintahan, penduduk, demografi, potensi Desa, hingga berita terkini tentang Desa.
          </motion.p>
        </div>

        {/* Kotak Ikon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map(({ icon, text, link }, idx) => (
            <motion.a
              key={idx}
              variants={FadeUp(0.25)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              href={link}
              className="flex flex-col items-center justify-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl group cursor-pointer"
            >
              {icon}
              <p className="text-base md:text-lg text-center">{text}</p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JelajahDesa;
