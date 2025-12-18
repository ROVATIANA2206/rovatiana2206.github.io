import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/skills', label: 'Compétences' },
    { to: '/projects', label: 'Projets' },
    { to: '/about', label: 'À propos' },
  ];

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out ${
      isActive
        ? 'bg-gradient-to-r from-[#8B5CF6]/30 to-[#4F46E5]/20 text-white shadow-md'
        : 'hover:bg-[#8B5CF6]/20 hover:text-white'
    }`;

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A10]/90 backdrop-blur-md border-b border-[#4F46E5]/30 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#8B5CF6] transition-all duration-300"
          aria-label="Retour à l'accueil"
        >
          Rovatiana <span className="text-[#8B5CF6]">N.</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 transition-all duration-300"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-16 left-0 right-0 bg-[#0A0A10]/95 backdrop-blur-md md:hidden border-b border-[#4F46E5]/20 shadow-lg"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col p-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      className={linkClass}
                      onClick={() => setIsOpen(false)}
                      end
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <NavLink
                    to="/contact"
                    className="btn w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#8B5CF6] text-white font-medium transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Me contacter
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-4">
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <NavLink to={link.to} className={linkClass} end>
                {link.label}
              </NavLink>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <NavLink
              to="/contact"
              className="btn px-4 py-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#8B5CF6] text-white font-medium transition-all duration-300"
            >
              Me contacter
            </NavLink>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
