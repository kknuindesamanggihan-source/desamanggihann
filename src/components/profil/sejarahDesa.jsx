import { motion } from 'framer-motion';

const SejarahDesa = () => {
  return (
    <div className="bg-light py-12 px-4 md:px-12 min-h-screen">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sejarah Desa
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg text-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Gambar utama sejarah */}
        <motion.img
          src="https://source.unsplash.com/800x400/?village,history"
          alt="Ilustrasi Sejarah Desa"
          className="rounded-xl mb-6 w-full object-cover shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Konten narasi */}
        <p className="mb-4">
           Desa Manggihan merupakan salah satu desa yang terletak di Kecamatan Getasan Kabupaten Semarang.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci perferendis et veritatis, atque blanditiis laudantium magni sunt sed iusto modi dolor quas, cum eius!
        </p>
        <p className="mb-4">
          lorem25
        </p>

        {/* Gambar tambahan di tengah konten */}
        <motion.img
          src="https://source.unsplash.com/600x300/?indonesia,village"
          alt="Suasana Desa Zaman Dulu"
          className="rounded-lg mb-6 mx-auto shadow w-full md:w-3/4"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae minus nobis assumenda, magnam sapiente laudantium ipsum, aliquid ipsa ad quibusdam labore delectus? Eveniet corrupti vitae itaque placeat excepturi sit repellendus?
        </p>
        <p>
          Peninggalan budaya dan adat istiadat masih dijaga dengan baik oleh masyarakat desa, termasuk tradisi upacara
          adat dan gotong royong yang menjadi bagian tak terpisahkan dari kehidupan sehari-hari.
        </p>
      </motion.div>
    </div>
  );
};

export default SejarahDesa;
