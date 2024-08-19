import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import GiftSuggestions from './components/GiftSuggestions';
import ContactForm from './components/ContactForm';
import Celebration from './components/Celebration';
import Wishes from './components/Wishes';

const App = () => {
  const [celebration, setCelebration] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const handleCountdownComplete = () => {
    setCelebration(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Birthday</Link></li>
            <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Memories</Link></li>
            <li><Link to="/gifts" onClick={() => setIsMenuOpen(false)}>Surprise Gift</Link></li>
            <li><Link to="/wishes" onClick={() => setIsMenuOpen(false)}>Wishes</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Wish Me</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Main page with Countdown and Celebration */}
          <Route 
            path="/" 
            element={
              <>
                <section className="section countdown-section">
                  <Countdown onCountdownComplete={handleCountdownComplete} />
                </section>
                {celebration && (
                  <section className="section celebration-section">
                    <Celebration />
                  </section>
                )}
              </>
            } 
          />

          {/* Photo Gallery Page */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Gift Suggestions Page */}
          <Route path="/gifts" element={<GiftSuggestions />} />

          {/* Contact Form Page */}
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/wishes" element={<Wishes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
