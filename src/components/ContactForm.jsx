import { useState } from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: '0 0 12px rgba(139,92,246,0.5)',
      transition: { duration: 0.2 },
    },
    blur: {
      scale: 1,
      boxShadow: 'none',
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="card bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_0_30px_rgba(139,92,246,0.3)] max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <form onSubmit={handleSubmit} className="grid gap-5">
        
        {/* Name */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1.5">
            Nom
          </label>
          <motion.div className="relative">
            <FontAwesomeIcon icon={faUser} className="absolute top-1/2 left-3 -translate-y-1/2 text-purple-400" />
            <motion.input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              placeholder="Votre nom"
              required
              variants={inputVariants}
              whileFocus="focus"
              animate="blur"
            />
          </motion.div>
        </div>

        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1.5">
            Email
          </label>
          <motion.div className="relative">
            <FontAwesomeIcon icon={faEnvelope} className="absolute top-1/2 left-3 -translate-y-1/2 text-purple-400" />
            <motion.input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              placeholder="votre@email.com"
              required
              variants={inputVariants}
              whileFocus="focus"
              animate="blur"
            />
          </motion.div>
        </div>

        {/* Message */}
        <div className="relative">
          <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1.5">
            Message
          </label>
          <motion.div className="relative">
            <FontAwesomeIcon icon={faComment} className="absolute top-3 left-3 text-purple-400" />
            <motion.textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none"
              placeholder="Votre message..."
              required
              variants={inputVariants}
              whileFocus="focus"
              animate="blur"
            />
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            type="submit"
            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Envoi...' : 'Envoyer'}
          </motion.button>
          <motion.a
            href={`tel:${profile.phone1}`}
            className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FontAwesomeIcon icon={faPhone} /> Appeler
          </motion.a>
        </div>

        {/* Status messages */}
        {status === 'success' && (
          <motion.p
            className="text-green-400 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            role="alert"
          >
            Message envoyé avec succès !
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="text-red-400 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            role="alert"
          >
            Une erreur s'est produite. Veuillez réessayer ou utiliser{' '}
            <a href={`mailto:${profile.email}`} className="underline hover:text-white">
              l'email direct
            </a>.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}
