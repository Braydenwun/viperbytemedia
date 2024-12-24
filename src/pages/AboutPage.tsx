import React from 'react';
import PageHeader from '../components/common/PageHeader';
import CompanyStory from '../components/about/CompanyStory';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import CallToAction from '../components/about/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="About Viper Byte Media"
          description="Empowering businesses with cutting-edge AI solutions and personalized service"
        />
        
        <div className="mt-16 space-y-24">
          <CompanyStory />
          <CoreValues />
          <TeamSection />
          <WhyChooseUs />
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;