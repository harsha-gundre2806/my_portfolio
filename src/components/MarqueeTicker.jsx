import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "React.js",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Data Structures & Algorithms",
    "Python",
    "Django",
    "Firebase Realtime DB",
    "CodeChef Problem Solver",
    "Pandas & NumPy",
    "Jupyter Notebook",
    "Git & GitHub",
    "REST APIs"
  ];

  return (
    <div className="py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 transition-colors duration-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mr-1">
            Core Stack:
          </span>
          {items.map((item, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-2xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
