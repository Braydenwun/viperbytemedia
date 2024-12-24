import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProblemSolutionSection from '../components/sections/ProblemSolutionSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <ProblemSolutionSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;