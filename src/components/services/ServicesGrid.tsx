import React from 'react';
import { Globe, Bot, Megaphone } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, responsive websites built with modern technologies',
    features: [
      'Custom Design & Development',
      'Responsive Mobile-First Approach',
      'SEO Optimization',
      'Performance Optimization',
      'Content Management System',
      '3 Months Free Support'
    ],
    path: '/services/web-development'
  },
  {
    icon: Bot,
    title: 'AI Systems Integration',
    description: 'Cutting-edge AI solutions to automate your business',
    popular: true,
    features: [
      'Custom AI Chatbots',
      'Natural Language Processing',
      'Automated Customer Support',
      'Data Analysis & Insights',
      'Machine Learning Integration',
      'API Development'
    ],
    path: '/services/ai-systems'
  },
  {
    icon: Megaphone,
    title: 'Social Media Management',
    description: 'Comprehensive social media strategy and management',
    features: [
      'Content Strategy & Creation',
      'Platform Management',
      'Community Engagement',
      'Analytics & Reporting',
      'Paid Advertising',
      'Brand Development'
    ],
    path: '/services/social-media'
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesGrid;