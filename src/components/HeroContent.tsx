import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import TypewriterText from './TypewriterText';
import HeroButtons from './HeroButtons';

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center mb-8"
      >
        <Terminal className="w-12 h-12 text-emerald-400" />
      </motion.div>

      <h1 className="text-4xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
        <TypewriterText text="Revolutionize Your Business with" delay={0.3} />
        <div className="mt-4 sm:mt-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 inline-block">
            <TypewriterText text="AI-Powered Social Media Solutions" delay={1.0} />
          </span>
        </div>
      </h1>

      <div className="text-lg sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
        <TypewriterText 
          text="Streamline customer support, manage appointments, and boost engagement with cutting-edge automation"
          delay={1.7}
        />
      </div>

      <HeroButtons />
    </div>
  );
};

export default HeroContent;