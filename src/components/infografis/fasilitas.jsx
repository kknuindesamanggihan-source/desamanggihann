import React, { useEffect, useState } from 'react';

// Fungsi bantu untuk mengelompokkan berdasarkan jenis
const kelompokkanBerdasarkanJenis = (data) => {
  const grouped = {};
  data.forEach(item => {
    if (!grouped[item.jenis]) {
      grouped[item.jenis] = [];
    }
    grouped[item.jenis].push(item);
  });

  // Mengurutkan jenis secara alfabetis
  const sorted = Object.keys(grouped).sort().reduce((obj, key) => {
    obj[key] = grouped[key];
    return obj;
  }, {});

  return sorted;
};

const InfografisFasilitasDesa = () => {
  const [fasilitasGrouped, setFasilitasGrouped] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxkQclJPcp6tYTKBxXrTm1LaNsD6j3WaUPqu2CTPnwoESpwQvVcJnQrAW-9bC9VUvxhwQ/exec') // Ganti dengan URL API kamu
      .then(res => res.json())
      .then(data => {
        const grouped = kelompokkanBerdasarkanJenis(data.fasilitas);
        setFasilitasGrouped(grouped);
        setLoading(false);
      })
      .catch(err => {
        console.error('Gagal memuat data fasilitas:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Memuat data...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-start text-primary">Fasilitas Umum</h2>

      {Object.entries(fasilitasGrouped).map(([jenis, items]) => (
        <div key={jenis} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-1">{jenis}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.nama_fasilitas}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-1">
                  <h4 className="text-lg font-semibold">{item.nama_fasilitas}</h4>
                  <p className="text-sm text-gray-500">{item.jenis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfografisFasilitasDesa;
