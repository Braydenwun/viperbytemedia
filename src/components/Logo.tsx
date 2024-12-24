import React from 'react';
import { Terminal } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <Terminal className="w-8 h-8 text-emerald-400" />
      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
        Viper Byte Media
      </span>
    </div>
  );
};

export default Logo;