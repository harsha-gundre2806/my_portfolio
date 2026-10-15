import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  FileText, 
  ShieldCheck, 
  Code2, 
  Sparkles, 
  Terminal, 
  MapPin, 
  Mail,
  User
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero({ onOpenResume }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span className="text-xs font-mono font-medium text-emerald-800 dark:text-emerald-300">
            Available for Internships &amp; Full-Time Opportunities
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Professional Bio & Overview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            
            <h1 className="font-sans font-bold text-3xl sm:text-5xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-tight">
              Frontend Developer &amp; <br />
              <span className="text-emerald-600 dark:text-emerald-400">Computer Science Engineer</span>
            </h1>

            <p className="mt-5 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Hi, I'm <strong className="font-semibold text-slate-900 dark:text-white">{personalInfo.name}</strong>. I am a Computer Science undergraduate at <strong className="font-semibold text-slate-900 dark:text-white">Sri Venkateswara University (8.6 CGPA)</strong> specializing in building responsive, high-performance web applications with <strong className="font-semibold text-slate-900 dark:text-white">React, JavaScript, and Tailwind CSS</strong>, complemented by a strong algorithmic background in <strong className="font-semibold text-slate-900 dark:text-white">Python and Data Structures &amp; Algorithms</strong>.
            </p>

            {/* Quick Tech Highlights */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                React &amp; Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Python, Django &amp; Data Analytics
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                CodeChef Diamond &amp; Gold Badges
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-xs sm:text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-7 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4 text-xs">
              <span className="text-slate-500 font-mono uppercase tracking-wider text-[11px]">Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/harsha-gundre2806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/g-harsha-vardhan-reddy-23176b333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Profile Picture Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-md">
              
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src="/pic.png"
                    alt="G Harsha Vardhan Reddy"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 dark:bg-slate-900">
                    <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-xl font-mono mb-3">
                      GH
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-white text-base">
                      G Harsha Vardhan Reddy
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-1">
                      SVU Computer Science • 8.6 CGPA
                    </div>
                    
                  </div>
                )}

                {/* Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                  SVUCE B.Tech '28
                </div>
              </div>

              {/* Information Row */}
              <div className="mt-3 px-1 py-1 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Tirupati, AP, India</span>
                </div>
                
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="border-l-2 border-slate-200 dark:border-slate-800 pl-4">
            <div className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white font-mono">
              1,000+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              Students Impacted (SVUCE Learn)
            </div>
          </div>

          <div className="border-l-2 border-slate-200 dark:border-slate-800 pl-4">
            <div className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white font-mono">
              8.6 / 10
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              B.Tech CGPA (Sri Venkateswara Univ)
            </div>
          </div>

          <div className="border-l-2 border-slate-200 dark:border-slate-800 pl-4">
            <div className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white font-mono">
              95.4%
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              Intermediate MPC (Viswasai Jr)
            </div>
          </div>

          <div className="border-l-2 border-emerald-500 dark:border-emerald-400 pl-4">
            <div className="font-bold text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 font-mono">
              Diamond &amp; Gold
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
              Problem Solver Badges (CodeChef)
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
