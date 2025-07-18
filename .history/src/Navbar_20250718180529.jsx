import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaBullhorn, FaEnvelope } from 'react-icons/fa';

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
            <Link to="/" className="flex items-center gap-1 hover:text-amber-400 transition">
              <FaHome />  Home
            </Link>
            <Link to="/about" className="flex items-center gap-1 hover:text-amber-400 transition">
              <FaInfoCircle /> About
            </Link>
            <Link to="/projects" className="flex items-center gap-1 hover:text-amber-400 transition">
              <FaProjectDiagram /> Projects
            </Link>
            <Link to="/manifesto" className="flex items-center gap-1 hover:text-amber-400 transition">
              <FaBullhorn /> Manifesto
            </Link>
            <Link to="/contact" className="flex items-center gap-1 hover:text-amber-400 transition">
              <FaEnvelope /> Contact
            </Link>
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

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-3/4 h-full bg-blue-900 px-6 py-8 space-y-6 shadow-lg z-40">
          <Link to="/" className="flex items-center gap-2 text-lg hover:text-amber-400" onClick={() => setIsOpen(false)}>
            <FaHome /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-2 text-lg hover:text-amber-400" onClick={() => setIsOpen(false)}>
            <FaInfoCircle /> About
          </Link>
          <Link to="/projects" className="flex items-center gap-2 text-lg hover:text-amber-400" onClick={() => setIsOpen(false)}>
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="/manifesto" className="flex items-center gap-2 text-lg hover:text-amber-400" onClick={() => setIsOpen(false)}>
            <FaBullhorn /> Manifesto
          </Link>
          <Link to="/contact" className="flex items-center gap-2 text-lg hover:text-amber-400" onClick={() => setIsOpen(false)}>
            <FaEnvelope /> Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
