import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const CompanyStory: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <Terminal className="w-12 h-12 text-emerald-400 mb-6" />
        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
        <div className="space-y-4 text-gray-400">
          <p>
            Founded in 2023, Viper Byte Media emerged from a vision to bridge the gap between cutting-edge AI technology and practical business solutions. We recognized that while artificial intelligence was revolutionizing industries, many businesses struggled to harness its potential effectively.
          </p>
          <p>
            Our journey began with a simple mission: to make advanced AI technology accessible and practical for businesses of all sizes. We started by developing custom AI solutions for small businesses, focusing on social media management and customer support automation.
          </p>
          <p>
            Today, we're proud to have helped numerous businesses transform their operations through our innovative AI solutions. Our commitment to personalized service and cutting-edge technology continues to drive our growth and success.
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl transform rotate-3"></div>
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
          alt="Modern office space"
          className="relative rounded-2xl shadow-xl"
        />
      </div>
    </motion.section>
  );
}

export default CompanyStory;