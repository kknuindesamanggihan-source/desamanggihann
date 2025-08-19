import React, { useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import logoMinahasa from "../assets/logodesa.png";

const Footer = () => {
  const [copied, setCopied] = useState(null);
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopied(number);
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  // Kirim email via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_infpwpl",     // ganti dengan Service ID dari EmailJS
        "template_2l7smwp",    // ganti dengan Template ID
        {
          user_email: formData.email,
          user_message: formData.message,
        },
        "60VdXXrtz3sHYVOZc"      // ganti dengan Public Key EmailJS
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ email: "", message: "" });
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <footer className="bg-gradient-to-r from-secondary to-primary text-white mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Logo & Deskripsi */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            className="w-24 md:w-32 mb-4 drop-shadow-lg"
            src={logoMinahasa}
            alt="Logo Desa"
          />
          <p className="font-semibold text-sm md:text-base leading-relaxed">
            Desa Manggihan <br /> Kec. Getasan Kab. Semarang
          </p>
        </div>

        {/* Kontak */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold border-b-2 border-white inline-block pb-1">
            Kontak Kami
          </h2>
          <div className="space-y-3 text-sm md:text-base">
            <div>
              <h3 className="flex justify-center md:justify-start items-center gap-2 font-medium">
                <FaMapMarkerAlt /> Alamat
              </h3>
              <a
                href="https://maps.app.goo.gl/7fh5G6txYb5WRUao8?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 hover:underline block"
              >
                Desa Manggihan, Kec. Getasan, Kab. Semarang
              </a>
            </div>

            <div
              className="cursor-pointer group"
              onClick={() => handleCopy("0895332799929")}
            >
              <h3 className="flex justify-center md:justify-start items-center gap-2 font-medium">
                <FaPhoneAlt /> Telp/WA
              </h3>
              <p className="opacity-80 group-hover:text-yellow-300">
                0895332799929
              </p>
              {copied === "0895332799929" && (
                <span className="text-green-400 text-xs">
                  ✔ Nomor dicopy!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Ikuti Kami */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold border-b-2 border-white inline-block pb-1">
            Ikuti Kami
          </h2>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.instagram.com/djpbsulut"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl hover:text-pink-400 hover:scale-110 duration-200" />
            </a>
            <a
              href="https://djpb.kemenkeu.go.id/kanwil/sulut/id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbWorldWww className="text-3xl hover:text-blue-300 hover:scale-110 duration-200" />
            </a>
            <a
              href="https://youtube.com/@kanwildjpbsulawesiutara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-3xl hover:text-red-500 hover:scale-110 duration-200" />
            </a>
          </div>
        </div>

        {/* Form Email ke Admin */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold border-b-2 border-white inline-block pb-1">
            Hubungi Admin
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Masukkan email..."
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="px-3 py-2 w-full rounded-lg text-black focus:outline-none"
              required
            />
            <textarea
              placeholder="Tulis pesan..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="px-3 py-2 w-full h-20 rounded-lg text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition w-full"
            >
              {status === "loading"
                ? "Mengirim..."
                : status === "success"
                ? "Terkirim ✅"
                : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black bg-opacity-30 text-center py-3 text-xs md:text-sm"
      >
        <p>© 2025 Website Desa Manggihan. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
