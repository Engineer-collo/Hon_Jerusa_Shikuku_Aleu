import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaBullhorn,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Navbar Header */}
      <div className="md:hidden p-4 flex justify-between items-center bg-blue-900 text-white">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-amber-400 transition">Hon. Jerusa Shikuku Aleu
          </Link>
        </h1>
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-3/4 bg-blue-800 text-white p-6 z-50 transition-all">
          <div className="flex flex-col space-y-6 text-lg">
            <Link to="/" onClick={toggleMenu} className="flex items-center gap-3">
              <FaHome /> Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="flex items-center gap-3">
              <FaInfoCircle /> About
            </Link>
            <Link to="/projects" onClick={toggleMenu} className="flex items-center gap-3">
              <FaProjectDiagram /> Projects
            </Link>
            <Link to="/manifesto" onClick={toggleMenu} className="flex items-center gap-3">
              <FaBullhorn /> Manifesto
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="flex items-center gap-3">
              <FaEnvelope /> Contact
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between bg-blue-900 text-white py-4 px-10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-amber-400 transition">Hon. Aleu</Link>
        </div>

        {/* Navigation */}
        <div className="flex gap-12">
          <Link to="/" className="flex flex-col items-center hover:text-amber-400 transition">
            <FaHome size={20} />
            <span className="mt-1 text-sm">Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center hover:text-amber-400 transition">
            <FaInfoCircle size={20} />
            <span className="mt-1 text-sm">About</span>
          </Link>
          <Link to="/projects" className="flex flex-col items-center hover:text-amber-400 transition">
            <FaProjectDiagram size={20} />
            <span className="mt-1 text-sm">Projects</span>
          </Link>
          <Link to="/manifesto" className="flex flex-col items-center hover:text-amber-400 transition">
            <FaBullhorn size={20} />
            <span className="mt-1 text-sm">Manifesto</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center hover:text-amber-400 transition">
            <FaEnvelope size={20} />
            <span className="mt-1 text-sm">Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
