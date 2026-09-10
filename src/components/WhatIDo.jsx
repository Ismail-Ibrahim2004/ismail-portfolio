import React from 'react';
import { Smartphone, Code2, Cpu, Server, BrainCircuit, Sparkles } from 'lucide-react';
import { specialtiesData } from '../data/specialties';

export const WhatIDo = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="specialties" className="relative py-24 bg-[#0A0B10] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <span>Specialties & Engineering Domains</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Core <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Specialties</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software Engineer focused on mobile applications, backend systems, embedded technology, and practical software solutions.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialtiesData.map((item, idx) => (
            <div
              key={item.id}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-purple-500/20 bg-[#0F111A]/90 flex flex-col justify-between ${
                item.isSupporting ? 'border-dashed border-purple-500/30' : ''
              }`}
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:border-purple-400 transition-all">
                    {getIcon(item.icon)}
                  </div>
                  {item.isSupporting ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-[10px] font-mono text-purple-300">
                      Supporting Focus
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-500 font-semibold">0{idx + 1}</span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  {item.id === 'mobile-dev' && (
                    <span className="text-[11px] font-mono text-purple-400 font-medium">
                      Primary Engineering Specialization
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Skills Chips */}
                <div className="pt-2 border-t border-purple-500/10 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-purple-500/15 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-purple-400 font-medium">
                <span>{item.isSupporting ? 'Practical AI Exploration' : 'Specialization Domain'}</span>
                <span>{item.skills.length} Competencies</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
