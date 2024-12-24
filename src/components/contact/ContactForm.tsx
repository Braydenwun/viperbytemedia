import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormValidation } from '../../hooks/useFormValidation';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import SuccessMessage from './SuccessMessage';

const ContactForm: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { values, errors, handleChange, handleSubmit, isValid } = useFormValidation({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      const mailtoLink = `mailto:braydenw@viperbytemedia.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`)}`;
      window.location.href = mailtoLink;
      setShowSuccess(true);
    }
  };

  if (showSuccess) {
    return <SuccessMessage onReset={() => setShowSuccess(false)} />;
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={onSubmit}
      className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <FormInput
          label="Name"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          required
        />
      </div>

      <FormInput
        label="Subject"
        name="subject"
        value={values.subject}
        error={errors.subject}
        onChange={handleChange}
        required
      />

      <FormTextArea
        label="Message"
        name="message"
        value={values.message}
        error={errors.message}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-4 rounded-lg font-semibold transition-all ${
          isValid
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-gray-500 text-gray-300 cursor-not-allowed'
        }`}
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;