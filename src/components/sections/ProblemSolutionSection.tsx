import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

const problems = [
  "Missed leads and unorganized communication",
  "Inefficient customer support draining resources",
  "Wasted hours manually setting appointments"
];

const solutions = [
  "AI-powered lead capture and organization",
  "24/7 automated customer support",
  "Smart appointment scheduling"
];

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          The Challenges Businesses Face Today
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Traditional Approach</h3>
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-400">{problem}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Viper Byte Solution</h3>
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <p className="text-gray-400">{solution}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;