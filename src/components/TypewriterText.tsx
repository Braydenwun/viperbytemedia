import React from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = '' }) => {
  const characters = Array.from(text);
  
  return (
    <span className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.03,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default TypewriterText;