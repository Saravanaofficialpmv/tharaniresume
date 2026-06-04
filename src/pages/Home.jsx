import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Zap, Cpu, Sparkles, Smile, Star, Globe2, Compass, Play, ExternalLink } from 'lucide-react';
import ColorBends from '../components/ColorBends';

export default function Home() {
  const navigate = useNavigate();
  const aboutTextRef = useRef(null);
  const [highlightedWords, setHighlightedWords] = useState([]);
  
  // Custom CountUp hook simulation
  const [expCount, setExpCount] = useState(0);
  const [projCount, setProjCount] = useState(0);
  const [hasStartedCount, setHasStartedCount] = useState(false);

  const aboutText = "I'm Tharani Kumar K, a motivated Software Developer, AI Engineer, and Data Scientist specializing in Artificial Intelligence and Data Science. I have hands-on experience building innovative solutions through machine learning, data analytics, and software systems. Eager to leverage strong programming and AI foundations in a dynamic, technology-driven environment!";
  const words = aboutText.split(" ");

  // Scroll text highlighting animation
  useEffect(() => {
    const handleScroll = () => {
      if (!aboutTextRef.current) return;
      const rect = aboutTextRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.65;
      
      // Calculate scroll progress through the container
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const scrolledPast = triggerPoint - containerTop;
      
      if (scrolledPast > 0) {
        setHasStartedCount(true);
        const progress = Math.min(1, scrolledPast / containerHeight);
        const wordsToHighlight = Math.floor(progress * words.length);
        setHighlightedWords(Array.from({ length: wordsToHighlight }, (_, i) => i));
      } else {
        setHighlightedWords([]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  // Numerical CountUp Animation trigger
  useEffect(() => {
    if (!hasStartedCount) return;

    let expTimer = setInterval(() => {
      setExpCount(prev => {
        if (prev >= 3) {
          clearInterval(expTimer);
          return 3;
        }
        return prev + 1;
      });
    }, 200);

    let projTimer = setInterval(() => {
      setProjCount(prev => {
        if (prev >= 10) {
          clearInterval(projTimer);
          return 10;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(expTimer);
      clearInterval(projTimer);
    };
  }, [hasStartedCount]);

  const technologies = [
    "Python", "Java", "SQL", "Machine Learning", "Deep Learning", "NLP", 
    "Data Analytics", "Database Design", "Git", "VS Code", "PyCharm", "Jupyter"
  ];

  const projects = [
    {
      id: "medvault",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
      title: "MedVault – Healthcare Data Management",
      para: "A secure, encrypted database management solution tailored for healthcare providers to store records and analyze patient history trends.",
      role: "Database & Software Dev",
      tech: "Python, SQL, Data Analytics"
    },
    {
      id: "summarizer",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      title: "AI Research Summarizer",
      para: "An intelligent Natural Language Processing tool built with pre-trained transformer models to automate literature reviews and summarize PDFs.",
      role: "AI / NLP Engineer",
      tech: "Python, NLP, Machine Learning"
    }
  ];

  return (
    <main className="page-fade-in" style={{ padding: '8rem 0 0' }}>
      
      {/* Immersive Full Screen Hero Section */}
      <section className="hero-section">
        {/* Background ColorBends Shader spanning full viewport */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.9 }}>
          <ColorBends
            colors={["#6366f1", "#8a5cff", "#00ffd1"]}
            rotation={90}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            noise={0.15}
            parallax={0.5}
            iterations={1}
            intensity={1.5}
            bandWidth={6}
            transparent
            autoRotate={0}
            color="#A855F7"
          />
        </div>

        {/* Hero Content floating dynamically over the canvas */}
        <div className="hero-content-container">
          <div 
            className="hero-badge" 
            onClick={() => {
              navigate('/about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="hero-badge-emoji">🍕</span>
            <span className="hero-badge-arrow left-arrow">→</span>
            <img 
              src="/tharani_portrait.jpg" 
              alt="Tharani Kumar K" 
              className="hero-badge-avatar"
            />
            <span className="hero-badge-text">
              Tharani Kumar K
            </span>
            <span className="hero-badge-arrow right-arrow">→</span>
            <span className="hero-badge-emoji">🔥</span>
          </div>
          
          <h1 className="hero-title">
            Engineering Intelligent Software, <br className="hero-br" />
            AI Models, and Data Systems!
          </h1>
          
          <p className="hero-description">
            With strong foundations in Machine Learning, Deep Learning, and Database Management, I build secure, high-performance software and intelligent AI solutions.
          </p>

          <div>
            <a 
              href="https://docs.google.com/document/d/1tydDfRHvTFtD5ZaAWIruLuJvB4k3PQak/edit" 
              target="_blank"
              rel="noopener noreferrer" 
              className="explore-btn creative-cta"
            >
              Download me
              <span className="cta-arrow-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </a>
            <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.15rem', lineHeight: 1 }}>📄</span> Yes, that's my resume.
            </p>
          </div>
        </div>
      </section>

      {/* Infinite Skills Marquee */}
      <section className="marquee-container">
        <div className="marquee-row">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div key={idx} className="marquee-item">
              <Star size={14} fill="var(--accent-color)" color="var(--accent-color)" /> {tech}
            </div>
          ))}
        </div>
        <div className="marquee-row reverse">
          {["Creative Coding", "Responsive Web", "Interactive WebGL", "Pixel Perfection", "Clean Architectures", "Modern Design Systems", "High Performance"].map((tag, idx) => (
            <div key={idx} className="marquee-item">
              <Zap size={14} fill="var(--accent-color)" color="var(--accent-color)" /> {tag}
            </div>
          ))}
        </div>
      </section>

      {/* About Section with Scroll Highlight */}
      <section id="about" style={{ padding: '6rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="about-scroll-highlight" ref={aboutTextRef}>
          {words.map((word, idx) => (
            <span 
              key={idx} 
              className={`scroll-word ${highlightedWords.includes(idx) ? 'highlighted' : ''}`}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Upgraded 3-Column Accomplishments & Wall of Fame Section */}
        <div className="accomplishments-grid">
          
          {/* Column 1 */}
          <div className="accomplishments-col col-left">
            <span className="accomplishment-flag">🎓</span>
            <p className="accomplishment-desc">
              Attained Elite certifications in Java Programming & Cloud Computing from NPTEL representing V.S.B. Engineering College.
            </p>
            <div className="accomplishment-img-card">
              <img src="/tharani_suit.jpg" alt="Tharani Academic" className="accomplishment-img" />
              <div className="floating-logo figma-float">
                {/* Inline SVG for Figma */}
                <svg width="14" height="21" viewBox="0 0 30 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15C7.5 10.8579 10.8579 7.5 15 7.5C19.1421 7.5 22.5 10.8579 22.5 15C22.5 19.1421 19.1421 22.5 15 22.5C10.8579 22.5 7.5 19.1421 7.5 15Z" fill="#F24E1E"/>
                  <path d="M7.5 30C7.5 25.8579 10.8579 22.5 15 22.5H22.5V30C22.5 34.1421 19.1421 37.5 15 37.5C10.8579 37.5 7.5 34.1421 7.5 30Z" fill="#0ACF83"/>
                  <path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5V15H7.5C3.35786 15 0 11.6421 0 7.5Z" fill="#FF7262"/>
                  <path d="M0 22.5C0 18.3579 3.35786 15 7.5 15H15V22.5C15 26.6421 11.6421 30 7.5 30C3.35786 30 0 26.6421 0 22.5Z" fill="#1ABCFE"/>
                  <path d="M0 37.5C0 33.3579 3.35786 30 7.5 30C11.6421 30 15 33.3579 15 37.5C15 41.6421 11.6421 45 7.5 45C3.35786 45 0 41.6421 0 37.5Z" fill="#A259FF"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="accomplishments-col col-center">
            <div className="accomplishment-img-card has-star">
              <img src="/tharani_group.jpg" alt="Tharani and Team at VSW24" className="accomplishment-img" />
              <div className="star-sticker">⭐</div>
            </div>
            <p className="accomplishment-desc">
              Designed advanced machine learning models and database systems, securing top ranks in hackathons and coding challenges.
            </p>
            <span className="accomplishment-badge-emoji">🏆</span>
          </div>

          {/* Column 3 */}
          <div className="accomplishments-col col-right">
            <div className="wall-of-fame-badge">
              <span className="wof-badge-emoji">🥳</span>
              <span className="wof-badge-arrow">→</span>
              <span className="wof-badge-text">Wall of Fame</span>
              <span className="wof-badge-arrow">→</span>
              <span className="wof-badge-emoji">🎉</span>
            </div>

            <div className="multiplayer-stats-container">
              
              {/* Stat 1 */}
              <div className="multiplayer-stat-block stat-block-1">
                <div className="mp-stat-number">0{expCount}</div>
                <div className="mp-stat-label">Internships completed</div>
                
                {/* Floating cursor tag 1 */}
                <div className="cursor-tag tag-green">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-arrow">
                    <path d="M0 0V13L3.5 9.5H9L0 0Z" fill="#10B981" />
                  </svg>
                  <span>AI Engineering</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="multiplayer-stat-block stat-block-2">
                <div className="mp-stat-number">{projCount}+</div>
                <div className="mp-stat-label">ML & AI models built</div>

                {/* Floating cursor tag 2 */}
                <div className="cursor-tag tag-yellow">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-arrow">
                    <path d="M0 0V13L3.5 9.5H9L0 0Z" fill="#F59E0B" />
                  </svg>
                  <span>Machine Learning</span>
                </div>

                {/* Floating cursor tag 3 */}
                <div className="cursor-tag tag-pink">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-arrow">
                    <path d="M0 0V13L3.5 9.5H9L0 0Z" fill="#EC4899" />
                  </svg>
                  <span>Full Stack Dev</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Works / Project Showcase Grid */}
      <section id="works" style={{ padding: '6rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(12,12,17,0.02)', borderRadius: '60px' }}>
        <div className="showcase-badge">
          <span className="showcase-badge-emoji">🔮</span>
          <span className="showcase-badge-arrow left-arrow">→</span>
          <span className="showcase-badge-text">Project Showcase</span>
          <span className="showcase-badge-arrow right-arrow">→</span>
          <span className="showcase-badge-emoji">🥰</span>
        </div>

        <div className="works-grid">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card"
              onClick={() => {
                navigate(`/projectdetail/${project.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="project-card-media">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-card-image"
                />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--navbar-bg)', border: '1px solid var(--navbar-border)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>
                  {project.role}
                </div>
              </div>
              <div className="project-card-info">
                <h3>{project.title}</h3>
                <p>{project.para}</p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{project.tech}</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => { navigate('/works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="explore-btn"
          style={{ background: 'transparent', border: '1px solid var(--text-primary)', color: 'var(--text-primary)' }}
        >
          Explore All Projects <Smile size={16} />
        </button>
      </section>

    </main>
  );
}
