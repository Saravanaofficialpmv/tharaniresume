import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Code, User, Award } from 'lucide-react';

const projectCaseStudies = {
  "medvault": {
    title: "MedVault – Healthcare Data Management System",
    subtitle: "A secure, encrypted database management solution tailored for healthcare providers to store records and analyze patient history trends.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80",
    client: "Healthcare Information Systems",
    role: "Database & Software Developer",
    date: "Jan 2026",
    tech: "Python, SQL, Data Analytics, SQLite",
    overview: "MedVault is an advanced healthcare data management system engineered to provide secure, encrypted medical record storage and retrieval. Tailored for healthcare professionals, the platform leverages robust SQL database architectures to manage complex patient histories, track treatment trends, and ensure compliant data access.",
    challenge: "Healthcare databases require absolute data security and high query performance. Handling complex relationships between patient demographics, medical history, treatments, and prescriptions while ensuring fast lookups on a fully normalized database was the core obstacle.",
    solution: "Developed comprehensive database schemas with high normalization to prevent redundancy. Designed optimized SQL query pipelines, structured indexing systems, and a Python-based backend that handles encrypted data transfers. Implemented analytic queries that compile patient trends and medical history patterns in real time.",
    results: "Achieved a 35% reduction in typical query execution times through indexing and query refinement. Enhanced data accessibility and security, ensuring that clinical staff can securely retrieve vital patient history within milliseconds."
  },
  "summarizer": {
    title: "AI Research Summarizer",
    subtitle: "An intelligent Natural Language Processing tool designed to analyze and summarize academic literature.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
    client: "Academic & R&D Teams",
    role: "AI / NLP Engineer",
    date: "Nov 2025",
    tech: "Python, Natural Language Processing, Machine Learning",
    overview: "The AI Research Summarizer is a smart productivity tool developed to automate and accelerate academic research. Utilizing state-of-the-art NLP models, the system extracts critical findings, arguments, and conclusions from academic PDFs, outputting concise, high-accuracy summaries.",
    challenge: "Scientific papers often contain dense, highly specialized terminology. Conventional text-ranking summarizers failed to capture semantic nuances, resulting in fragmented or irrelevant outlines.",
    solution: "Leveraged advanced pre-trained NLP models to construct a text-summarization pipeline. Implemented custom preprocessing logic to clean academic PDF extractions and built a user-friendly frontend dashboard for seamless document uploading and processing.",
    results: "Reduced typical academic literature review times by 60% through automated content analysis. Researchers and students reported high satisfaction rates, noting that the extracted insights captured core concepts with strong contextual coherence."
  },
  "sentiment-analysis": {
    title: "Sentiment Analysis of Social Media Streams",
    subtitle: "A real-time natural language processing pipeline built to ingest Twitter/X streams and perform sentiment classification.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1000&q=80",
    client: "Social Media Analytics Team",
    role: "AI / NLP Developer",
    date: "Dec 2025",
    tech: "Python, NLP, Deep Learning, PyTorch",
    overview: "Sentiment Analysis of Social Media Streams is a pipeline designed to stream live posts from social platforms, run tokenization and semantic analysis, and output real-time sentiment classifications (Positive, Negative, Neutral).",
    challenge: "Social media text is highly unstructured, containing emojis, slangs, typos, and abbreviations. Traditional lexical models failed to analyze context correctly.",
    solution: "Built a processing pipeline using transformer models and PyTorch. Cleaned input texts using custom regex pipelines, and trained classification heads on specialized sentiment datasets.",
    results: "Achieved an accuracy of 89% on sentiment classification. Enabled real-time visualization of public opinions during product launches."
  },
  "sales-forecasting": {
    title: "Predictive Sales Forecasting System",
    subtitle: "A business intelligence dashboard integrating regression models to predict monthly product demand.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    client: "Retail Analytics Division",
    role: "Data Scientist",
    date: "Oct 2025",
    tech: "Python, SQL, Data Analytics, Pandas",
    overview: "A forecasting platform that queries transaction records from enterprise SQL databases, trains predictive regression models, and outputs interactive demand forecasts on a web dashboard.",
    challenge: "Processing millions of sales transaction rows efficiently and selecting correct regression features while accounting for seasonal fluctuations was the key constraint.",
    solution: "Implemented rolling-window aggregations in SQL for feature engineering. Trained multi-variable regression models using Scikit-Learn and designed a React-based chart dashboard.",
    results: "Improved demand forecasting accuracy by 25% compared to baseline moving-average models, reducing inventory overhead expenses."
  },
  "portfolio-website": {
    title: "Portfolio Website Design",
    subtitle: "A premium, responsive developer portfolio showcasing projects, credentials, and achievements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    client: "Personal Portfolio",
    role: "Frontend Developer",
    date: "Feb 2026",
    tech: "React, Tailwind, CSS, WebGL",
    overview: "A state-of-the-art personal portfolio website designed to showcase projects, skills, and academic achievements. Utilizes modern UI elements, card tilts, interactive WebGL backgrounds, and glassmorphism styling.",
    challenge: "Creating an immersive WebGL shader background and premium card interactions while ensuring fast load times and absolute responsiveness on mobile screens.",
    solution: "Integrated Three.js and custom fragment shaders for background rendering. Built clean vanilla CSS rules with CSS custom variables, removing reliance on heavy external UI frameworks.",
    results: "Achieved perfect responsive performance across all viewports and a high-fidelity visual design that wows visitors."
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectCaseStudies[id];

  if (!project) {
    return (
      <div className="project-detail-container page-fade-in" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/')} className="explore-btn" style={{ marginTop: '2rem' }}>
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <main className="project-detail-container page-fade-in">
      <button onClick={() => navigate(-1)} className="back-link">
        <ArrowLeft size={16} /> Back to Projects
      </button>

      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <p style={{ fontSize: '1.25rem' }}>{project.subtitle}</p>
      </div>

      <div className="project-detail-hero">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-detail-grid">
        <div className="project-detail-main">
          <section>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>

          <section>
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </section>

          <section>
            <h2>The Solution</h2>
            <p>{project.solution}</p>
          </section>

          <section>
            <h2>Results & Metrics</h2>
            <p>{project.results}</p>
          </section>
        </div>

        <aside className="project-detail-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-label">
              <User size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> Client
            </div>
            <div className="sidebar-value">{project.client}</div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-label">
              <Award size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> Role
            </div>
            <div className="sidebar-value">{project.role}</div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-label">
              <Calendar size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> Date
            </div>
            <div className="sidebar-value">{project.date}</div>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-label">
              <Code size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} /> Technology
            </div>
            <div className="sidebar-value">{project.tech}</div>
          </div>
        </aside>
      </div>
    </main>
  );
}
