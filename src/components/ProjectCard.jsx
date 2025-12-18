import { motion } from 'framer-motion';

export default function ProjectCard({ p }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 150 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg text-white"
    >
      <img
        src={p.image}
        alt={p.name || 'Projet'}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="font-bold text-lg mb-1">{p.name}</h3>
      <p className="text-gray-300 mb-2">{p.desc}</p>
      <div className="flex flex-wrap gap-2">
        {(p.stack || []).map((tech, i) => (
          <span
            key={i}
            className="bg-black/40 border border-[#4F46E5] text-[#8B5CF6] px-2 py-1 rounded-md text-sm"
          >
            {typeof tech === 'string' ? tech : tech.name || tech}
          </span>
        ))}
      </div>
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-[#8B5CF6] underline"
        >
          Voir le projet
        </a>
      )}
    </motion.div>
  );
}
