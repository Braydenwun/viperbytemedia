import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Personalized Attention',
    description: 'As a small company, we provide dedicated support and customize solutions to your specific needs.'
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'We stay ahead of the curve with the latest AI and automation technologies.'
  },
  {
    title: 'Proven Results',
    description: 'Our solutions have helped businesses achieve measurable growth and efficiency.'
  },
  {
    title: 'Affordable Solutions',
    description: 'We offer enterprise-level technology at small business-friendly prices.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We combine the agility of a small company with the capabilities of enterprise technology
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex items-start space-x-4"
          >
            <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;