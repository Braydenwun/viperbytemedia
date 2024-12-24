import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ price, features }) => {
  const isVariablePrice = price.toLowerCase().includes('varies');

  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border-2 border-emerald-500"
        >
          <div className="text-center mb-8">
            {!isVariablePrice && <h2 className="text-3xl font-bold text-white mb-4">Starting at</h2>}
            <div className="text-5xl font-bold text-white mb-4">{price}</div>
            <p className="text-gray-400">Everything you need to get started</p>
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-gray-400"
              >
                <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
          
          <Link
            to="/contact"
            className="block w-full py-4 text-center bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCard;