import React from 'react';
import { Bot, Brain, MessageSquare, BarChart } from 'lucide-react';
import ServiceHero from '../../components/services/landing/ServiceHero';
import FeatureGrid from '../../components/services/landing/FeatureGrid';
import ProcessTimeline from '../../components/services/landing/ProcessTimeline';
import Testimonials from '../../components/services/landing/Testimonials';
import PricingCard from '../../components/services/landing/PricingCard';
import ContactCTA from '../../components/services/landing/ContactCTA';

const features = [
  {
    icon: Bot,
    title: 'Custom AI Chatbots',
    description: '24/7 automated customer support'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Intelligent automation solutions'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language',
    description: 'Human-like conversations'
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Data-driven insights'
  }
];

const process = [
  {
    title: 'Analysis',
    description: 'Understanding your automation needs'
  },
  {
    title: 'Strategy',
    description: 'Designing the AI solution'
  },
  {
    title: 'Implementation',
    description: 'Deploying and training the system'
  },
  {
    title: 'Optimization',
    description: 'Continuous improvement'
  }
];

const AiSystemsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <ServiceHero
        title="AI Systems Integration"
        subtitle="Automate Your Business"
        description="Leverage cutting-edge AI technology to streamline operations and boost efficiency"
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
      />
      
      <FeatureGrid features={features} />
      
      <ProcessTimeline steps={process} />
      
      <Testimonials
        testimonials={[
          {
            quote: "The AI chatbot has reduced our response time by 80% while maintaining high customer satisfaction.",
            author: "Michael Chen",
            company: "Growth Marketing Co"
          }
        ]}
      />
      
      <PricingCard
        price="$1,499"
        features={[
          'Custom AI Chatbots',
          'Natural Language Processing',
          'Automated Customer Support',
          'Data Analysis & Insights',
          'Machine Learning Integration',
          'API Development'
        ]}
      />
      
      <ContactCTA />
    </div>
  );
};

export default AiSystemsPage;