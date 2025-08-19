import React from "react";
import { motion } from "framer-motion";
import kantorDesaDepan from "../../assets/fotodesa.jpeg";

const RingkasanDesa = () => {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Gambar */}
        <motion.div
          className="lg:w-1/2 w-full "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img
              src={kantorDesaDepan}
              alt="Foto Desa Koka"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Konten Teks */}
        <motion.div
          className="lg:w-1/2 "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

        

          <p className="text-base lg:text-lg text-gray-700 leading-relaxed mt-4">
            <span className="text-primary md: text-2xl font-semibold">Desa Manggihan </span> adalah salah satu desa yang terletak di Kecamatan, Kabupaten Semarang. Dikenan dengan keindahan alam yang asri, potensi pertanian yang subur, serta masyarakat yang ramah dan berbudaya. Dalam beberapa tahun terakhir, Desa Manggihan aktif mengembangkan potensi ekonomi lokal serta meningkatkan infrastruktur desa untuk kemudahan masyarakat.
          </p>
        </motion.div>

        

      </div>
    </section>
  );
};

export default RingkasanDesa;
