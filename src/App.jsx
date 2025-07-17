import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Homepage from './Home';
import About from './About';
import Projects from './Projects';
import Manifesto from './Manifesto';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '6rem 2rem 2rem 2rem', fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>MCA Portfolio App</h1>
        <div style={{ fontSize: '1.1rem', color: '#444', marginTop: '2rem' }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
