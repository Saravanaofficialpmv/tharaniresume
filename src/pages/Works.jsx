import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    id: "medvault",
    title: "MedVault – Healthcare Data Management",
    para: "A secure, encrypted database management solution tailored for healthcare providers to store records and analyze patient history trends.",
    category: "applications",
    tech: "Python, SQL, Data Analytics",
    themeColor: "#4f46e5", // Indigo background
    mockupType: "medvault"
  },
  {
    id: "summarizer",
    title: "AI Research Summarizer",
    para: "An intelligent Natural Language Processing tool built with pre-trained transformer models to automate literature reviews and summarize PDFs.",
    category: "applications",
    tech: "Python, NLP, Machine Learning",
    themeColor: "#db2777", // Pink background
    mockupType: "summarizer"
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis of Social Media Streams",
    para: "A real-time natural language processing pipeline built to ingest Twitter/X streams and perform sentiment classification on public discussions.",
    category: "seo",
    tech: "Python, NLP, Deep Learning",
    themeColor: "#059669", // Green background
    mockupType: "seo"
  },
  {
    id: "sales-forecasting",
    title: "Predictive Sales Forecasting System",
    para: "A business intelligence dashboard that integrates regression models to predict monthly product demand based on historical purchase data.",
    category: "dashboards",
    tech: "Python, SQL, Data Analytics",
    themeColor: "#2563eb", // Blue background
    mockupType: "insight"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website Design",
    para: "A premium, responsive developer portfolio showcasing projects, credentials, and achievements with modern glassmorphism design.",
    category: "websites",
    tech: "React, Tailwind, CSS",
    themeColor: "#ef4444", // Red background
    mockupType: "fundesigns"
  }
];

function ProjectMockup({ type, color }) {
  if (type === 'unnathi') {
    return (
      <div className="mock-browser" style={{ backgroundColor: color }}>
        <div className="mock-browser-bar">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <div className="mock-browser-url">unnathi.kerala.gov.in</div>
        </div>
        <div className="mock-browser-content unnathi-content">
          <div className="unnathi-header">
            <span className="unnathi-logo">ഉന്നതി</span>
            <div className="unnathi-nav-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="unnathi-hero">
            <div className="unnathi-hero-title">Empowering Kerala</div>
            <div className="unnathi-hero-layout">
              <div className="hero-box-main"></div>
              <div className="hero-box-side">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'opengrad') {
    return (
      <div className="mock-browser" style={{ backgroundColor: color }}>
        <div className="mock-browser-bar">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <div className="mock-browser-url">opengrad.org</div>
        </div>
        <div className="mock-browser-content opengrad-content">
          <div className="opengrad-header">
            <span className="opengrad-logo">OpenGrad</span>
            <span className="opengrad-btn">Portal</span>
          </div>
          <div className="opengrad-body">
            <div className="opengrad-desc-box">Education for All</div>
            <div className="opengrad-dashboard-grid">
              <div className="grid-card"></div>
              <div className="grid-card"></div>
              <div className="grid-card"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'fundesigns') {
    return (
      <div className="mock-browser" style={{ backgroundColor: color }}>
        <div className="mock-browser-bar">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <div className="mock-browser-url">fundesigns.studio</div>
        </div>
        <div className="mock-browser-content fundesigns-content">
          <div className="fundesigns-header">
            <span className="fun-logo">FUN DESIGNS</span>
          </div>
          <div className="fundesigns-hero">
            <div className="fun-phrase">We design,</div>
            <div className="fun-phrase-light">code & surf</div>
            <div className="fun-sub-mock">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'insight') {
    return (
      <div className="mock-browser" style={{ backgroundColor: color }}>
        <div className="mock-browser-bar">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <div className="mock-browser-url">analytics.insight.com</div>
        </div>
        <div className="mock-browser-content insight-content">
          <div className="insight-header">
            <span className="insight-logo">Insight Analytics</span>
          </div>
          <div className="insight-grid">
            <div className="insight-chart-main">
              <div className="chart-bar bar-1"></div>
              <div className="chart-bar bar-2"></div>
              <div className="chart-bar bar-3"></div>
              <div className="chart-bar bar-4"></div>
            </div>
            <div className="insight-stats">
              <div className="stat-row"></div>
              <div className="stat-row"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'seo') {
    return (
      <div className="mock-browser" style={{ backgroundColor: color }}>
        <div className="mock-browser-bar">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <div className="mock-browser-url">searchmax.io</div>
        </div>
        <div className="mock-browser-content seo-content">
          <div className="seo-header">
            <span>SEO Suite</span>
          </div>
          <div className="seo-body">
            <div className="seo-meter">
              <div className="meter-inner">98%</div>
            </div>
            <div className="seo-lines">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'medvault') {
    return (
      <div className="mock-browser" style={{ backgroundColor: color }}>
        <div className="mock-browser-bar">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <div className="mock-browser-url">vault.medvault.com</div>
        </div>
        <div className="mock-browser-content medvault-content">
          <div className="medvault-header">
            <span>MedVault Secure Portal</span>
          </div>
          <div className="medvault-body">
            <div className="lock-icon">🔒</div>
            <div className="input-line"></div>
            <div className="input-line"></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === 'summarizer') {
    return (
      <div className="mock-browser" style={{ backgroundColor: color }}>
        <div className="mock-browser-bar">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <div className="mock-browser-url">summarizer.ai</div>
        </div>
        <div className="mock-browser-content summarizer-content">
          <div className="summarizer-header">
            <span>AI Summarizer Dashboard</span>
          </div>
          <div className="summarizer-body">
            <div className="summary-bullets">
              <div className="bullet-point"></div>
              <div className="bullet-point"></div>
              <div className="bullet-point"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div style={{ backgroundColor: color, width: '100%', height: '100%' }}></div>;
}

export default function Works() {
  const navigate = useNavigate();

  return (
    <main className="page-fade-in works-page-container" style={{ padding: '8rem 0 4rem' }}>
      
      {/* Centered header mirroring reference */}
      <div className="works-page-header">
        <h1>Showcasing the best! <span className="works-header-emoji">🚀</span></h1>
      </div>

      {/* 3-column project grid */}
      <div className="works-mock-grid">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card-mockup"
            onClick={() => {
              navigate(`/projectdetail/${project.id}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="project-media-mockup">
              <ProjectMockup type={project.mockupType} color={project.themeColor} />
            </div>
            <div className="project-info-mockup">
              <h3>{project.title}</h3>
              <p>{project.para}</p>
              <div className="project-footer-mockup">
                <span className="project-tech-mockup">{project.tech}</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
