import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import profile from '../data/profile'

// CHEMINS CORRIGÉS
const localImages = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
  "/images/project4.jpg",
  "/images/project5.jpg",
  "/images/project6.jpg",
  "/images/placeholder.jpg",
]

export default function Projects() {
  const projectsWithImages = (profile.projects || []).map((p, i) => ({
    ...p,
    image: localImages[i % localImages.length],
    name: p.name || p.title || `Projet ${i + 1}`,
    tagline: p.tagline || '',
    desc: p.desc || p.description || '',
    stack: p.stack || [],
    link: p.link || '',
  }))

  return (
    <section className="container py-14 md:py-20">
      <SectionTitle eyebrow="Portfolio" title="Tous les projets" subtitle="Sélection de projets académiques et personnels" />
      <div className="grid md:grid-cols-2 gap-8">
        {projectsWithImages.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </section>
  )
}
