import React from 'react';
import { GraduationCap, MapPin, CheckCircle2, Calendar, BookOpen } from 'lucide-react';
import { educationData } from '../data/education';

export const Education = () => {
  return (
    <section id="education" className="relative py-24 bg-[#0A0B10] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Education & <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Academic Path</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal technical education in Information Technology and Software Engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 bg-[#0F111A]/90 space-y-6 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-600/20 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                      {edu.institution}
                    </h3>
                    <div className="text-base font-semibold text-purple-400">
                      {edu.degree}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">
                    {edu.currentStatus} • {edu.graduationExpected}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{edu.location}</span>
                </div>
                <div className="text-purple-300">
                  {edu.department}
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {edu.description}
              </p>

              {/* Academic Focus Areas */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-purple-300 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Academic Focus Areas</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.academicFocus.map((focus, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-purple-500/20 text-xs font-mono text-slate-200"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Information Technology Student</span>
                </div>
                <span>Graduation: 2027</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
