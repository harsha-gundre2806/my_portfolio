import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import { personalInfo, experiences, projects, education } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
              G Harsha Vardhan Reddy — Official Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-mono text-slate-700 dark:text-slate-200 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 space-y-7 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h1 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-emerald-700 dark:text-emerald-400 font-mono text-xs sm:text-sm mt-1 font-medium">
              Frontend &amp; Software Developer | React, JavaScript, Tailwind CSS, Python
            </p>

            <div className="mt-3 flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.phone}
              </span>
              <a href="https://github.com/harsha-gundre2806" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                github.com/harsha-gundre2806
              </a>
              <a href="https://www.linkedin.com/in/harsha-vardhan-reddy-g-23176b333/" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                linkedin.com/in/harsha-vardhan-reddy-g-23176b333
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 font-bold">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              High-impact Frontend Developer and Computer Science undergraduate at Sri Venkateswara University (8.6 CGPA). Experienced in architecting responsive web applications using React, JavaScript, and Tailwind CSS. Solid foundation in Python, Django frontend integration, and Data Structures &amp; Algorithms (DSA). Proven track record of delivering clean, modular code and collaborating via Git/GitHub in Agile team workflows.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3 font-bold">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{edu.institution}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">{edu.degree}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{edu.highlights}</div>
                  </div>
                  <div className="text-right text-xs font-mono shrink-0">
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold block">{edu.score}</span>
                    <span className="text-slate-500 dark:text-slate-400">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3 font-bold">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">{exp.role}</span>
                      <span className="text-slate-500 dark:text-slate-400 text-xs font-mono ml-2">| {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400">{exp.period}</span>
                  </div>

                  <ul className="mt-1.5 space-y-1 list-disc list-inside text-xs text-slate-600 dark:text-slate-300">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3 font-bold">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">{proj.title}</span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">({proj.category})</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      {proj.liveUrl && (
                        <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                          Live
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:underline">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{proj.description}</p>
                  <ul className="mt-1 space-y-0.5 list-disc list-inside text-xs text-slate-500 dark:text-slate-400">
                    {proj.impact.map((imp, impIdx) => (
                      <li key={impIdx}>{imp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 font-bold">
                Key Skills &amp; Stack
              </h2>
              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <div><strong className="text-slate-900 dark:text-white">Languages:</strong> Python, JavaScript, C, C++</div>
                <div><strong className="text-slate-900 dark:text-white">Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS, Responsive Design</div>
                <div><strong className="text-slate-900 dark:text-white">Frameworks &amp; Backend:</strong> Django, Firebase Realtime Database &amp; Auth</div>
                <div><strong className="text-slate-900 dark:text-white">Tools &amp; Analytics:</strong> Git, GitHub, Jupyter Notebook, Pandas, NumPy, Scikit-learn</div>
                <div><strong className="text-slate-900 dark:text-white">Core Concepts:</strong> Data Structures &amp; Algorithms (DSA), OOP</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 font-bold">
                Badges &amp; Certifications
              </h2>
              <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <div><strong className="text-emerald-700 dark:text-emerald-400">CodeChef:</strong> Problem Solver Diamond &amp; Gold Badges</div>
                <div><strong className="text-cyan-700 dark:text-cyan-400">Google Cloud:</strong> Introduction to Generative AI Badge</div>
                <div><strong className="text-slate-900 dark:text-white">IBM:</strong> Web Development Certificate (May 2025)</div>
                <div><strong className="text-slate-900 dark:text-white">IIT Roorkee:</strong> Data Analytics with Python (NPTEL, 2025)</div>
                <div><strong className="text-slate-900 dark:text-white">Microsoft:</strong> Fundamental AI Concepts (May 2025)</div>
                <div><strong className="text-slate-900 dark:text-white">IIM Calcutta:</strong> General Management Quiz (May 2025)</div>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 font-bold">
              Leadership &amp; Co-Curricular
            </h2>
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <div>
                <strong className="text-slate-900 dark:text-white">National Cadet Corps (NCC) — Cadet:</strong> Led squad drills, managed group dynamics under discipline, and completed high-pressure field training modules.
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white">Ignite MUN — High Commendation Award:</strong> Recognized for diplomatic negotiation, international policy analysis, and authoring committee resolutions.
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
