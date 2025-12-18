import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaEnvelope, FaDownload, FaGraduationCap, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import profile from "../data/profile";
import SectionTitle from "../components/SectionTitle";

// CHEMINS D'IMAGES DEPUIS /public/images
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
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
      },
    });
  }, [controls]);

  return (
    <section className="container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-start relative">
      
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10"
      >
        <SectionTitle eyebrow="À propos" title="Qui suis-je ?" />

        <p className="mb-6 text-gray-300 leading-relaxed">
          Je m'appelle <strong>{profile.name}</strong>. Passionné par l’innovation, je crée des solutions efficaces et modernes. Le développement, le sport et la musique rythment mon quotidien.
        </p>

        {/* Liste avec icônes */}
        <ul className="bg-white/5 dark:bg-black/20 rounded-xl p-5 mb-6 space-y-2 text-gray-300 text-sm">
          <li className="flex items-center gap-2">
            <FaGraduationCap className="text-blue-500" /> 
            <strong>Établissement :</strong> {profile.school}
          </li>
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" /> 
            <strong>Localisation :</strong> {profile.location}
          </li>
          <li className="flex items-center gap-2">
            <FaClock className="text-green-500" /> 
            <strong>Disponibilité :</strong> Immédiate
          </li>
        </ul>

        {/* Boutons améliorés */}
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg transition-colors duration-300"
          >
            <FaEnvelope /> Échanger
          </motion.a>

          <motion.a
            href="/cv-2025.pdf"
            download="CV_Rovatiana.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl shadow-lg transition-colors duration-300"
          >
            <FaDownload /> Télécharger CV
          </motion.a>
        </div>
      </motion.div>

      {/* Galerie animée */}
      <div ref={containerRef} className="overflow-hidden rounded-2xl shadow-lg relative h-96 z-0">
        <motion.div animate={controls} className="flex gap-4 absolute" style={{ width: "max-content" }}>
          {[...photos, ...photos].map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="overflow-hidden rounded-2xl w-48 h-48 flex-shrink-0"
            >
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
