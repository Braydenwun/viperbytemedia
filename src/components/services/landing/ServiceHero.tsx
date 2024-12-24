import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  title,
  subtitle,
  description,
  image
}) => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-emerald-400 text-xl font-semibold mb-4">{subtitle}</h2>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">{description}</p>
          
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHero;