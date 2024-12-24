import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import AiSystemsPage from './pages/services/AiSystemsPage';
import SocialMediaPage from './pages/services/SocialMediaPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsOfServicePage from './pages/legal/TermsOfServicePage';
import CookiePolicyPage from './pages/legal/CookiePolicyPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/ai-systems" element={<AiSystemsPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;