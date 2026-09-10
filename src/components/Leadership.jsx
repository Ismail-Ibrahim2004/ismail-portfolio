import React from 'react';
import { Users, CheckCircle2, GitBranch, ArrowRight } from 'lucide-react';
import { leadershipData, leadershipPillars } from '../data/leadership';

export const Leadership = () => {
  return (
    <section id="leadership" className="relative py-24 bg-[#0A0B10] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>Collaboration & Project Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Team <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Guiding project-based development teams through technical decision-making, task organization, and collaborative software engineering.
          </p>
        </div>

        {/* Leadership Core Pillars Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-12">
          {leadershipPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-300 flex items-center gap-2"
            >
              <GitBranch className="w-3 h-3 text-purple-400" />
              <span>{pillar}</span>
            </div>
          ))}
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {leadershipData.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-purple-500/20 bg-[#0F111A]/90 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>{item.role}</span>
                  </span>
                  <span className="text-xs font-mono text-purple-400 font-medium">
                    Technical Coordination
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white">
                    {item.project}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {item.domain}
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Key Contributions */}
                <div className="pt-3 border-t border-purple-500/15 space-y-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Collaborative Workflow</span>
                <span className="text-purple-400 flex items-center gap-1">
                  <span>Structured Delivery</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
