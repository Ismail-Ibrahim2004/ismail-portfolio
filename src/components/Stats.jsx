import React from 'react';
import { Code, Cpu, Calendar, Users, Award, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export const Stats = () => {
  const getStatIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-violet-400" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-indigo-400" />;
      case 'Users': return <Users className="w-6 h-6 text-emerald-400" />;
      default: return <Award className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section className="relative py-12 bg-[#0A0B10] border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-purple-500/20 bg-[#0F111A]/80 backdrop-blur-md"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  {getStatIcon(stat.icon)}
                </div>
                <Sparkles className="w-4 h-4 text-purple-500/40 group-hover:text-purple-400 transition-colors" />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight group-hover:text-purple-300 transition-colors">
                {stat.value}
              </div>

              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
