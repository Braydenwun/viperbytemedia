import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Trusted By</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join the growing list of businesses transforming their operations with our solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
        {/* Add your client logos here */}
        {/* Example placeholder for logo grid */}
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="h-20 bg-white/5 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500">Logo {index + 1}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;