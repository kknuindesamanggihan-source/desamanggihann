import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CpButton from "../components/cpButton";

const BeritaPage = () => {
  const [beritaList, setBeritaList] = useState([]);
  const [selectedBerita, setSelectedBerita] = useState(null);
  const [loading, setLoading] = useState(true); // State loading

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzjQMwp43GaXRVCNALIiHJ9jdKI4E_re8gBzrfHkYCaz3V9BgzFOF3NOz7fW89nW2y6/exec")
      .then((res) => res.json())
      .then((data) => {
        if (data.berita) {
          setBeritaList(data.berita);
        }
      })
      .catch((err) => console.error("Gagal memuat data berita:", err))
      .finally(() => setLoading(false)); // Set loading ke false
  }, []);

  const openModal = (berita) => setSelectedBerita(berita);
  const closeModal = () => setSelectedBerita(null);

  return (
    <section>
      <div className="py-10 px-4 md:px-12 bg-light min-h-screen">
        <div className="fixed top-0 left-0 w-full z-50 bg-light">
          <Navbar />
        </div>

        <motion.div
        className="text-3xl md:text-4xl font-bold text-center text-primary mt-16 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Berita Desa
      </motion.div>

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-600 mt-20">Memuat berita...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {beritaList.map((berita, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100"
              >
                <img
                  src={berita.gambar}
                  alt={berita.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-dark mb-1">{berita.judul}</h2>
                  <p className="text-sm text-gray-500 mb-2">{berita.tanggal}</p>
                  <p className="text-gray-600 mb-4">{berita.kutipan}</p>
                  <button
                    onClick={() => openModal(berita)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Baca Selengkapnya →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedBerita && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative"
                initial={{ y: "-20%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-20%", opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedBerita.gambar}
                  alt={selectedBerita.judul}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-1">{selectedBerita.judul}</h2>
                <p className="text-sm text-gray-500 mb-4">{selectedBerita.tanggal}</p>
                <p className="text-gray-700">{selectedBerita.isi}</p>
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
                >
                  &times;
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CpButton/>
      <Footer />
    </section>
  );
};

export default BeritaPage;
