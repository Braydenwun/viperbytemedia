import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroButtons: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className="flex flex-col sm:flex-row gap-6 justify-center"
    >
      <button 
        onClick={scrollToContact}
        className="group px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold relative overflow-hidden"
      >
        <span className="relative z-10">Get a Free Consultation</span>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </button>
      <Link 
        to="/services"
        className="px-8 py-4 rounded-lg border-2 border-emerald-500 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-colors"
      >
        Explore Our Services
      </Link>
    </motion.div>
  );
};

export default HeroButtons;