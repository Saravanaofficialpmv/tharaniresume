import React, { useState } from 'react';
import { Cpu, Award, Zap, BookOpen, Layers, Target, CheckCircle, FileText, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TiltedCard from '../components/TiltedCard';

export default function About() {
  const navigate = useNavigate();
  const avatarUrl = "/tharani_portrait_bw.jpg";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const handleBackdropClick = (e) => {
    if (e.target.className === 'resume-modal-overlay') {
      setIsModalOpen(false);
    }
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setActiveSlide(prev => (prev === 1 ? 2 : 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setActiveSlide(prev => (prev === 2 ? 1 : 2));
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL"]
    },
    {
      title: "AI / ML Technologies",
      skills: ["Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Data Analytics"]
    },
    {
      title: "Database Management",
      skills: ["SQL", "Database Design", "Query Optimisation", "SQLite / PostgreSQL"]
    },
    {
      title: "Development Tools & Workflows",
      skills: ["Git", "VS Code", "PyCharm", "Eclipse", "Jupyter Notebooks", "OOP", "SDLC"]
    }
  ];

  const certifications = [
    {
      title: "Programming in Java",
      org: "NPTEL / SWAYAM",
      desc: "National Programme on Technology Enhanced Learning course completing advanced algorithms and object-oriented programming frameworks."
    },
    {
      title: "Cloud Computing & Distributed Systems",
      org: "NPTEL / SWAYAM",
      desc: "Democratized course completing server virtualization, load-balancing structures, and high-availability distributed grids."
    },
    {
      title: "Internet of Things (IoT) Fundamentals",
      org: "Cisco Networking Academy",
      desc: "Foundational assessment demonstrating command of sensor networking, dynamic microcontrollers, and physical integration protocols."
    }
  ];

  const strengths = [
    {
      title: "Object-Oriented Programming (OOP)",
      desc: "Strong foundational architecture using modular encapsulation, inheritance, interfaces, and software design principles.",
      icon: <Layers size={20} />
    },
    {
      title: "Cloud & Distributed Systems",
      desc: "Working familiarity with dynamic virtual servers, cluster synchronization, and scalable cloud compute frameworks.",
      icon: <Cpu size={20} />
    },
    {
      title: "IoT & Connected Networks",
      desc: "Analytical understanding of connected sensor hardware, embedded integrations, and sensor-to-cloud streams.",
      icon: <Zap size={20} />
    },
    {
      title: "Data Analytics & Visualisation",
      desc: "Highly proficient in pre-processing raw files, modeling feature structures, and compiling clear graphical insights.",
      icon: <BookOpen size={20} />
    },
    {
      title: "Analytical Problem Solving",
      desc: "Highly structured engineering logic, quick literature assimilation, and strong collaborative communication.",
      icon: <Target size={20} />
    },
    {
      title: "Self-Motivated & Driven",
      desc: "Constantly researching emerging techniques in deep neural networks and advanced database clustering pipelines.",
      icon: <CheckCircle size={20} />
    }
  ];

  return (
    <main className="page-fade-in about-page-container" style={{ padding: '8rem 0 0' }}>
      
      {/* Centered Profile Hero Section */}
      <section className="about-centered-hero">
        <div className="about-avatar-wrapper">
          <img src={avatarUrl} alt="Tharani Kumar K's portrait" className="about-avatar-img" />
        </div>
        
        <h1 className="about-hero-name">Tharani Kumar K</h1>
        <p className="about-hero-subtitle">Software Developer, AI Engineer & Data Scientist</p>
        
        <div className="about-hero-pills">
          <div className="about-pill"><span className="pill-emoji">💻</span> Software Development</div>
          <div className="about-pill"><span className="pill-emoji">🤖</span> AI Engineering</div>
          <div className="about-pill"><span className="pill-emoji">📊</span> Data Science</div>
          <div className="about-pill"><span className="pill-emoji">🗄️</span> Database Design</div>
          <div className="about-pill"><span className="pill-emoji">🧠</span> Deep Learning</div>
        </div>

        <div className="about-bio-container">
          <p>
            I am a motivated Computer Science student specializing in Artificial Intelligence and Data Science, currently pursuing my degree with a deep passion for modern AI pipelines. With a strong engineering focus in Java, Python, and neural architectures, I build intelligent data solutions that merge modular programming logic with deep analytical insights.
          </p>
          <p>
            My engineering philosophy centers around building robust database systems and secure data interfaces while exploring the cutting edges of machine learning and natural language processing. I actively seek out challenging, high-performance environments where I can apply my programming skills, database optimization background, and cloud foundations to address real-world data issues.
          </p>
        </div>

        {/* Upgraded 2-Column Academic & Education Details Section */}
        <div className="academic-showcase-container">
          
          {/* Left Column: Tilted Graduation Card */}
          <div className="academic-card-left">
            <TiltedCard
              imageSrc="/tharani_academic.jpg"
              altText="Tharani Kumar K's Academic Portrait"
              captionText="V.S.B. Engineering College"
              containerHeight="500px"
              containerWidth="100%"
              imageHeight="460px"
              imageWidth="360px"
              rotateAmplitude={12}
              scaleOnHover={1.03}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="academic-tilted-overlay">
                  <div className="academic-logo-overlay">
                    <img src="/vsb_logo.jpg" alt="V.S.B. Engineering College Logo" />
                  </div>
                </div>
              }
            />
          </div>

          {/* Right Column: College Details, Stats & Bullet accomplishments */}
          <div className="academic-info-right">
            <div className="academic-cap-icon">🎓</div>
            <h2 className="academic-college-title">V.S.B. Engineering College</h2>
            <p className="academic-degree-subtitle">Bachelor of Technology in Artificial Intelligence & Data Science</p>
            <p className="academic-years-label">2023 – 2027</p>

            <div className="academic-stats-dashboard">
              <div className="academic-stat-item">
                <span className="academic-stat-lbl">Overall CGPA</span>
                <span className="academic-stat-num">8.1</span>
              </div>
              <div className="academic-stat-item">
                <span className="academic-stat-lbl">Internships completed</span>
                <span className="academic-stat-num">03+</span>
              </div>
            </div>

            <div className="academic-highlights-list">
              <div className="academic-highlight-row">
                <span className="highlight-arrow">→</span>
                <p>Completed elite professional certifications from <strong>NPTEL &amp; Cisco</strong>.</p>
              </div>
              <div className="academic-highlight-row">
                <span className="highlight-arrow">→</span>
                <p>Designed and optimized the <strong>MedVault</strong> healthcare database.</p>
              </div>
              <div className="academic-highlight-row">
                <span className="highlight-arrow">→</span>
                <p>Developed <strong>AI Research Summarizer</strong> using pre-trained NLP models.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Academic Timeline / Education */}
      <section>
        <div className="about-section-header">
          <span>Academic Background</span>
          <h3>📚 Education & Training</h3>
        </div>
        
        <div className="about-timeline">
          <div className="about-timeline-item">
            <div className="about-timeline-dot" />
            <div className="about-timeline-card">
              <div className="about-timeline-meta">
                <span>V.S.B Engineering College, Karur</span>
                <span>2023 — 2027 (Currently Pursuing)</span>
              </div>
              <h4>Bachelor of Technology (B.Tech) — Artificial Intelligence & Data Science</h4>
              <p>
                Maintaining high academic dedication and focusing on foundational data science subjects, system administration protocols, and statistical analysis pipelines.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Relevant Coursework:</span>
                <div className="about-timeline-coursework">
                  {["Machine Learning & Deep Learning", "Data Structures & Algorithms", "Database Management Systems (DBMS)", "Statistical Analysis & Data Visualisation"].map((course, idx) => (
                    <span key={idx} className="coursework-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Matrix */}
      <section>
        <div className="about-section-header">
          <span>Capabilities</span>
          <h3>🧠 Technical Skills Matrix</h3>
        </div>
        
        <div className="about-skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="about-skills-card">
              <h4>{category.title}</h4>
              <div className="about-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Dashboard */}
      <section>
        <div className="about-section-header">
          <span>Verifiable Credentials</span>
          <h3>🤖 Certifications</h3>
        </div>
        
        <div className="about-certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="about-cert-card">
              <span className="about-cert-org">{cert.org}</span>
              <h4>{cert.title}</h4>
              <p className="about-cert-desc">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Showcase Section (Grab my resume!) */}
      <section style={{ marginBottom: '5rem', marginTop: '1rem' }}>
        <div className="about-resume-showcase-container">
          
          {/* Left Side: Paper Letter Miniature Resume Replica */}
          <div className="resume-paper-replica" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
            <div className="resume-replica-header">
              <h4>THARANI KUMAR K</h4>
              <div className="resume-replica-contacts">
                <span>linkedin.com/in/tharani-kumar-8044042a5</span>
                <span style={{ margin: '0 6px' }}>|</span>
                <span>github.com/tharanikumark</span>
                <br />
                <span>tharanikumar405@email.com</span>
                <span style={{ margin: '0 6px' }}>|</span>
                <span>+91 82205 37987 / +91 95853 77510</span>
              </div>
            </div>

            <div className="resume-replica-section">
              <h5>Education</h5>
              <div className="resume-replica-entry">
                <div className="resume-replica-meta">
                  <h6>B.Tech (AI & Data Science)</h6>
                  <span>2023 – 2027</span>
                </div>
                <p>V.S.B. Engineering College, Karur | CGPA: 8.1</p>
              </div>
            </div>

            <div className="resume-replica-section">
              <h5>Experience & Internships</h5>
              <div className="resume-replica-entry">
                <div className="resume-replica-meta">
                  <h6>Software Developer & AI Intern</h6>
                  <span>Completed 3 Internships</span>
                </div>
                <p>Designed encrypted databases, fine-tuned transformer models, and compiled dynamic data visualization panels.</p>
              </div>
            </div>

            <div className="resume-replica-section">
              <h5>Achievements & Certifications</h5>
              <ul style={{ paddingLeft: '1rem', margin: 0, listStyleType: 'disc', fontSize: '0.76rem', color: '#7e7e86', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li>Programming in Java — SWAYAM/NPTEL Elite Grade Certification</li>
                <li>Cloud Computing & Distributed Systems — SWAYAM/NPTEL Elite Certificate</li>
                <li>Internet of Things (IoT) Fundamentals — Cisco Academy</li>
              </ul>
            </div>

            <div className="resume-replica-section" style={{ marginBottom: 0 }}>
              <h5>Core Competencies</h5>
              <div className="resume-replica-skills-list">
                {["Python", "Java", "SQL", "Machine Learning", "NLP", "Git"].map((skill, sIdx) => (
                  <span key={sIdx} className="resume-replica-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Copy, Icon, and CTAs */}
          <div className="resume-showcase-info">
            <FileText size={48} style={{ color: 'var(--accent-color)', opacity: 0.85 }} />
            <h3>Grab my resume!</h3>
            <p>
              With deep analytical skills in neural architectures and a passion for building robust data pipelines and software frameworks, I create intelligent software solutions tailored exactly to your goals.
            </p>

            <div className="resume-btn-group" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }} 
                className="resume-explore-btn"
              >
                Explore Projects <span style={{ marginLeft: '4px' }}>↗</span>
              </button>

              <a 
                href="https://docs.google.com/document/d/1tydDfRHvTFtD5ZaAWIruLuJvB4k3PQak/edit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="explore-btn creative-cta"
              >
                Download Me
                <span className="cta-arrow-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </section>

        {/* Interactive Fullscreen Resume Modal Overlay with Arrow Slides */}
      {isModalOpen && (
        <div className="resume-modal-overlay" onClick={handleBackdropClick}>
          
          <button className="resume-modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close Preview">
            <X size={24} />
          </button>

          <div className="resume-modal-navigation-wrapper">
            
            {/* Left Nav Arrow */}
            <button className="resume-modal-nav-arrow left" onClick={prevSlide} aria-label="Previous Page">
              <ChevronLeft size={28} />
            </button>

            {/* Resume Sheet Container */}
            <div className="resume-modal-sheet">
              
              {activeSlide === 1 ? (
                /* Page 1: Core Professional & Technical Resume */
                <div className="resume-modal-sheet-inner page-fade-in">
                  <div className="resume-replica-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#0c0c11', marginBottom: '0.5rem' }}>THARANI KUMAR K</h2>
                    <div className="resume-replica-contacts" style={{ fontSize: '0.82rem', color: '#7e7e86' }}>
                      <span>linkedin.com/in/tharani-kumar-8044042a5</span>
                      <span style={{ margin: '0 6px' }}>|</span>
                      <span>github.com/tharanikumark</span>
                      <span style={{ margin: '0 6px' }}>|</span>
                      <span>tharanikumar405@email.com</span>
                      <br />
                      <span>+91 82205 37987 / +91 95853 77510</span>
                    </div>
                  </div>

                  <div className="resume-modal-section">
                    <h4 className="resume-modal-section-title">Education</h4>
                    <div className="resume-replica-entry" style={{ gap: '0.25rem' }}>
                      <div className="resume-replica-meta" style={{ fontSize: '0.9rem' }}>
                        <h6 style={{ fontSize: '0.95rem', fontWeight: 750, color: '#0c0c11' }}>Bachelor of Technology (B.Tech) — AI & Data Science</h6>
                        <span>2023 – 2027</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#7e7e86' }}>V.S.B. Engineering College, Karur | Overall CGPA: 8.1</p>
                      <p style={{ fontSize: '0.8rem', color: '#909099' }}>Maintaining high academic dedication and studying advanced machine learning systems, database architectures, and data structures.</p>
                    </div>
                  </div>

                  <div className="resume-modal-section">
                    <h4 className="resume-modal-section-title">Experience & Internships</h4>
                    <div className="resume-replica-entry" style={{ gap: '0.25rem' }}>
                      <div className="resume-replica-meta" style={{ fontSize: '0.9rem' }}>
                        <h6 style={{ fontSize: '0.95rem', fontWeight: 750, color: '#0c0c11' }}>Software Developer & AI Intern</h6>
                        <span>Completed 3 Internships</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: '#909099' }}>Hands-on development of robust database queries, secure encryption interfaces, pre-trained transformer summarizer NLP models, and real-time sensor streams.</p>
                    </div>
                  </div>

                  <div className="resume-modal-section">
                    <h4 className="resume-modal-section-title">Key Projects</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div className="resume-replica-entry" style={{ gap: '0.15rem' }}>
                        <h6 style={{ fontSize: '0.9rem', fontWeight: 750, color: '#0c0c11' }}>MedVault – Healthcare Data Management</h6>
                        <p style={{ fontSize: '0.8rem', color: '#909099' }}>Designed a secure, encrypted healthcare database for providers to store history, optimize complex queries, and model patient trend records.</p>
                      </div>
                      <div className="resume-replica-entry" style={{ gap: '0.15rem' }}>
                        <h6 style={{ fontSize: '0.9rem', fontWeight: 750, color: '#0c0c11' }}>AI Research Summarizer</h6>
                        <p style={{ fontSize: '0.8rem', color: '#909099' }}>An intelligent natural language processing tool employing pre-trained transformer pipelines to automate literature analysis and output clear, condensed summaries.</p>
                      </div>
                    </div>
                  </div>

                  <div className="resume-modal-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <h4 className="resume-modal-section-title">Technical Expertise</h4>
                    <div className="resume-replica-skills-list" style={{ gap: '0.4rem', marginTop: '0.4rem' }}>
                      {["Python", "Java", "SQL", "Machine Learning", "Deep Learning", "NLP", "Data Analytics", "Database Design", "Git", "VS Code", "PostgreSQL"].map((skill, sIdx) => (
                        <span key={sIdx} className="resume-replica-skill-tag" style={{ fontSize: '0.75rem', padding: '3px 10px' }}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Page 2: Certifications, Coursework & Academic Achievements */
                <div className="resume-modal-sheet-inner page-fade-in">
                  <div className="resume-replica-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#0c0c11', marginBottom: '0.5rem' }}>THARANI KUMAR K</h2>
                    <p style={{ fontSize: '0.9rem', color: '#7e7e86', fontWeight: 600 }}>Certifications Dashboard & Supplementary Credentials</p>
                  </div>

                  <div className="resume-modal-section">
                    <h4 className="resume-modal-section-title">Verifiable Certifications</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div className="resume-replica-entry">
                        <div className="resume-replica-meta">
                          <h6 style={{ fontSize: '0.9rem', fontWeight: 750, color: '#0c0c11' }}>Programming in Java (Elite Grade)</h6>
                          <span>NPTEL / SWAYAM</span>
                        </div>
                        <p style={{ fontSize: '0.78rem', color: '#909099', marginTop: '0.15rem' }}>National Programme on Technology Enhanced Learning certification showing high proficiency in advanced OOP principles, concurrency models, and standard package structures.</p>
                      </div>
                      <div className="resume-replica-entry">
                        <div className="resume-replica-meta">
                          <h6 style={{ fontSize: '0.9rem', fontWeight: 750, color: '#0c0c11' }}>Cloud Computing & Distributed Systems</h6>
                          <span>NPTEL / SWAYAM</span>
                        </div>
                        <p style={{ fontSize: '0.78rem', color: '#909099', marginTop: '0.15rem' }}>Rigorous SWAYAM distributed networks assessment completing server clusters, load balancing algorithms, and cloud storage grids.</p>
                      </div>
                      <div className="resume-replica-entry">
                        <div className="resume-replica-meta">
                          <h6 style={{ fontSize: '0.9rem', fontWeight: 750, color: '#0c0c11' }}>Internet of Things (IoT) Fundamentals</h6>
                          <span>Cisco Networking Academy</span>
                        </div>
                        <p style={{ fontSize: '0.78rem', color: '#909099', marginTop: '0.15rem' }}>Hands-on physical integration credentials validating microcontroller sensor programming, edge calculations, and secure dynamic device configurations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="resume-modal-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                    <h4 className="resume-modal-section-title">Additional Core Strengths</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 1.5rem', marginTop: '0.4rem' }}>
                      <div className="resume-replica-entry">
                        <h6 style={{ fontSize: '0.85rem', fontWeight: 750, color: '#0c0c11' }}>Object-Oriented Programming (OOP)</h6>
                        <p style={{ fontSize: '0.75rem', color: '#909099' }}>Strong architectural logic using modular encapsulation, inheritance, interface structures, and solid patterns.</p>
                      </div>
                      <div className="resume-replica-entry">
                        <h6 style={{ fontSize: '0.85rem', fontWeight: 750, color: '#0c0c11' }}>Cloud & Distributed systems</h6>
                        <p style={{ fontSize: '0.75rem', color: '#909099' }}>Familiarity with distributed clusters, load-balancers, high-availability grids, and serverless computing structures.</p>
                      </div>
                      <div className="resume-replica-entry">
                        <h6 style={{ fontSize: '0.85rem', fontWeight: 750, color: '#0c0c11' }}>Data Analytics & Visualization</h6>
                        <p style={{ fontSize: '0.75rem', color: '#909099' }}>Expert at cleaning raw files, compiling features, building linear models, and plotting clean dashboards.</p>
                      </div>
                      <div className="resume-replica-entry">
                        <h6 style={{ fontSize: '0.85rem', fontWeight: 750, color: '#0c0c11' }}>Self-Motivated Researcher</h6>
                        <p style={{ fontSize: '0.75rem', color: '#909099' }}>Eagerly assimilating literature in neural processing models, database optimizations, and edge networks.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Slide Counter Footer */}
              <div className="resume-modal-sheet-footer">
                Page {activeSlide} of 2
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button className="resume-modal-nav-arrow right" onClick={nextSlide} aria-label="Next Page">
              <ChevronRight size={28} />
            </button>

          </div>
        </div>
      )}

    </main>
  );
}
