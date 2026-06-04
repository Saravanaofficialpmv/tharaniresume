import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrbBackground from './components/OrbBackground';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Global interactive WebGL shader background */}
        <OrbBackground />
        
        {/* Navigation pill bar */}
        <Navbar />

        {/* Dynamic page routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectdetail/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
        </Routes>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
