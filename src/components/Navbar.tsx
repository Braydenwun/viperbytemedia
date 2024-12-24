import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLink from './navigation/NavLink';
import NavButton from './navigation/NavButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavButton to="/contact" primary>
                Contact
              </NavButton>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-emerald-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <NavLink to="/" className="block px-3 py-2">Home</NavLink>
            <NavLink to="/services" className="block px-3 py-2">Services</NavLink>
            <NavLink to="/about" className="block px-3 py-2">About Us</NavLink>
            <NavButton to="/contact" primary>
              Contact
            </NavButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;