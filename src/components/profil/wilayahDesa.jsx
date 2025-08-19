import React from 'react';
import { motion } from 'framer-motion';

const WilayahDesa = () => {
  const batasWilayah = [
    { arah: 'Utara', batas: 'Desa Tajuk' },
    { arah: 'Selatan', batas: 'Desa Polobogo' },
    { arah: 'Timur', batas: 'Desa Jetak' },
    { arah: 'Barat', batas: 'Desa Batur' },
  ];

  return (
    <div>
      {/* Judul */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Wilayah Desa Manggihan
      </motion.h2>

      {/* Grid Layout */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 px-6 md:px-12 bg-light"
      >
        {/* Info Wilayah */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg shadow-lg bg-white p-6"
        >
          <div className="pb-4">
            <h1 className="text-lg md:text-2xl font-bold text-primary">Luas Wilayah Desa</h1>
            <p className="text-lg text-dark">± 230 Ha</p>
          </div>

          <div className="pb-4">
            <h1 className="text-lg md:text-2xl font-bold text-primary">Batas Wilayah</h1>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {batasWilayah.map((item) => (
                <motion.div
                  key={item.arah}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-lg bg-bgBlue bg-opacity-10 hover:bg-opacity-25 transition duration-200"
                >
                  <h3 className="text-lg font-semibold text-dark">{item.arah}</h3>
                  <p className="text-sm text-primary">{item.batas}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pb-4">
            <h1 className="text-lg md:text-2xl font-bold text-primary">Jumlah Penduduk</h1>
            <p className="text-lg text-dark">± 3.200 Jiwa</p>
          </div>
        </motion.div>

        {/* Peta Lokasi */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.iframe
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.279601846512!2d110.40652907356607!3d-7.865041892134598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a79623b0f2f09%3A0x5f5481b89a2f0a2!2sManggihan%2C%20Kec.%20Getasan%2C%20Kabupaten%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1724081234567!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full hover:shadow-lg"
          ></motion.iframe>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WilayahDesa;
