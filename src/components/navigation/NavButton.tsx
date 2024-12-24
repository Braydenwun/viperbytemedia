import React from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
  primary?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ to, children, primary = false }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md transition-all ${
        primary
          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700'
          : 'text-white hover:text-emerald-400'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavButton;