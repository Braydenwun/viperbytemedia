import React from 'react';
import { motion } from 'framer-motion';
import ServicesGrid from '../services/ServicesGrid';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to transform your business with cutting-edge technology
          </p>
        </motion.div>

        <ServicesGrid />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-8">
            Need a custom solution? We can help with that too!
          </p>
          <button className="px-8 py-4 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;