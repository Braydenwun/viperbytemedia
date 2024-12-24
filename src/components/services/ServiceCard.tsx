import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  popular = false,
  path
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white/5 rounded-xl p-8 backdrop-blur-sm border-2 ${
        popular ? 'border-emerald-500' : 'border-transparent'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <Icon className="w-12 h-12 text-emerald-500 mb-6" />
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-400">
            <svg
              className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to={path}
        className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors ${
          popular
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default ServiceCard;