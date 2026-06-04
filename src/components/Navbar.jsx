import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowDown, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <button 
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="brand-button"
          style={{ display: scrolled ? 'none' : 'block' }}
        >
          <h1>Tharani Kumar K</h1>
        </button>

        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => { navigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className={`nav-btn ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => { navigate('/works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className={`nav-btn ${location.pathname === '/works' || location.pathname.startsWith('/projectdetail') ? 'active' : ''}`}
          >
            Works
          </button>
          <button 
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className={`nav-btn ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </button>
          
          {/* Floating circular Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="nav-btn theme-toggle" 
            aria-label="Toggle Theme"
            style={{ 
              padding: '8px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginLeft: '4px',
              width: '34px',
              height: '34px'
            }}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </nav>

        <div className="nav-right-group" style={{ display: scrolled ? 'none' : 'flex' }}>
          <button className="lang-btn" aria-label="Language Selector">
            <span style={{ marginRight: '6px', fontSize: '1rem', verticalAlign: 'middle' }}>🌎</span> English
          </button>
          <a 
            href="https://docs.google.com/document/d/1tydDfRHvTFtD5ZaAWIruLuJvB4k3PQak/edit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="study-btn"
          >
            Resume <ArrowDown size={14} style={{ display: 'inline', marginLeft: '4px', verticalAlign: 'text-bottom' }} />
          </a>
        </div>
      </header>

      {/* Floating Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav-container">
        <nav className="mobile-bottom-nav-capsule">
          {[
            { id: 'home', label: 'Home', emoji: '🏠' },
            { id: 'about', label: 'About', emoji: '👤' },
            { id: 'works', label: 'Works', emoji: '🎨' },
            { id: 'contact', label: 'Contact', emoji: '💬' }
          ].map((item) => {
            let active = false;
            if (item.id === 'home') active = location.pathname === '/';
            else if (item.id === 'about') active = location.pathname === '/about';
            else if (item.id === 'works') active = location.pathname === '/works' || location.pathname.startsWith('/projectdetail');
            else if (item.id === 'contact') active = location.pathname === '/contact';
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'home') {
                    navigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.id === 'about') {
                    navigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.id === 'contact') {
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (item.id === 'works') {
                    navigate('/works');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    handleNavClick(item.id);
                  }
                }}
                className={`mobile-nav-btn ${active ? 'active' : ''}`}
              >
                <span className="mobile-nav-emoji">{item.emoji}</span>
                {active && <span className="mobile-nav-text">{item.label}</span>}
              </button>
            );
          })}
          
          {/* Circular Theme Toggle inside mobile capsule */}
          <button 
            onClick={toggleTheme} 
            className="mobile-nav-btn theme-toggle" 
            aria-label="Toggle Theme"
            style={{ 
              padding: '6px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '32px', 
              height: '32px',
              marginLeft: '4px'
            }}
          >
            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
          </button>
        </nav>
      </div>
    </>
  );
}
