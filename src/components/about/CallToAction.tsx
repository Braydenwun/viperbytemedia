import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl p-12"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Let's discuss how our AI-powered solutions can help you achieve your business goals
      </p>
      <Link
        to="/contact"
        className="inline-block px-8 py-4 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
      >
        Schedule a Free Consultation
      </Link>
    </motion.section>
  );
};

export default CallToAction;