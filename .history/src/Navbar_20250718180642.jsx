import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaClipboardList, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link to="/" className="hover:underline">Hon. Jerusa Shikuku Aleu</Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaHome className="text-xl" />
              <span className="text-sm">Home</span>
            </Link>
            <Link to="/about" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaUser className="text-xl" />
              <span className="text-sm">About</span>
            </Link>
            <Link to="/projects" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaProjectDiagram className="text-xl" />
              <span className="text-sm">Projects</span>
            </Link>
            <Link to="/manifesto" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaClipboardList className="text-xl" />
              <span className="text-sm">Manifesto</span>
            </Link>
            <Link to="/contact" className="flex flex-col items-center hover:text-amber-400 transition">
              <FaEnvelope className="text-xl" />
              <span className="text-sm">Contact</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
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
        <div className="md:hidden px-4 pb-4 pt-2 bg-blue-900 flex flex-col gap-4 text-center h-[100vh] w-3/4">
          <Link to="/" className="flex flex-col items-center hover:text-amber-400">
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center hover:text-amber-400">
            <FaUser className="text-xl" />
            <span>About</span>
          </Link>
          <Link to="/projects" className="flex flex-col items-center hover:text-amber-400">
            <FaProjectDiagram className="text-xl" />
            <span>Projects</span>
          </Link>
          <Link to="/manifesto" className="flex flex-col items-center hover:text-amber-400">
            <FaClipboardList className="text-xl" />
            <span>Manifesto</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center hover:text-amber-400">
            <FaEnvelope className="text-xl" />
            <span>Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
