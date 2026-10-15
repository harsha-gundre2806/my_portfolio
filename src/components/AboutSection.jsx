import React, { useState } from 'react';
import { education, leadership, languages, workshops } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Languages as LangIcon, 
  Shield 
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="about" className="py-20 relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5 font-semibold">
              05 / ACADEMIC BACKGROUND &amp; LEADERSHIP
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Education &amp; Core Strengths
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm md:text-right font-normal">
            Undergraduate in Computer Science at Sri Venkateswara University with disciplined NCC training.
          </p>
        </div>

        {/* Main Grid: Left Story + Right Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left: Biography Narrative (6 cols) */}
          <div className="lg:col-span-6 clean-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3 font-medium">
                Professional Overview
              </span>

              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4 leading-snug">
                Computer Science undergraduate focused on modern frontend engineering and algorithmic problem-solving.
              </h3>

              <div className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                <p>
                  Currently enrolled at <strong className="text-slate-900 dark:text-white">Sri Venkateswara University (SVUCE)</strong> pursuing a Bachelor of Technology in Computer Science &amp; Engineering with a current cumulative GPA of <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">8.6 / 10</strong>.
                </p>
                <p>
                  My practical development experience includes frontend development internships at <strong className="text-slate-900 dark:text-white">Ceeras IT Services</strong>, where I implemented React UI components, managed Django URL templates, and established consistent Tailwind styling.
                </p>
                <p>
                  At <strong className="text-slate-900 dark:text-white">Edu-Versity</strong>, I conducted exploratory data analysis using Python (Pandas, NumPy, Matplotlib) and built automated data processing scripts in Jupyter Notebooks.
                </p>
                <p>
                  Outside the terminal, I served as an NCC Cadet, completing intensive discipline and field exercise drills, and earned a High Commendation Award at Ignite MUN for diplomatic negotiation and resolution drafting.
                </p>
              </div>
            </div>

            {/* Quick Metadata */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">LOCATION</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">Tirupati, India</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">PROGRAM</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">B.Tech CSE '28</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">ACADEMIC CGPA</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">8.6 / 10</span>
              </div>
            </div>
          </div>

          {/* Right: Tabs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            
            {/* Tab Buttons */}
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs">
              <button
                onClick={() => setActiveTab('education')}
                className={`py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 font-medium ${
                  activeTab === 'education'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </button>
              <button
                onClick={() => setActiveTab('leadership')}
                className={`py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 font-medium ${
                  activeTab === 'leadership'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Leadership</span>
              </button>
              <button
                onClick={() => setActiveTab('languages')}
                className={`py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 font-medium ${
                  activeTab === 'languages'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LangIcon className="w-4 h-4" />
                <span>Languages</span>
              </button>
            </div>

            {/* Tab Panels */}
            <div className="clean-card p-6 min-h-[350px] flex flex-col justify-between">
              
              {activeTab === 'education' && (
                <div className="space-y-5">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative pl-5 border-l-2 border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
                        <span>{edu.period}</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
                          {edu.score}
                        </span>
                      </div>

                      <h4 className="font-semibold text-base text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <div className="text-xs text-slate-600 dark:text-slate-300 font-mono mt-0.5">
                        {edu.institution} • {edu.location}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                        {edu.highlights}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'leadership' && (
                <div className="space-y-3.5">
                  {leadership.map((lead, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium mb-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>{lead.organization}</span>
                      </div>
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                        {lead.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                        {lead.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'languages' && (
                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-500 block mb-1 uppercase tracking-wider">
                    Communication Proficiencies:
                  </span>
                  {languages.map((l, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                      <span className="font-medium text-xs text-slate-900 dark:text-white">{l.language}</span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {l.proficiency}
                      </span>
                    </div>
                  ))}

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-medium">
                      Workshops &amp; Training:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {workshops.map((w, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                          {w.title} ({w.organizer})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified Credentials</span>
                <span className="text-emerald-600 dark:text-emerald-400">Authentic Resume Data</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
