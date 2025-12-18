// SkillTag.jsx
import { motion } from 'framer-motion';

export default function SkillTag({ name, level = 0 }) {
  return (
    <motion.span
      className="flex items-center gap-2 px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm rounded-full font-medium cursor-default
                 hover:bg-[#8B5CF6]/20 transition-colors duration-300 shadow-sm"
      whileHover={{ scale: 1.05 }}
    >
      <span>{name}</span>
      <span className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={i < level ? 'text-yellow-400' : 'text-gray-400 dark:text-gray-600'}
          >
            ★
          </span>
        ))}
      </span>
    </motion.span>
  );
}
