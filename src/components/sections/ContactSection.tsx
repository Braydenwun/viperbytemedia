import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormValidation } from '../../hooks/useFormValidation';

const ContactSection: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { values, errors, handleChange, isValid } = useFormValidation({
    name: '',
    email: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const mailtoLink = `mailto:brayden@viperbytemedia.com?subject=Consultation Request from ${encodeURIComponent(values.name)}&body=${encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nBusiness Type: ${values.business}\n\nMessage:\n${values.message}`
      )}`;
      window.location.href = mailtoLink;
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return (
      <section id="contact-section" className="py-20 bg-gradient-to-b from-black/90 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-gray-400 mb-8">Thank you for reaching out. We'll get back to you soon.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-b from-black/90 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join hundreds of businesses using AI to save time, scale operations, and succeed
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-gray-400 mb-2">Business Type</label>
              <select
                id="business"
                name="business"
                value={values.business}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-emerald-500 font-sans"
                required
              >
                <option value="">Select your business type</option>
                <option value="startup">Startup</option>
                <option value="small">Small Business</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Tell us about your needs..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                isValid
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-gray-500 text-gray-300 cursor-not-allowed'
              }`}
            >
              Book Your Free Consultation Today!
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;