import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check saved preference or system preference, default to dark
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  // Sync theme to <html> tag class list and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white font-sans transition-colors duration-200">
      
      {/* Executive Clean Header Navigation with Theme Toggle */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section with Dual-Theme Metric Cards & Portrait Card */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Clean Static Competency Pill Bar */}
        <MarqueeTicker />

        {/* 01 / Selected Engineering Projects (Browser Mockups) */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 02 / Professional Timeline (Ceeras IT & Edu-Versity) */}
        <ExperienceSection />

        {/* 03 / Technical Skills & Problem Solving (CodeChef Badges) */}
        <SkillsSection />

        {/* 04 / Verified Credentials (IBM, IIT Roorkee, Microsoft, IIM Calcutta) */}
        <CertificationsSection />

        {/* 05 / Academic Background & Leadership (SVU, NCC, MUN) */}
        <AboutSection />

        {/* 06 / Direct Contact & Channel Form */}
        <ContactSection />
      </main>

      {/* Clean Corporate Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Complete Dual-Theme Resume Modal (Printable & Downloadable) */}
      {resumeOpen && (
        <ResumeModal onClose={() => setResumeOpen(false)} />
      )}

    </div>
  );
}
