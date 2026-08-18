import React, { useState } from 'react';
import { Award, ExternalLink, Maximize2, X, ShieldCheck } from 'lucide-react';
import { certificatesData } from '../data/certificates';

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="relative py-24 bg-[#0A0B10] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Certifications & <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Diplomas</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional certifications in software engineering, embedded microcontrollers, AI, and instruction.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-purple-500/20 bg-[#0F111A]/90 space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Certificate Image Preview Header */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-44 rounded-xl overflow-hidden cursor-pointer group-hover:border-purple-400 border border-purple-500/20 bg-black/40"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-transparent opacity-70" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/40 text-purple-300 text-[11px] font-mono">
                    {cert.category}
                  </div>

                  {/* Expand Lightbox Button */}
                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-purple-600/90 text-white backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono text-purple-400">
                    <span>{cert.organization}</span>
                    <span>{cert.date}</span>
                  </div>

                  <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {cert.description}
                </p>

              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ID: {cert.credentialId}</span>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300"
                >
                  <span>Preview Full</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full rounded-2xl bg-[#0F111A] border border-purple-500/30 overflow-hidden shadow-2xl p-6 space-y-4">
            
            <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
              <div className="space-y-0.5">
                <h3 className="text-lg font-bold font-['Outfit'] text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs font-mono text-purple-400">{selectedCert.organization} • {selectedCert.date}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg bg-white/5 border border-purple-500/20 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-purple-500/20 max-h-[60vh] bg-black">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-2">
              <span>Credential Reference: {selectedCert.credentialId}</span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 rounded-lg bg-purple-600 text-white font-semibold"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
