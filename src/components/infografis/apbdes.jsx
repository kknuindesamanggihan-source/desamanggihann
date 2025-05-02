import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#FF5722", "#9C27B0", "#009688", "#795548"];

const ApbdesPage = () => {
  const [data, setData] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbytTxlSKVnOq6xyI3qyPxLDRrs6a1Pr-B7cnq_BweC6Mx_8F4i1cZs9RUJ2mPBcVFc/exec")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        const years = Object.keys(resData?.pendapatan || {});
        if (years.length > 0) {
          setSelectedYear(years[0]); // pilih tahun pertama sebagai default
        }
      })
      .catch((err) => console.error("Gagal memuat data APBDes:", err));
  }, []);

  const getTotal = (items) => items.reduce((sum, item) => sum + item.jumlah, 0);

  if (!data || !selectedYear) {
    return <p className="text-center text-gray-500 py-10">Memuat data...</p>;
  }

  const years = Object.keys(data.pendapatan || {});
  const pendapatan = data.pendapatan[selectedYear] || [];
  const belanja = data.belanja[selectedYear] || [];
  const totalPendapatan = getTotal(pendapatan);
  const totalBelanja = getTotal(belanja);

  const renderInfoList = (items) => (
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span
            className="inline-block w-4 h-4 mt-1 rounded-sm"
            style={{ backgroundColor: COLORS[idx % COLORS.length] }}
          />
          <span className="text-sm md:text-base">
            {item.jenis}: <strong>Rp {item.jumlah.toLocaleString("id-ID")}</strong>
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container min-h-screen px-4 py-10 bg-light">
      <h1 className="text-3xl font-bold text-start text-primary mb-6">Infografis APBDes</h1>

      <div className="flex justify-start mb-6">
        <div className="relative inline-block w-64">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-primary focus:border-primary text-gray-700 py-3 px-4 pr-10 rounded-lg shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          >
            {years.map((year) => (
              <option key={year} value={year}>Tahun {year}</option>
            ))}
          </select>
          {/* Icon panah bawah */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.1 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>


      {/* Konten Tahun Terpilih */}
      <div className="mb-12 bg-white p-6 rounded-xl shadow space-y-12">
        <h2 className="text-2xl font-semibold">Tahun {selectedYear}</h2>

        {/* Pendapatan */}
        <div>
          <h3 className="text-xl font-bold text-green-600 mb-4">
            Pendapatan (Total: Rp {totalPendapatan.toLocaleString("id-ID")})
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pendapatan}
                    dataKey="jumlah"
                    nameKey="jenis"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={false}
                  >
                    {pendapatan.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `Rp ${value.toLocaleString("id-ID")}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2">{renderInfoList(pendapatan)}</div>
          </div>
        </div>

        {/* Belanja */}
        <div>
          <h3 className="text-xl font-bold text-red-600 mb-4">
            Belanja (Total: Rp {totalBelanja.toLocaleString("id-ID")})
          </h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={belanja}
                    dataKey="jumlah"
                    nameKey="jenis"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={false}
                  >
                    {belanja.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `Rp ${value.toLocaleString("id-ID")}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2">{renderInfoList(belanja)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApbdesPage;
