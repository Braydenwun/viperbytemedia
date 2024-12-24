import React from 'react';
import { Megaphone, Users, Target, BarChart } from 'lucide-react';
import ServiceHero from '../../components/services/landing/ServiceHero';
import FeatureGrid from '../../components/services/landing/FeatureGrid';
import ProcessTimeline from '../../components/services/landing/ProcessTimeline';
import Testimonials from '../../components/services/landing/Testimonials';
import PricingCard from '../../components/services/landing/PricingCard';
import ContactCTA from '../../components/services/landing/ContactCTA';

const features = [
  {
    icon: Megaphone,
    title: 'Content Strategy',
    description: 'Engaging content that converts'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Grow your social following'
  },
  {
    icon: Target,
    title: 'Targeted Campaigns',
    description: 'Reach the right audience'
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Track and optimize performance'
  }
];

const process = [
  {
    title: 'Audit',
    description: 'Analyzing your current presence'
  },
  {
    title: 'Strategy',
    description: 'Developing a tailored plan'
  },
  {
    title: 'Creation',
    description: 'Producing engaging content'
  },
  {
    title: 'Growth',
    description: 'Scaling your presence'
  }
];

const SocialMediaPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <ServiceHero
        title="Social Media Management"
        subtitle="Grow Your Online Presence"
        description="Build a strong social media presence that engages your audience and drives growth"
        image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
      />
      
      <FeatureGrid features={features} />
      
      <ProcessTimeline steps={process} />
      
      <Testimonials
        testimonials={[
          {
            quote: "Our social media engagement has increased by 300% since working with Viper Byte Media.",
            author: "Emily Rodriguez",
            company: "Digital First Agency"
          }
        ]}
      />
      
      <PricingCard
        price="Price varies by platform & needs"
        features={[
          'Content Strategy & Creation',
          'Platform Management',
          'Community Engagement',
          'Analytics & Reporting',
          'Paid Advertising',
          'Brand Development'
        ]}
      />
      
      <ContactCTA />
    </div>
  );
};

export default SocialMediaPage;