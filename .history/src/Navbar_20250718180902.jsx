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

          {/* Desktop Nav with icons on top */}
          <div className="hidden md:flex gap-8 items-center text-sm text-center">
            <Link to="/" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaHome className="text-xl" />
              Home
            </Link>
            <Link to="/about" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaInfoCircle className="text-xl" />
              About
            </Link>
            <Link to="/projects" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaProjectDiagram className="text-xl" />
              Projects
            </Link>
            <Link to="/manifesto" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaBullhorn className="text-xl" />
              Manifesto
            </Link>
            <Link to="/contact" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaEnvelope className="text-xl" />
              Contact
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

      {/* Mobile Nav with inline icons */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-900">
          <Link to="/" className="flex items-center gap-2 hover:text-amber-400">
            <FaHome /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-amber-400">
            <FaInfoCircle /> About
          </Link>
          <Link to="/projects" className="flex items-center gap-2 hover:text-amber-400">
            <FaProjectDiagram /> Projects
          </Link>
          <Link to="/manifesto" className="flex items-center gap-2 hover:text-amber-400">
            <FaBullhorn /> Manifesto
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-amber-400">
            <FaEnvelope /> Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
