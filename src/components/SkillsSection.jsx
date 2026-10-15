import React from 'react';
import { skillCategories, badges } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Sparkles, 
  Award, 
  ShieldCheck 
} from 'lucide-react';

export default function SkillsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'Database': return <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      default: return <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="arsenal" className="py-20 relative bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5 font-semibold">
              03 / TECHNICAL SKILLS &amp; DSA
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Engineering Stack &amp; Problem Solving
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm md:text-right font-normal">
            Strong algorithmic foundations on CodeChef paired with production-ready frontend technologies.
          </p>
        </div>

        {/* Badges / Competitive Programming */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="clean-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                    <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    {b.issuer}
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                  {b.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {b.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Recognition</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="clean-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800">
                    {getIcon(cat.icon)}
                  </div>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2 rounded-md bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-medium text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500">
                          {skill.level}
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Domain 0{idx + 1}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Proficient</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
