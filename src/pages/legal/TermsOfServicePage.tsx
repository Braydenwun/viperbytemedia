import React from 'react';
import LegalPageLayout from '../../components/legal/LegalPageLayout';

const TermsOfServicePage: React.FC = () => {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="March 12, 2024"
    >
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
        <p className="text-gray-400 mb-6">
          By accessing or using Viper Byte Media's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
        <p className="text-gray-400 mb-4">
          Viper Byte Media provides various digital services, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>Website Development</li>
          <li>AI Systems Integration</li>
          <li>Social Media Management</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
        <p className="text-gray-400 mb-4">You agree to:</p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>Provide accurate information</li>
          <li>Maintain confidentiality of your account</li>
          <li>Use services legally and appropriately</li>
          <li>Not interfere with service operation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
        <p className="text-gray-400 mb-6">
          All content, features, and functionality of our services are owned by Viper Byte Media and protected by international copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
        <p className="text-gray-400 mb-6">
          Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
        <p className="text-gray-400 mb-6">
          Viper Byte Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
        <p className="text-gray-400 mb-6">
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
        <p className="text-gray-400 mb-6">
          For questions about these Terms, contact us at{' '}
          <a href="mailto:legal@viperbytemedia.com" className="text-emerald-400 hover:text-emerald-300">
            legal@viperbytemedia.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default TermsOfServicePage;