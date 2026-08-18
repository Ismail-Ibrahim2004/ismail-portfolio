import React, { useState } from 'react';
import { Smartphone, Code2, Cpu, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-24 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Verified Skills & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Specializations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured skill areas built across mobile engineering, software systems, embedded technology, and technical domains.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40'
                : 'bg-[#0F111A] border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400/40'
            }`}
          >
            All Categories
          </button>
          
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/60 shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                  : 'bg-[#0F111A] border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400/40'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Category Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-panel p-6 rounded-2xl border border-purple-500/20 bg-[#0F111A]/80 backdrop-blur-md space-y-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <h3 className="text-lg font-bold font-['Outfit'] text-white">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-purple-400 font-medium">
                    {cat.skills.length} Items
                  </span>
                </div>

                {/* Skill Badges List */}
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} className="group p-3 rounded-xl bg-white/5 border border-purple-500/10 hover:border-purple-500/40 hover:bg-purple-950/30 transition-all flex items-center gap-2 text-xs font-mono text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="font-semibold group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/10 text-right">
                <span className="text-[11px] font-mono text-slate-400">Verified Professional Skill</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

