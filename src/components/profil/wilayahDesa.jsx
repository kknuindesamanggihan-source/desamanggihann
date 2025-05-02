import React from 'react';
import { motion } from 'framer-motion';

const WilayahDesa = () => {
  const batasWilayah = [
    { arah: 'Utara', batas: 'Manado' },
    { arah: 'Selatan', batas: 'Rintis Mahawu' },
    { arah: 'Timur', batas: 'Tombuluan dan Kembes' },
    { arah: 'Barat', batas: 'Winangun Atas dan Lota' },
  ];

  return (
    <div>
        <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Wilayah Desa
        </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='grid grid-cols-1 md:grid-cols-2 gap-8 py-4 px-6 md:px-12 bg-light'
    >

      {/* Info Wilayah */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className='rounded-lg shadow-lg bg-white p-6'
      >
        <div className='pb-4'>
          <h1 className='text-lg md:text-2xl font-bold text-primary'>Luas Wilayah Desa</h1>
          <p className='text-lg text-dark'>1.200 Ha</p>
        </div>

        <div className='pb-4'>
          <h1 className='text-lg md:text-2xl font-bold text-primary'>Batas Wilayah</h1>
          <div className='grid grid-cols-2 gap-2 mt-2'>
            {batasWilayah.map((item) => (
              <motion.div
                key={item.arah}
                whileHover={{ scale: 1.05 }}
                className='p-3 rounded-lg bg-bgBlue bg-opacity-10 hover:bg-opacity-25 transition duration-200'
              >
                <h3 className='text-lg font-semibold text-dark'>{item.arah}</h3>
                <p className='text-sm text-primary'>{item.batas}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className='pb-4'>
          <h1 className='text-lg md:text-2xl font-bold text-primary'>Jumlah Penduduk</h1>
          <p className='text-lg text-dark'>2.511</p>
        </div>
      </motion.div>

      {/* Peta */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.iframe
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43967.85616838432!2d124.83279775487959!3d1.4166593126493228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328773331b45d719%3A0xeeaa2a9ed70c5e77!2sKoka%2C%20Kec.%20Tombulu%2C%20Kabupaten%20Minahasa%2C%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1745508368915!5m2!1sid!2sid"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className='rounded-lg w-full hover:shadow-lg'
        ></motion.iframe>
      </motion.div>
    </motion.div>
    </div>
  );
};

export default WilayahDesa;
