import React from 'react';
import { Trophy, GraduationCap, Rocket, Award, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export const Achievements = () => {
  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-purple-400" />;
      default: return <Award className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Key <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Recognitions, competition victories, and teaching milestones earned throughout my software journey.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((ach) => (
            <div
              key={ach.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-purple-500/20 bg-[#0F111A]/90 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-purple-950/70 border border-purple-500/30 group-hover:scale-110 transition-transform">
                    {getAchievementIcon(ach.icon)}
                  </div>
                  <span className="text-xs font-mono text-purple-400 font-medium">
                    {ach.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-purple-300 transition-colors">
                  {ach.title}
                </h3>

                <div className="text-xs font-semibold text-purple-400">
                  {ach.organization}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{ach.category}</span>
                <Sparkles className="w-3.5 h-3.5 text-purple-500/40" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
