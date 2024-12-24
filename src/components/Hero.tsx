import React from 'react';
import { motion } from 'framer-motion';
import TechBackground from './TechBackground';
import { Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <TechBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <Terminal className="w-12 h-12 text-emerald-400 mr-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          AI-POWERED SOLUTIONS FOR
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600">
            SOCIAL MEDIA SUCCESS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Revolutionize Your Social Media Presence with Advanced AI Technology
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="group px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold relative overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
          <button className="px-8 py-4 rounded-lg border-2 border-emerald-500 text-emerald-400 font-semibold hover:bg-emerald-500/10 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;