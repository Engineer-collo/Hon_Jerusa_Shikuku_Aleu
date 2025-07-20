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
      <div className="min-h-screen w-full overflow-x-hidden bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
