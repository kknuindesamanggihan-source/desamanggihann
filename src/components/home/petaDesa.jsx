import React from "react";
import { motion } from "framer-motion";


const PetaDesa = () => {
  return (
    <section>
      <div className="m-8 md:m-16 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-2xl lg:text-3xl font-bold border-b-2 border-primary border-opacity-25 !leading-snug">
              Peta Desa
            </h1>

            <div className="flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.81318465053!2d110.4285813!3d-7.2289134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708761163459c5%3A0xf6a7e025c8983815!2sManggihan%2C%20Kec.%20Getasan%2C%20Kabupaten%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1724037500584!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PetaDesa;