import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Target, Shield } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to deliver cutting-edge solutions'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Building lasting relationships through trust and collaboration'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Delivering exceptional quality in everything we do'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Operating with transparency and ethical principles'
  }
];

const CoreValues: React.FC = () => {
  return (
    <section className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">Our Core Values</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          These principles guide everything we do and shape how we deliver value to our clients
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
          >
            <value.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;