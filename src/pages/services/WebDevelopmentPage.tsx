import React from 'react';
import { Code, Smartphone, Gauge, Search } from 'lucide-react';
import ServiceHero from '../../components/services/landing/ServiceHero';
import FeatureGrid from '../../components/services/landing/FeatureGrid';
import ProcessTimeline from '../../components/services/landing/ProcessTimeline';
import Testimonials from '../../components/services/landing/Testimonials';
import PricingCard from '../../components/services/landing/PricingCard';
import ContactCTA from '../../components/services/landing/ContactCTA';

const features = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored solutions built with modern technologies'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Perfect experience across all devices'
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Lightning-fast loading speeds'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built for search engine visibility'
  }
];

const process = [
  {
    title: 'Discovery',
    description: 'Understanding your goals and requirements'
  },
  {
    title: 'Design',
    description: 'Creating the perfect look for your brand'
  },
  {
    title: 'Development',
    description: 'Building with cutting-edge technology'
  },
  {
    title: 'Launch',
    description: 'Deploying and optimizing your site'
  }
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <ServiceHero
        title="Custom Website Development"
        subtitle="Transform Your Online Presence"
        description="Create a stunning, high-performance website that converts visitors into customers"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      />
      
      <FeatureGrid features={features} />
      
      <ProcessTimeline steps={process} />
      
      <Testimonials
        testimonials={[
          {
            quote: "The website exceeded our expectations. It's fast, beautiful, and our conversion rate has doubled.",
            author: "Sarah Johnson",
            company: "TechStart Solutions"
          }
        ]}
      />
      
      <PricingCard
        price="$599"
        features={[
          'Custom Design & Development',
          'Responsive Mobile-First Approach',
          'SEO Optimization',
          'Performance Optimization',
          'Content Management System',
          '3 Months Free Support'
        ]}
      />
      
      <ContactCTA />
    </div>
  );
};

export default WebDevelopmentPage;