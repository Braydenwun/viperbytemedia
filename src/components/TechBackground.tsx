import React from 'react';
import { motion } from 'framer-motion';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Animated Circles */}
      <motion.div
        className="absolute -left-20 -top-20 w-[40rem] h-[40rem] bg-emerald-500/30 rounded-full blur-[128px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute -right-20 -bottom-20 w-[40rem] h-[40rem] bg-emerald-700/20 rounded-full blur-[128px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default TechBackground;