import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-emerald-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our solutions
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;