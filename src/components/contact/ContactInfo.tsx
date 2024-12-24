import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import SocialIcons from '../social/SocialIcons';

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 rounded-xl p-8 backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-emerald-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <a 
              href="mailto:braydenw@viperbytemedia.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              braydenw@viperbytemedia.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="w-6 h-6 text-emerald-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-semibold mb-1">Phone</h3>
            <a 
              href="tel:+16105874720"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              (610) 587-4720
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-emerald-400 mt-1 mr-4" />
          <div>
            <h3 className="text-white font-semibold mb-1">Location</h3>
            <p className="text-gray-400">
              Reading, Pennsylvania<br />
              United States
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-white font-semibold mb-4">Follow Us</h3>
        <SocialIcons />
      </div>
    </motion.div>
  );
};

export default ContactInfo;