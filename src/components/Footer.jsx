import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const email = "tharanikumar405@email.com";
  const whatsappNumber = "918220537987"; // V.S.B College AI/ML Student contact
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailClick = () => {
    const bodyText = encodeURIComponent("Hello Tharani Kumar,\n\nI visited your portfolio and would love to discuss a potential project/opportunity.");
    window.location.href = `mailto:${email}?subject=Collaboration%20Inquiry&body=${bodyText}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="contact-section-wrapper" id="contact">
      
      {/* Floating Tech Stack Icons */}
      <div className="floating-icon-card icon-figma" title="Figma">
        <svg width="20" height="30" viewBox="0 0 30 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 15C7.5 10.8579 10.8579 7.5 15 7.5C19.1421 7.5 22.5 10.8579 22.5 15C22.5 19.1421 19.1421 22.5 15 22.5C10.8579 22.5 7.5 19.1421 7.5 15Z" fill="#F24E1E"/>
          <path d="M7.5 30C7.5 25.8579 10.8579 22.5 15 22.5H22.5V30C22.5 34.1421 19.1421 37.5 15 37.5C10.8579 37.5 7.5 34.1421 7.5 30Z" fill="#0ACF83"/>
          <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5V15H7.5C3.35786 15 0 11.6421 0 7.5Z" fill="#FF7262"/>
          <path d="M0 22.5C0 18.3579 3.35786 15 7.5 15H15V22.5C15 26.6421 11.6421 30 7.5 30C3.35786 30 0 26.6421 0 22.5Z" fill="#1ABCFE"/>
          <path d="M0 37.5C0 33.3579 3.35786 30 7.5 30C11.6421 30 15 33.3579 15 37.5C15 41.6421 11.6421 45 7.5 45C3.35786 45 0 41.6421 0 37.5Z" fill="#A259FF"/>
        </svg>
      </div>

      <div className="floating-icon-card icon-react" title="React JS">
        <svg width="32" height="32" viewBox="-11.5 -10.23 23 20.47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      </div>

      <div className="floating-icon-card icon-python" title="Python">
        <svg width="30" height="30" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55 0C24.63 0 26.25 13.08 26.25 13.08L26.31 27H55.88V31.25H14.13C14.13 31.25 0 32.22 0 62.5C0 92.78 12.19 91.56 12.19 91.56H21.75V78.22C21.75 78.22 21.03 62.19 36.88 62.19H62.53C62.53 62.53 78.25 62.53 78.25 46.56V18.19C78.25 18.19 79.59 0 55 0ZM41.88 9.38C44.47 9.38 46.56 11.47 46.56 14.06C46.56 16.65 44.47 18.75 41.88 18.75C39.29 18.75 37.19 16.65 37.19 14.06C37.19 11.47 39.29 9.38 41.88 9.38Z" fill="#3776AB"/>
          <path d="M55 110C85.37 110 83.75 96.92 83.75 96.92L83.69 83H54.12V78.75H95.87C95.87 78.75 110 77.78 110 47.5C110 17.22 97.81 18.44 97.81 18.44H88.25V31.78C88.25 31.78 88.97 47.81 73.12 47.81H47.47C47.47 47.47 31.75 47.47 31.75 63.44V91.81C31.75 91.81 30.41 110 55 110ZM68.12 100.62C65.53 100.62 63.44 98.53 63.44 95.94C63.44 93.35 65.53 91.25 68.12 91.25C70.71 91.25 72.81 93.35 72.81 95.94C72.81 98.53 70.71 100.62 68.12 100.62Z" fill="#FFE873"/>
        </svg>
      </div>

      <div className="floating-icon-card icon-pytorch" title="PyTorch">
        <svg width="28" height="32" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M115.6 70.3c.7-4.3.7-9 .7-13.8C116.3 25.3 90.9 0 59.7 0c-3 0-5.8.2-8.5.7C76.4 13.9 94 37.9 94 66.2c0 14.8-4.8 28.5-12.8 39.7C104.9 104.8 118 89.2 118 70.3z" fill="#EE4C2C"/>
          <path d="M33.6 103.7c0-28.3 17.6-52.3 42.8-65.5C45.2 37.5 19.8 62.8 19.8 94c0 31.2 25.4 56.5 56.6 56.5 2.7 0 5.5-.2 8.1-.6C59.3 144.1 41.7 120.1 41.7 91.8c0-14.8 4.8-28.5 12.8-39.7C39.3 53.2 33.6 68.8 33.6 87.7c0 4.8.7 9.5 2.1 13.9-.7.7-1.4 1.4-2.1 2.1z" fill="#F15A24"/>
        </svg>
      </div>

      <div className="floating-icon-card icon-sql" title="SQL / Database">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      </div>

      <div className="floating-icon-card icon-git" title="Git / GitHub">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 15V9a4 4 0 0 0-4-4H9"></path>
          <line x1="6" y1="9" x2="6" y2="15"></line>
        </svg>
      </div>

      {/* Center Content */}
      <div className="contact-avatar-wrapper">
        <img 
          src="/tharani_portrait.jpg" 
          alt="Tharani Kumar K" 
          className="contact-avatar-img" 
        />
      </div>

      <h2 className="contact-heading">Are you looking for the perfect system?</h2>
      
      <p className="contact-description">
        Then you're in the right place. Let's create compelling digital experiences and AI solutions tailored specifically to your goals. Just reach out and let me know!
      </p>

      <div className="contact-btn-group-new">
        <button onClick={handleEmailClick} className="btn-email-me">
          Email me
        </button>
        <button onClick={handleWhatsAppClick} className="btn-whatsapp">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle" style={{ marginRight: '6px' }}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
          Chat on WhatsApp
        </button>
      </div>

      <div className="social-links-grid" style={{ marginTop: '5rem', width: '100%' }}>
        <a href="https://www.linkedin.com/in/tharani-kumar-8044042a5?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', margin: '0 12px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> LinkedIn
        </a>
        <a href="https://github.com/tharanikumark" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', margin: '0 12px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub
        </a>
      </div>

      <div className="main-copyright" style={{ marginTop: '2rem' }}>
        <span>2026 © Made with ❤️</span>
        <span className="copyright-divider" />
        <span>Tharani Kumar K</span>
      </div>

      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="scroll-top-btn" 
          aria-label="Scroll to Top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
        </button>
      )}

    </footer>
  );
}

