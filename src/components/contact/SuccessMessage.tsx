import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 rounded-xl p-8 backdrop-blur-sm text-center"
    >
      <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
      <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
      <p className="text-gray-400 mb-8">
        Thank you for reaching out. We'll get back to you as soon as possible.
      </p>
      <button
        onClick={onReset}
        className="px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors"
      >
        Send Another Message
      </button>
    </motion.div>
  );
};

export default SuccessMessage;