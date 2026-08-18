import React from 'react';
import { Layout, Server, Terminal, Cpu, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

export const Services = () => {
  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6 text-purple-400" />;
      case 'Server': return <Server className="w-6 h-6 text-violet-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-indigo-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            How I <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Can Help</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional development services, hardware IoT prototyping, and technical educational workshops.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-purple-500/20 bg-[#0F111A]/90 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Service Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-purple-500/20 text-[11px] font-mono text-purple-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/10">
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300"
                >
                  <span>Inquire About Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-purple-950/80 via-violet-950/60 to-[#0F111A] border border-purple-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-white">
              Have a Project in Mind? Let's Talk.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Whether you need custom software, an IoT prototype, or a technical instructor for your workshop, I'm ready to collaborate.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-xl shadow-purple-600/30 transition-all hover:scale-105"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
