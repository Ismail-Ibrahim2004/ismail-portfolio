import React from 'react';
import { Quote } from 'lucide-react';
import { profileData } from '../data/profile';

export const Philosophy = () => {
  return (
    <section className="relative py-20 bg-[#0A0B10] border-y border-purple-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-purple-500/30 bg-[#0F111A]/90 text-center space-y-8 relative shadow-2xl">
          
          <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <Quote className="w-7 h-7" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-white leading-tight">
              "{profileData.philosophyQuote}"
            </h2>
            <p className="text-slate-400 text-sm font-mono">
              — Ismail Ghoneim • Engineering Mindset Directive
            </p>
          </div>

          {/* 5 Steps Methodology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
            {profileData.philosophySteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-purple-500/20 text-left space-y-2 group hover:border-purple-400 transition-colors"
              >
                <div className="flex items-center justify-between text-purple-400 font-mono text-xs font-semibold">
                  <span>0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:animate-ping" />
                </div>
                <h3 className="text-base font-bold font-['Outfit'] text-white group-hover:text-purple-300">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
