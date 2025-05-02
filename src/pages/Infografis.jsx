import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import InfografisPenduduk from "../components/infografis/penduduk.jsx";
import IconPenduduk from '../assets/icon-penduduk.png';
import IconApbdes from '../assets/icon-apbdes.png';
import IconFasilitas from '../assets/icon-fasilitas.png';
import InfografisAPBDes from "../components/infografis/apbdes.jsx";
import InfografisFasilitasDesa from "../components/infografis/fasilitas.jsx";
import CpButton from "../components/cpButton.jsx";

function Infografis() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay to ensure DOM has rendered
      }
    }
  }, [location]);

  return (
    <section className="relative bg-light overflow-hidden bg-cover bg-center">
      <div className="fixed top-0 left-0 w-full z-50 bg-light shadow-md">
        <Navbar />
      </div>

      <div className="pt-28 space-y-16"> {/* Tambahkan padding agar tidak tertutup Navbar */}

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:container">
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center md:text-left">
            Infografis <br /> Desa Koka
          </h1>

          <div className="flex gap-6 ">
            {/* Penduduk */}
            <a href="#penduduk" className="bg-white p-4 rounded-lg hover:shadow-lg transition-all duration-200 text-center">
              <img src={IconPenduduk} alt="Ikon Penduduk" className="w-12 mx-auto mb-2" />
              <h1 className="text-lg md:text-xl text-gray-700">Penduduk</h1>
            </a>

            {/* APBDes */}
            <a href="#apbdes" className="bg-white p-4 rounded-lg hover:shadow-lg transition-all duration-200 text-center">
              <img src={IconApbdes} alt="Ikon APBDes" className="w-12 mx-auto mb-2" />
              <h1 className="text-lg md:text-xl text-gray-700">APBDes</h1>
            </a>

            {/* Fasilitas */}
            <a href="#fasilitas" className="bg-white p-4 rounded-lg hover:shadow-lg transition-all duration-200 text-center">
              <img src={IconFasilitas} alt="Ikon Fasilitas" className="w-12 mx-auto mb-2" />
              <h1 className="text-lg md:text-xl text-gray-700">Fasilitas</h1>
            </a>
          </div>
        </div>

        {/* Infografis Sections */}
        <div id="penduduk" className="md:mt-12">
          <InfografisPenduduk />
        </div>

        <div id="apbdes">
          <InfografisAPBDes />
        </div>

        <div id="fasilitas">
          <InfografisFasilitasDesa />
        </div>

        <CpButton/>
        <Footer />
      </div>
    </section>
  );
}

export default Infografis;
