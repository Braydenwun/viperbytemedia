import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import PageHeader from '../components/common/PageHeader';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader
          title="Get in Touch"
          description="Have a project in mind? Let's discuss how we can help your business grow."
        />
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;