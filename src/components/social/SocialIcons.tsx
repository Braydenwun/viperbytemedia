import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const XIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/viperbyte.media"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </a>
      <a
        href="https://x.com/viperbytemedia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="X (formerly Twitter)"
      >
        <XIcon />
      </a>
      <a
        href="https://www.instagram.com/viperbyte_media/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/brayden-wunsch-29955b330/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;