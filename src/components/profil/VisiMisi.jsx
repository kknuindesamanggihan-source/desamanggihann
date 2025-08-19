import { motion } from "framer-motion";

const VisiMisi = () => {
  return (
      <div className="pt-20">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="p-8 md:px-16 space-y-8"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-1 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className=" text-start bg-lightBlue rounded-lg p-8"
            >
              <h1 className="text-primary text-xl lg:text-3xl font-bold text-center">Visi</h1>
              <ul className="text-base lg:text-lg ">
                <li>1. Terwujudnya Desa Manggihan yang maju, sejahtera, dan berdaya saing .</li> 
                <li>2. Desa Manggihan yang aman, makmur, dan berakhlakul karimah . </li>
                <li>3. Desa Manggihan yang unggul dalam pengelolaan sumber daya alam, pembangunan ekonomi berkelanjutan, dan pelayanan publik yang berkualitas . </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className=" text-start bg-lightBlue rounded-lg p-8"
            >
              <h1 className="text-primary text-xl lg:text-3xl font-bold text-center">Misi</h1>
              <ul className="text-base lg:text-lg">
                <li>1. Meningkatkan kualitas pelayanan publik berbasis digital .</li>
                <li>2. Mewujudkan pembangunan desa secara merata dan terencana .</li>
                <li>3. Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan .</li>
                <li>4. Membangun dan memperbaiki infrastruktur desa .</li>
                <li>5. Memberdayakan masyarakat melalui pemberdayaan ekonomi dan sosial .</li>
                <li>6. Meningkatkan partisipasi masyarakat dalam pembangunan desa .</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

    </div>

  );
};

export default VisiMisi;
