import React from 'react';
import TechBackground from '../TechBackground';
import HeroContent from '../HeroContent';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      <TechBackground />
      <HeroContent />
    </section>
  );
};

export default HeroSection;