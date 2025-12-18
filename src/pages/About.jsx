import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaDownload,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import profile from "../data/profile";
import SectionTitle from "../components/SectionTitle";

// Images depuis /public/images
const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.JPG",
  "/images/photo4.JPG",
  "/images/photo5.JPG",
  "/images/photo6.JPG",
  "/images/photo7.JPG",
  "/images/photo8.JPG",
  "/images/photo9.JPG",
  "/images/photo10.JPG",
];

export default function About() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-start">

      {/* ===== TEXTE ===== */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6"
      >
        <SectionTitle eyebrow="À propos" title="Qui suis-je ?" />

        <p className="text-gray-300 leading-relaxed">
          Je m'appelle <strong>{profile.name}</strong>. Développeur passionné,
          orienté solutions modernes, performance et fiabilité.
          J’évolue à l’intersection du <strong>développement web</strong>,
          de <strong>l’IA</strong> et des systèmes intelligents.
        </p>

        {/* Infos */}
        <ul className="bg-white/5 rounded-xl p-5 space-y-3 text-gray-300 text-sm backdrop-blur-md">
          <li className="flex items-center gap-3">
            <FaGraduationCap className="text-indigo-400" />
            <span><strong>Formation :</strong> {profile.school}</span>
          </li>
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-rose-400" />
            <span><strong>Localisation :</strong> {profile.location}</span>
          </li>
          <li className="flex items-center gap-3">
            <FaClock className="text-emerald-400" />
            <span><strong>Disponibilité :</strong> Immédiate</span>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="/#/contact"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg transition"
          >
            <FaEnvelope /> Me contacter
          </a>

          <a
            href="/docs/cv-2025.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-indigo-400 text-indigo-300 hover:bg-indigo-400/10 font-semibold rounded-xl transition"
          >
            <FaDownload /> Télécharger CV
          </a>
        </div>
      </motion.div>

      {/* ===== GALERIE FLUIDE ===== */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl h-56 md:h-96">
        <div className="flex gap-4 animate-scroll w-max will-change-transform">
          {[...photos, ...photos].map((photo, index) => (
            <div
              key={index}
              className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 overflow-hidden rounded-xl"
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
