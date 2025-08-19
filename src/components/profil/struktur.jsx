import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Papa from "papaparse";

const StrukturPemerintahan = () => {
  const [strukturData, setStrukturData] = useState([]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTwRLSi84346byrM0a7sqvkF-DOnUY6GUCtX-biM6b2xDV5MGa4cDkP2z4w7qPJyopmjLjVbkghhtcy/pub?output=csv"; // ganti dengan link CSV kamu

    fetch(csvUrl)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setStrukturData(result.data);
          },
        });
      })
      .catch((err) => console.error("Error fetch CSV:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.h1
          className="text-3xl font-bold text-center mb-10 text-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Struktur Pemerintahan Desa
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {strukturData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 text-center border border-green-200 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.Foto && (
                <img
                  src={item.Foto}
                  alt={item.Nama}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-green-400"
                  onError={(e) => {
                    e.target.style.display = "none"; // kalau foto error, hilangkan
                  }}
                />
              )}
              <h2 className="text-lg font-semibold text-green-800">{item.Nama}</h2>
              <p className="text-gray-600">{item.Jabatan}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StrukturPemerintahan;