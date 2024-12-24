import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-white hover:text-emerald-400 transition-colors relative ${className} ${
        isActive ? 'text-emerald-400' : ''
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400" />
      )}
    </Link>
  );
};

export default NavLink;