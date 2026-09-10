import React from 'react';
import { Award, BookCheck } from 'lucide-react';
import { certificatesData } from '../data/certificates';

export const Certificates = () => {
  return (
    <section id="certifications" className="relative py-24 bg-[#07080D] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>9 Listed Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional training and academic certifications across mobile application development, backend systems, embedded hardware, and communication.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-purple-500/20 bg-[#0F111A]/90 space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-medium">
                    {cert.category}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/5 text-purple-400 group-hover:scale-110 transition-transform">
                    <BookCheck className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-purple-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-purple-400 font-semibold">
                    {cert.issuer}
                  </div>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-purple-500/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-purple-300">{cert.issuer}</span>
                <span className="text-slate-500">#{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
