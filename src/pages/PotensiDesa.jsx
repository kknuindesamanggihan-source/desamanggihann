import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CpButton from '../components/cpButton';

const PotensiDesaPage = () => {
  const [potensiList, setPotensiList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbwVvLGoyckBp7mHOFThcyGNjLGgjmDZ2NQsMstGdzeIqUsRBcFBu3OxiEiFCrqVGHkI/exec")  // ganti dengan URL Web App kamu
      .then((res) => res.json())
      .then((data) => {
        if (data.potensi) {
          setPotensiList(data.potensi);
        }
      })
      .catch((err) => console.error("Gagal memuat data potensi:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <div className="min-h-screen px-4 md:px-12 py-10 bg-light">
        <div className="fixed top-0 left-0 w-full z-50 bg-light">
          <Navbar />
        </div>

        <motion.div
          className="text-3xl md:text-4xl font-bold text-center text-primary mt-16 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Potensi Desa Koka
        </motion.div>

        {loading ? (
          <p className="text-center text-gray-600">Memuat data potensi...</p>
        ) : (
          <div className="space-y-12">
            {potensiList.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full md:w-1/3 h-64 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark mb-2">{item.judul}</h3>
                  <p className="text-gray-700 text-lg">{item.deskripsi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <CpButton />
      <Footer />
    </section>
  );
};

export default PotensiDesaPage;
