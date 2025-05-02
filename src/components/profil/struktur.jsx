import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StrukturPemerintahan = () => {
  const [strukturData, setStrukturData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzgASlbAOUOo-pzbaOIHwfa7v8LvmiG5a9CHKoxlCqAwuku5QY2wirlAYOVFgEMSk4C-w/exec')
      .then(response => response.json())
      .then(data => setStrukturData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const getWarna = (jabatan) => {
    if (jabatan.includes('Kepala Desa')) return 'bg-blue-500';
    if (jabatan.includes('Sekretaris')) return 'bg-green-500';
    if (jabatan.includes('Kaur')) return 'bg-purple-500';
    if (jabatan.includes('Kasi')) return 'bg-yellow-500';
    if (jabatan.includes('Kepala Jaga') || jabatan.includes('Meweteng')) return 'bg-red-500';
    return 'bg-gray-400';
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-8 bg-light">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Struktur Pemerintahan Desa
      </motion.h2>

      {/* Kepala Desa di tengah atas */}
      <div className="flex justify-center mb-8">
        {strukturData
          .filter(item => item.jabatan.includes('Kepala Desa'))
          .map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-white p-8 rounded-2xl shadow-md w-full max-w-xs ${getWarna(item.jabatan)} hover:scale-105 transform transition duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4 className="text-base font-bold text-center">{item.jabatan}</h4>
              <p className="text-lg text-center">{item.nama}</p>
            </motion.div>
          ))}
      </div>

      {/* Grid untuk jabatan lainnya */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">

        {/* Kanan bawah: Sekretaris & Kaur */}
        <div className="flex flex-col gap-2">
          {strukturData
            .filter(item => item.jabatan.includes('Sekretaris') || item.jabatan.includes('Kaur'))
            .map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center text-white px-6 py-5 rounded-2xl shadow-md w-full max-w-xs ${getWarna(item.jabatan)} hover:scale-105 transform transition duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="text-sm font-bold text-center">{item.jabatan}</h4>
                <p className="text-base text-center">{item.nama}</p>
              </motion.div>
            ))}
        </div>

        {/* Tengah bawah: Kasi */}
        <div className="flex flex-col ml-4 gap-2">
          {strukturData
            .filter(item => item.jabatan.includes('Kasi'))
            .map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center text-white px-6 py-5 rounded-2xl shadow-md w-full max-w-xs ${getWarna(item.jabatan)} hover:scale-105 transform transition duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="text-sm font-bold text-center">{item.jabatan}</h4>
                <p className="text-base text-center">{item.nama}</p>
              </motion.div>
            ))}
        </div>

          {/* Kiri bawah: Kepala Jaga & Meweteng */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {strukturData
            .filter(item => item.jabatan.includes('Kepala Jaga') || item.jabatan.includes('Meweteng'))
            .map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center text-white px-6 py-5 rounded-2xl shadow-md w-full max-w-xs ${getWarna(item.jabatan)} hover:scale-105 transform transition duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4 className="text-sm font-bold text-center">{item.jabatan}</h4>
                <p className="text-base text-center">{item.nama}</p>
              </motion.div>
            ))}
        </div>



      </div>
    </div>
  );
};

export default StrukturPemerintahan;
