import React from 'react';
import { certifications } from '../data/portfolioData';
import { 
  Award, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="credentials" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 text-left border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1.5 font-semibold">
              04 / CERTIFICATIONS &amp; CREDENTIALS
            </div>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Verified Industry Certifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm md:text-right font-normal">
            Accreditations issued by IBM, Microsoft, IIT Roorkee, IIM Calcutta, and Udemy.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="clean-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                  {cert.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {cert.badgeType}
                </span>

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold hover:underline"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span>Completed</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
