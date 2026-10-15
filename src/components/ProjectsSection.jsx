import React from 'react';
import { projects } from '../data/portfolioData';
import { 
  ExternalLink, 
  ArrowUpRight, 
  CheckCircle2, 
  Lock, 
  Package, 
  Terminal, 
  Info
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectsSection({ onSelectProject }) {
  return (
    <section id="works" className="py-20 relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5 font-semibold">
              01 / SELECTED PROJECTS
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Featured Software &amp; Applications
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm md:text-right font-normal">
            Real-world systems delivering tangible utility to students, campus facilities, and data workflows.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-12">
          
          {/* Project 1: SVUCE Learn */}
          <div className="clean-card p-6 sm:p-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2">
                    <span className="font-bold">01</span>
                    <span>/</span>
                    <span>ACADEMIC PORTAL</span>
                  </div>

                  <h3 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                    SVUCE Learn
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    A centralized, mobile-responsive academic resource portal built to eliminate fragmented distribution of syllabus and study materials for engineering students at Sri Venkateswara University.
                  </p>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>Empowering <strong>1,000+ engineering students</strong> with instant syllabus, lecture materials, and university updates.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>Engineered responsive, reusable React component architecture deployed on high-speed Vercel CDN infrastructure.</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {['React', 'JavaScript', 'Tailwind CSS', 'Vercel CDN', 'Mobile UX'].map((t, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://svucelearn.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/harsha-gundre2806/svu-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono text-xs hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(projects[0])}
                    className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline ml-auto flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Mockup Window (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm overflow-hidden">
                  
                  {/* Browser Chrome Header */}
                  <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    </div>

                    <div className="flex-1 max-w-sm mx-auto px-3 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 justify-center">
                      <Lock className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>https://svucelearn.vercel.app</span>
                    </div>
                  </div>

                  {/* Mockup Canvas Screen */}
                  <div className="p-5 bg-white dark:bg-slate-950 space-y-3.5">
                    
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center font-bold text-white text-xs font-mono">
                          SV
                        </div>
                        <span className="font-semibold text-xs text-slate-900 dark:text-white">SVUCE Learn Hub</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                        <span className="text-slate-900 dark:text-white font-medium">CS &amp; IT</span>
                        <span>ECE</span>
                        <span>EEE</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white">Central Academic Repository</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Verified lecture handouts, lab manuals &amp; syllabus sheets</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-mono text-[10px] font-semibold border border-emerald-200 dark:border-emerald-800">
                        1,000+ Active Students
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-2.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">SEMESTER 3</span>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">Data Structures &amp; Algorithms</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Notes, problem sets, solutions</div>
                      </div>
                      <div className="p-2.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-medium">SEMESTER 3</span>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white mt-0.5">Object-Oriented Programming</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">Java &amp; C++ lab exercises</div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Project 2: Campus Order Guard */}
          <div className="clean-card p-6 sm:p-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
                    <span className="font-bold">02</span>
                    <span>/</span>
                    <span>LOGISTICS &amp; SECURITY SYSTEM</span>
                  </div>

                  <h3 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                    Campus Order Guard
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    A full-stack hostel delivery tracking and parcel custody application engineered to manage student courier packages securely when students are away in laboratories or classes.
                  </p>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>Built real-time parcel logging and status syncing using <strong>React and Firebase Realtime Database</strong>.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>Automated delivery notifications and verification handoffs, preventing parcel loss and eliminating manual ledger books.</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {['React', 'Firebase', 'Realtime DB', 'Tailwind CSS', 'Authentication'].map((t, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://campus-order-guard.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-xs hover:bg-blue-500 transition-colors shadow-sm"
                  >
                    <span>Visit Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/harsha-gundre2806/campus-order-guard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono text-xs hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => onSelectProject(projects[1])}
                    className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline ml-auto flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Mockup Window (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm overflow-hidden">
                  
                  {/* Browser Chrome Header */}
                  <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    </div>

                    <div className="flex-1 max-w-sm mx-auto px-3 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 justify-center">
                      <Lock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span>https://campus-order-guard.vercel.app</span>
                    </div>
                  </div>

                  {/* Mockup Canvas Screen */}
                  <div className="p-5 bg-white dark:bg-slate-950 space-y-3">
                    
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-xs font-mono">
                          CG
                        </div>
                        <span className="font-semibold text-xs text-slate-900 dark:text-white">Campus Order Guard</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>Firebase Realtime Sync</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Package className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white">Delivery #COG-8492 • Amazon</div>
                          <div className="text-[11px] text-slate-500">Student: Harsha Vardhan • Block B Room 304</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        Ready for Pickup
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-between opacity-80">
                      <div className="flex items-center gap-2.5">
                        <Package className="w-4 h-4 text-slate-400" />
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white">Delivery #COG-8471 • BlueDart</div>
                          <div className="text-[11px] text-slate-500">Completed: Collected &amp; Verified with Security</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-slate-200 dark:bg-slate-800">
                        Handed Over
                      </span>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Project 3: E-Commerce Web Scraper */}
          <div className="clean-card p-6 sm:p-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 mb-2">
                    <span className="font-bold">03</span>
                    <span>/</span>
                    <span>DATA ENGINEERING &amp; EXTRACTION</span>
                  </div>

                  <h3 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                    E-Commerce Web Scraper
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    An automated Python data extraction pipeline architected to systematically collect, clean, and analyze product catalog data from Flipkart for pricing and market trends.
                  </p>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>Engineered resilient multi-page web scraping with custom headers and error handling via <strong>BeautifulSoup4 &amp; Requests</strong>.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>Parsed product titles, prices, ratings, and discounts into structured Pandas DataFrames for downstream analytics.</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {['Python', 'BeautifulSoup4', 'Requests', 'Pandas', 'Data Analytics'].map((t, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://github.com/HarshaGundre/flipkart-webscraping"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectProject(projects[2])}
                    className="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline ml-auto flex items-center gap-1"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Terminal Mockup (7 cols) */}
              <div className="lg:col-span-7">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200 shadow-sm overflow-hidden font-mono text-xs">
                  
                  {/* Terminal Header */}
                  <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <span className="ml-2 font-mono">scraper.py — python3</span>
                    </div>
                    <span className="text-emerald-400 font-medium text-[10px]">EXECUTED (200 OK)</span>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-4 space-y-2 text-left">
                    <div className="text-slate-500"># Initializing Python e-commerce scraping job</div>
                    <div className="text-emerald-400">$ python scraper.py --site=flipkart --export=csv</div>
                    <div className="text-slate-300 pl-3 border-l border-slate-700 space-y-0.5 text-[11px]">
                      <div>[INFO] Request session established with rotating User-Agent headers</div>
                      <div>[INFO] Traversing catalog pagination (Pages 1 to 20)</div>
                      <div>[INFO] Parsing DOM tree with BeautifulSoup (lxml engine)</div>
                      <div>[SUCCESS] Extracted 450+ records: Name, Price, Discount, Rating</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-300">
                      <span className="text-blue-400 font-semibold block mb-1">Pandas DataFrame Preview (.head()):</span>
                      <pre className="text-slate-400 overflow-x-auto">
Product_Title             | Price   | Rating | Discount
-------------------------------------------------------
Apple MacBook Air M2      | 99,990  | 4.8 ★  | 15%
Sony WH-1000XM5 Headset   | 26,990  | 4.7 ★  | 22%
Samsung 32" Curved Display| 21,490  | 4.5 ★  | 30%
                      </pre>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
