import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faCode,
  faMobileScreen,
  faBrain,
  faDatabase,
  faCubes,
  faToolbox,
  faLanguage,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import profile from "../data/profile";
import SectionTitle from "../components/SectionTitle";

/* Icône + couleur par catégorie */
const CATEGORY_CONFIG = {
  Backend: { icon: faServer, color: "text-indigo-400" },
  Frontend: { icon: faCode, color: "text-cyan-400" },
  Mobile: { icon: faMobileScreen, color: "text-emerald-400" },
  IA: { icon: faBrain, color: "text-pink-400" },
  Data: { icon: faDatabase, color: "text-yellow-400" },
  Modélisation: { icon: faCubes, color: "text-purple-400" },
  "Bases de données": { icon: faDatabase, color: "text-orange-400" },
  "Outils & Divers": { icon: faToolbox, color: "text-gray-300" },
};

const formatSkill = (skill) =>
  typeof skill === "string" ? { name: skill, level: 4 } : skill;

export default function Skills() {
  const s = profile.skills;

  const groups = [
    ["Backend", s.backend],
    ["Frontend", s.frontend],
    ["Mobile", s.mobile],
    ["IA", s.ai],
    ["Data", s.data],
    ["Modélisation", s.modeling],
    ["Bases de données", s.db],
    ["Outils & Divers", (s.misc || []).concat(s.tools || [])],
  ];

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <SectionTitle
        eyebrow="Compétences"
        title="Stack technique"
        subtitle="Niveaux réels, outils maîtrisés et expertise terrain"
      />

      {/* ===== GRILLE ===== */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {groups.map(([title, list]) => {
          const cfg = CATEGORY_CONFIG[title];

          return (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg transition"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10">
                  <FontAwesomeIcon icon={cfg.icon} className={`${cfg.color} text-lg`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {list.map((x, i) => {
                  const skill = formatSkill(x);

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 4 }}
                      className="flex items-center justify-between bg-black/40 border border-white/10 rounded-xl px-4 py-2"
                    >
                      {/* Nom */}
                      <span className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>

                      {/* Étoiles */}
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                              opacity: 1,
                              scale: idx < skill.level ? 1 : 0.9,
                            }}
                            transition={{
                              delay: idx * 0.05,
                              type: "spring",
                              stiffness: 300,
                            }}
                            whileHover={{
                              scale: 1.3,
                              rotate: 8,
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faStar}
                              className={
                                idx < skill.level
                                  ? "text-yellow-400"
                                  : "text-gray-600"
                              }
                            />
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ===== LANGUES ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl"
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
          <FontAwesomeIcon icon={faLanguage} />
          Langues
        </h3>

        <div className="flex flex-wrap gap-3">
          {profile.languages.map((l) => (
            <span
              key={l.name}
              className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-sm border border-white/20"
            >
              {l.name} — {l.level}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
