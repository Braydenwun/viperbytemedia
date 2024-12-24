import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-16"
        >
          Our Process
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-500/20" />
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className="w-1/2 relative">
                  <div className={`absolute top-0 ${
                    index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  } w-4 h-4 bg-emerald-500 rounded-full`} />
                  
                  <div className={`${
                    index % 2 === 0 ? 'pr-12' : 'pl-12'
                  }`}>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;