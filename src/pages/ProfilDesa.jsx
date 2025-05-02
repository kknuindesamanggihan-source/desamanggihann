import { useEffect } from "react";
import VisiMisi from "../components/profil/VisiMisi.jsx";
import Navbar from "../components/Navbar.jsx";
import WilayahDesa from "../components/profil/wilayahDesa.jsx";
import { useLocation } from "react-router-dom";
import StrukturPemerintahan from "../components/profil/struktur.jsx";
import SejarahDesa from "../components/profil/sejarahDesa.jsx";
import Footer from "../components/Footer.jsx";
import CpButton from "../components/cpButton.jsx";

function ProfilDesa() {
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
      <div className="fixed top-0 left-0 w-full z-50 bg-light">
        <Navbar />
      </div>

      <div className="pt-24 space-y-16"> {/* Tambahkan padding agar tidak tertutup Navbar */}
        <div id="visimisi">
          <VisiMisi />
        </div>

        <div id="struktur">
          <StrukturPemerintahan />
        </div>

        <div id="wilayah">
          <WilayahDesa />
        </div>

        <div id="sejarah">
          <SejarahDesa />
        </div>


        <CpButton/>
        <Footer/>
      </div>
    </section>
  );
}

export default ProfilDesa;
