import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-midnight to-charcoal pt-16"
    >
      <div className="container mx-auto px-6 py-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Giresh Raju <span className="text-gold">Adimulam</span>
          </h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl mb-8 text-light-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Full‑Stack & AI Engineer
          </motion.h2>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="tel:+919502775397" className="flex items-center gap-2 text-light hover:text-gold transition-colors">
              <Phone size={18} />
              <span>+91 95027 75397</span>
            </a>
            <a href="mailto:a.gireshraju@gmail.com" className="flex items-center gap-2 text-light hover:text-gold transition-colors">
              <Mail size={18} />
              <span>a.gireshraju@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-light">
              <MapPin size={18} />
              <span>Tanuku, Andhra Pradesh</span>
            </div>
            <a href="https://linkedin.com/in/giresh‑raju‑47b45b258" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-light hover:text-gold transition-colors">
              <Linkedin size={18} />
              <span>giresh‑raju‑47b45b258</span>
            </a>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#" className="btn btn-secondary flex items-center gap-2">
              <Download size={18} />
              Download Résumé
            </a>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;