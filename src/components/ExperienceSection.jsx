import React from 'react';
import { experiences } from '../data/portfolioData';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5 font-semibold">
              02 / EXPERIENCE
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Work History &amp; Internships
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm md:text-right font-normal">
            Professional software development in Agile teams and data analytics pipelines.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6 text-left">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="clean-card p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Meta (4 cols) */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-medium">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                    {exp.company}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Skills badges */}
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-medium">
                      Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Details (8 cols) */}
                <div className="lg:col-span-8 lg:border-l lg:border-slate-200 lg:dark:border-slate-800 lg:pl-8">
                  <div className="mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Position
                    </span>
                    <h4 className="font-semibold text-lg text-slate-900 dark:text-white mt-0.5">
                      {exp.role}
                    </h4>
                  </div>

                  <div className="space-y-2.5">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
