import React from 'react';
import { motion } from 'framer-motion';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  lastUpdated,
  children
}) => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400 mb-8">Last Updated: {lastUpdated}</p>
          
          <div className="space-y-12">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPageLayout;