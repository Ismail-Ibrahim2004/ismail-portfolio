import React from 'react';
import { User, Sparkles, CheckCircle } from 'lucide-react';
import { profileData } from '../data/profile';

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#07080D] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            About <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Ismail Ghoneim</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Software Engineer focused on mobile applications, backend systems, embedded technology, and practical software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-purple-600 via-violet-600 to-indigo-600 opacity-40 group-hover:opacity-75 blur-lg transition duration-500" />
              
              <div className="relative rounded-3xl bg-[#0F111A] border border-purple-500/30 p-6 space-y-6 shadow-2xl">
                
                {/* Developer Badge Header */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-purple-950/80 to-[#0A0B10] p-8 text-center border border-purple-500/20">
                  {/* Profile Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    {/* Rotating gradient ring */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-400 opacity-80 blur-sm animate-pulse-glow" />
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-400" />

                    {profileData.avatar ? (
                      /* ── Real photo ── */
                      <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-purple-600/40">
                        <img
                          src={profileData.avatar}
                          alt="Ismail Ghoneim"
                          className="w-full h-full object-cover object-center"
                        />
                        {/* shine overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      /* ── Placeholder (initials) ── */
                      <div className="relative w-full h-full rounded-full bg-[#0F111A] flex flex-col items-center justify-center shadow-2xl shadow-purple-600/40 overflow-hidden">
                        {/* subtle radial glow inside */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-600/10 pointer-events-none" />
                        <span className="text-3xl font-extrabold font-['Outfit'] bg-gradient-to-br from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent select-none">
                          IG
                        </span>
                        <span className="text-[9px] font-mono text-slate-500 mt-0.5 tracking-widest uppercase">photo</span>
                      </div>
                    )}

                    {/* Online badge */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0F111A] shadow-lg shadow-emerald-500/40" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Outfit']">Ismail Ghoneim</h3>
                  <p className="text-xs font-mono text-purple-400 mt-0.5">Software Engineer</p>

                  <div className="mt-4 pt-4 border-t border-purple-500/20 text-xs text-slate-300 space-y-2 font-mono text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Burj Al Arab University of Technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Bachelor's in Information Technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Specializing in Flutter & Mobile Apps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Backend & Embedded Systems Projects</span>
                    </div>
                  </div>
                </div>

                {/* Engineering Pillars */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-purple-500/20 text-center">
                    <div className="text-sm font-bold text-purple-300 font-mono">Clean Architecture</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Flutter & BLoC</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-purple-500/20 text-center">
                    <div className="text-sm font-bold text-violet-300 font-mono">Engineering Mindset</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Reliable & Maintainable</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Content: Verified Professional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {profileData.aboutStory.map((paragraph, index) => (
                <p key={index} className="bg-[#0F111A]/60 border border-purple-500/10 rounded-2xl p-4 sm:p-5">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Engineering Values Quote Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-purple-950/60 to-violet-950/40 border border-purple-500/30 p-6 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-semibold">
                  Engineering Commitment
                </span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>

              <blockquote className="text-base sm:text-lg font-bold font-['Outfit'] text-white">
                "{profileData.philosophyQuote}"
              </blockquote>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

