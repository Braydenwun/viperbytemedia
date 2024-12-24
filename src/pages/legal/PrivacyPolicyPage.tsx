import React from 'react';
import LegalPageLayout from '../../components/legal/LegalPageLayout';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="March 12, 2024"
    >
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
        <p className="text-gray-400 mb-6">
          At Viper Byte Media, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
        <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
        <p className="text-gray-400 mb-4">
          We may collect personal information that you voluntarily provide when using our services, including:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>Name and contact information</li>
          <li>Email address</li>
          <li>Business information</li>
          <li>Payment information</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">2.2 Automatically Collected Information</h3>
        <p className="text-gray-400 mb-6">
          We automatically collect certain information when you visit our website, including:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Usage data</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-400 mb-4">We use the collected information for various purposes, including:</p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>Providing and maintaining our services</li>
          <li>Improving user experience</li>
          <li>Communicating with you</li>
          <li>Analyzing usage patterns</li>
          <li>Preventing fraud</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
        <p className="text-gray-400 mb-6">
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
        <p className="text-gray-400 mb-4">You have the right to:</p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
        <p className="text-gray-400 mb-6">
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:privacy@viperbytemedia.com" className="text-emerald-400 hover:text-emerald-300">
            privacy@viperbytemedia.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;