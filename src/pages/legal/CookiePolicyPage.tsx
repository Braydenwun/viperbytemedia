import React from 'react';
import LegalPageLayout from '../../components/legal/LegalPageLayout';

const CookiePolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated="March 12, 2024"
    >
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
        <p className="text-gray-400 mb-6">
          Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you interact with our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Types of Cookies We Use</h2>
        
        <h3 className="text-xl font-semibold text-white mb-3">2.1 Essential Cookies</h3>
        <p className="text-gray-400 mb-4">
          Required for basic website functionality. These cannot be disabled.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.2 Analytics Cookies</h3>
        <p className="text-gray-400 mb-4">
          Help us understand how visitors interact with our website.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.3 Marketing Cookies</h3>
        <p className="text-gray-400 mb-6">
          Used to track visitors across websites to display relevant advertisements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Cookies</h2>
        <p className="text-gray-400 mb-4">We use cookies to:</p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>Remember your preferences</li>
          <li>Understand website usage</li>
          <li>Improve user experience</li>
          <li>Provide relevant content</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
        <p className="text-gray-400 mb-4">
          You can control and manage cookies in your browser settings. Options include:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>Accepting all cookies</li>
          <li>Notifying you when cookies are set</li>
          <li>Rejecting all cookies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
        <p className="text-gray-400 mb-6">
          If you have questions about our Cookie Policy, please contact us at{' '}
          <a href="mailto:privacy@viperbytemedia.com" className="text-emerald-400 hover:text-emerald-300">
            privacy@viperbytemedia.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default CookiePolicyPage;