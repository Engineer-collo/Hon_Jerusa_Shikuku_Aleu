import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Name */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link to="/" className="hover:underline">Hon. Jerusa Shikuku Aleu</Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            <Link to="/about" className="hover:text-amber-400 transition">About</Link>
            <Link to="/projects" className="hover:text-amber-400 transition">Projects</Link>
            <Link to="/manifesto" className="hover:text-amber-400 transition">Manifesto</Link>
            <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-900">
          <Link to="/" className="block hover:text-amber-400">Home</Link>
          <Link to="/about" className="block hover:text-amber-400">About</Link>
<Link to="/projects" className="block hover:text-amber-400">Projects</Link>
          <Link to="/manifesto" className="block hover:text-amber-400">Manifesto</Link>
          <Link to="/contact" className="block hover:text-amber-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
