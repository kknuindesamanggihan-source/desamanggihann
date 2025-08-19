import React, { useState, useEffect } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import kantorDesaDepan from '../assets/fotodesa.jpeg';
import kantorDesaSamping from '../assets/fotodesa2.jpeg';
import { motion, AnimatePresence } from "framer-motion";
import NavbarHome from "./home/NavbarHome";
import { Helmet } from "react-helmet";

const images = [kantorDesaSamping, kantorDesaDepan];

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToLayanan = () => {
    const layananSection = document.getElementById("jelajah-desa");
    if (layananSection) {
      layananSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-light overflow-hidden max-h-[500px] lg:max-h-[600px] h-screen">
      <Helmet>
        <meta name="description" content="Website Resmi Desa Koka" />
        <link rel="preload" as="image" href={kantorDesaDepan} />
      </Helmet>

      <div className="absolute top-0 left-0 right-0 z-20">
        <NavbarHome />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center m-8 h-full">
        <div className="flex flex-col justify-center items-start lg:mt-12">
          <motion.h1
            className="text-2xl md:text-6xl font-bold !leading-snug text-white"
            style={{
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Halo 👋,
          </motion.h1>

          <motion.h1
            className=" text-base md:text-xl lg:text-4xl font-bold !leading-snug text-white"
            style={{
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
          Selamat Datang di Website Resmi Desa Manggihan
          </motion.h1>

          <motion.h1
            className="text-xs md:text-lg font-light text-white"
            style={{
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            "Sumber Informasi terbaru pemerintahan Desa Manggihan"
          </motion.h1>
        </div>
        <motion.div className="flex justify-center items-center">
            <motion.div
              className="mt-12 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              onClick={handleScrollToLayanan}
            >
              <FaChevronCircleDown className="text-secondary text-5xl hover:text-light" />
            </motion.div>
          </motion.div>

      </div>

      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Background Hero"
          loading="lazy" 
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} 
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent opacity-80"></div>
    </section>
  );
};

export default Hero;
