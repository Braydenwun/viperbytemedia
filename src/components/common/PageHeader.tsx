import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">{description}</p>
    </motion.div>
  );
};

export default PageHeader;