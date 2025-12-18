import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import profile from "../data/profile";

// Images locales depuis /public/images
const localImages = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
  "/images/project4.jpg",
  "/images/project5.jpg",
  "/images/project6.jpg",
  "/images/placeholder.jpg",
];

// Variants Framer Motion (légers)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Projects() {
  const projectsWithImages = (profile.projects || []).map((p, i) => ({
    ...p,
    image: localImages[i % localImages.length],
    name: p.name || p.title || `Projet ${i + 1}`,
    desc: p.desc || p.description || "",
    stack: p.stack || [],
  }));

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <SectionTitle
        eyebrow="Portfolio"
        title="Tous les projets"
        subtitle="Sélection de projets académiques et personnels"
      />

      <motion.div
        className="grid md:grid-cols-2 gap-8 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projectsWithImages.map((p, i) => (
          <motion.div key={i} variants={cardVariants}>
            <ProjectCard p={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
