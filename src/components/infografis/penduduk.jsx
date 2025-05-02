import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';
import IconPenduduk from '../../assets/icon-penduduk.png';
import IconPria from '../../assets/icon-pria.png';
import IconWanita from '../../assets/icon-wanita.png';
import IconKeluarga from '../../assets/icon-keluarga.png';

const InfografisPenduduk = () => {
  const [dataSeluruh, setDataSeluruh] = useState(null);
  const [dataJaga, setDataJaga] = useState([]);
  const [dataUmur, setDataUmur] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwHjZx-yom6jC46RYxadROVTb6ksPAftcRDlRyYXHOngF5VAHXfLOYtsP6FCfoGMsvr/exec')
      .then(res => res.json())
      .then(data => {
        setDataSeluruh(data.seluruh);
        setDataJaga(data.jaga);
        setDataUmur(data.kelompok_umur);
      })
      .catch(err => console.error('Gagal fetch data:', err));
  }, []);

  if (!dataSeluruh) {
    return <div className="text-center py-10">Memuat data...</div>;
  }

  const COLORS = ['#6366F1', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6', '#EC4899'];

  const dataKK = dataJaga.map(item => ({
    name: item.name,
    value: item.kk
  }));

  const dataPenduduk = dataJaga.map(item => ({
    name: item.name,
    value: item.penduduk
  }));

  return (
    <div className="container space-y-4">
      <div className='mt-6 md:mt-16 text-lg md:text-2xl font-bold text-primary'>
        Jumlah Penduduk & Kepala Keluarga
      </div>

      {/* Ringkasan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="bg-blue-100 rounded-xl p-4 shadow flex justify-center items-center gap-12">
          <img src={IconKeluarga} alt="" className="w-1/5" />
          <div>
            <h4 className="text-lg font-semibold">Jumlah KK</h4>
            <p className="text-xl">{dataSeluruh.kk} Jiwa</p>
          </div>
        </div>

        <div className="bg-yellow-100 rounded-xl p-4 shadow flex justify-center items-center gap-12">
          <img src={IconPenduduk} alt="" className='w-1/5 ml-8' />
          <div>
            <h4 className="text-lg font-semibold">Jumlah Penduduk</h4>
            <p className="text-xl">{dataSeluruh.total} Jiwa</p>
          </div>
        </div>

        <div className="bg-green-100 rounded-xl p-4 shadow flex justify-center items-center gap-12">
          <img src={IconPria} alt="" className='w-1/5' />
          <div>
            <h4 className="text-lg font-semibold">Laki-laki</h4>
            <p className="text-xl">{dataSeluruh.laki} Jiwa</p>
          </div>
        </div>

        <div className="bg-pink-100 rounded-xl p-4 shadow flex justify-center items-center gap-12">
          <img src={IconWanita} alt="" className='w-1/5' />
          <div>
            <h4 className="text-lg font-semibold">Perempuan</h4>
            <p className="text-xl">{dataSeluruh.perempuan} Jiwa</p>
          </div>
        </div>
      </div>

      {/* Penduduk per jaga */}
      <div>
        <h3 className="mt-6 md:mt-16 text-lg md:text-2xl font-bold text-primary">Jumlah Penduduk per Jaga</h3>
        <div className="flex flex-col md:flex-row items-center  justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataPenduduk}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {dataPenduduk.map((_, index) => (
                    <Cell key={`cell-penduduk-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="w-full md:w-1/2">
            <ul className="space-y-2">
              {dataPenduduk.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-base">{item.name} : {item.value} Jiwa</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* KK per jaga */}
      <div>
        <h3 className="mt-6 md:mt-16 text-lg md:text-2xl font-bold text-primary">Jumlah KK per Jaga</h3>
        <div className="flex flex-col md:flex-row items-center  justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataKK}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {dataKK.map((_, index) => (
                    <Cell key={`cell-kk-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="w-full md:w-1/2">
            <ul className="space-y-2">
              {dataKK.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-base">{item.name} : {item.value} KK</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Chart kelompok umur */}
      <div>
        <h3 className="mt-6 md:mt-16 mb-8 text-lg md:text-2xl font-bold text-primary">Distribusi Penduduk per Kelompok Umur</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataUmur}>
            <XAxis dataKey="kelompok" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="jumlah" fill="#10B981" name="Jumlah" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InfografisPenduduk;
