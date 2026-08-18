import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#07080D] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Leadership Track</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Practical <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Technical instructor, software project lead, and freelance systems developer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-600 via-violet-500 to-transparent opacity-40" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0F111A] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.5)] z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  </div>

                  {/* Experience Card */}
                  <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] w-full">
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-purple-500/20 bg-[#0F111A]/90 space-y-4">
                      
                      {/* Header */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-[11px] font-mono text-purple-300">
                            {exp.type}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                            <Calendar className="w-3 h-3 text-purple-400" />
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold font-['Outfit'] text-white">
                          {exp.role}
                        </h3>

                        <div className="text-sm font-semibold text-purple-400">
                          {exp.organization}
                        </div>

                        <div className="flex items-center gap-1 text-xs font-mono text-slate-400 pt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities List */}
                      <div className="space-y-2 pt-2 border-t border-purple-500/10">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-white/5 border border-purple-500/20 text-[11px] font-mono text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
