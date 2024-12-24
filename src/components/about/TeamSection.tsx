import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Brayden Wunsch',
    role: 'Founder & CEO',
    bio: 'AI enthusiast and tech innovator with a passion for helping businesses grow through automation.'
  }
];

const TeamSection: React.FC = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Passionate experts dedicated to transforming businesses through innovative AI solutions
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
            <p className="text-emerald-400 mb-4">{member.role}</p>
            <p className="text-gray-400">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;