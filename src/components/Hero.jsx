import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Mail, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { socialsData } from '../data/socials';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero = ({ onOpenResume }) => {
  const [typedText, setTypedText] = useState('');
  const [activeCodeTab, setActiveCodeTab] = useState('ismail.dart');

  const fullText = "Building Reliable Digital Solutions";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github': return <GithubIcon className="w-4 h-4" />;
      case 'Linkedin': return <LinkedinIcon className="w-4 h-4" />;
      case 'Mail': return <Mail className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const heroBadges = [
    'Flutter',
    'Clean Architecture',
    'Backend Systems',
    'Arduino',
    'Raspberry Pi'
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-grid-pattern overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Personal Brand Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Open to Software Engineering Opportunities</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h2 className="text-purple-400 font-mono text-base sm:text-lg font-semibold tracking-wide flex items-center gap-2">
                <span>👋 Hi, I'm</span>
              </h2>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold font-['Outfit'] tracking-tight text-white leading-none">
                Ismail <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">Ghoneim</span>
              </h1>

              <div className="text-lg sm:text-xl font-medium text-slate-300 pt-1">
                Software Engineer
              </div>
            </div>

            {/* Dynamic Headline Typing Effect */}
            <div className="h-16 flex items-center bg-[#0F111A]/90 border border-purple-500/20 rounded-xl px-4 py-3 font-mono text-sm sm:text-base text-purple-200">
              <span className="text-purple-500 font-bold mr-2">&gt;</span>
              <span className="text-slate-100">{typedText}</span>
              <span className="w-2 h-5 bg-purple-400 ml-1 animate-cursor inline-block" />
            </div>

            {/* Bio Supporting Text */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {profileData.subheadline}
            </p>

            {/* Quick Tech Badge Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {heroBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-purple-500/20 text-xs font-mono text-purple-300 hover:border-purple-400 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-purple-700 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-95 text-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 bg-[#0F111A] hover:bg-purple-950/40 border border-purple-500/40 text-purple-200 font-semibold px-6 py-3.5 rounded-xl transition-all hover:border-purple-400 text-sm"
              >
                <span>Let's Connect</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 font-semibold px-5 py-3.5 rounded-xl transition-all text-sm"
              >
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Media Quick Row */}
            <div className="pt-6 border-t border-purple-500/20 flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <div className="flex items-center gap-2">
                {socialsData.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="w-9 h-9 rounded-lg bg-[#0F111A] border border-purple-500/20 flex items-center justify-center text-slate-300 hover:text-purple-300 hover:border-purple-400 hover:bg-purple-600/10 transition-all"
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Code Canvas */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glowing Aura Behind Card */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30 group-hover:opacity-50 blur-xl transition duration-500" />
              
              <div className="relative rounded-2xl bg-[#0B0C14] border border-purple-500/30 overflow-hidden shadow-2xl">
                {/* Code Window Header */}
                <div className="bg-[#121422] px-4 py-3 border-b border-purple-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">ismail_ghoneim.dart</span>
                  </div>
                  
                  <div className="flex items-center gap-1 font-mono text-[11px]">
                    <button
                      onClick={() => setActiveCodeTab('ismail.dart')}
                      className={`px-2 py-0.5 rounded transition-colors ${activeCodeTab === 'ismail.dart' ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40' : 'text-slate-400'}`}
                    >
                      ismail.dart
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('skills.json')}
                      className={`px-2 py-0.5 rounded transition-colors ${activeCodeTab === 'skills.json' ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40' : 'text-slate-400'}`}
                    >
                      skills.json
                    </button>
                  </div>
                </div>

                {/* Code Body Content */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-200 bg-[#0A0B10]">
                  {activeCodeTab === 'ismail.dart' ? (
                    <div className="space-y-2">
                      <div>
                        <span className="text-purple-400 font-semibold">class</span>{' '}
                        <span className="text-amber-300 font-semibold">IsmailGhoneim</span>{' '}
                        <span className="text-slate-400">{'{'}</span>
                      </div>

                      <div className="pl-4 space-y-1">
                        <div>
                          <span className="text-sky-400">final</span> String role = <span className="text-emerald-300">"Software Engineer"</span>;
                        </div>
                        <div>
                          <span className="text-sky-400">final</span> String education = <span className="text-emerald-300">"IT Student @ Burj Al Arab Univ"</span>;
                        </div>
                        <div>
                          <span className="text-sky-400">final</span> String primaryFocus = <span className="text-emerald-300">"Flutter & Clean Architecture"</span>;
                        </div>

                        <div className="pt-2">
                          <span className="text-purple-400">List&lt;String&gt;</span> <span className="text-sky-400">getSpecialties</span>() =&gt; [
                        </div>
                        <div className="pl-8 text-emerald-300">"Mobile Application Development",</div>
                        <div className="pl-8 text-emerald-300">"Software Engineering (OOP / Java / C++)",</div>
                        <div className="pl-8 text-emerald-300">"Backend Development (PHP / Laravel / SQL)",</div>
                        <div className="pl-8 text-emerald-300">"Embedded Systems (Arduino / Raspberry Pi)",</div>
                        <div className="pl-8 text-emerald-300">"Computer Vision (Python / OpenCV / MediaPipe)"</div>
                        <div className="pl-4 text-slate-300">];</div>
                      </div>

                      <div>{'}'}</div>

                      <div className="pt-2 text-emerald-400 font-semibold">// Building software that is reliable, maintainable & meaningful</div>
                    </div>
                  ) : (
                    <pre className="text-slate-300">
{`{
  "name": "Ismail Ghoneim",
  "role": "Software Engineer",
  "status": "IT Student (4th Year)",
  "specialization": "Flutter & Mobile Development",
  "domains": [
    "Clean Architecture",
    "Backend Systems",
    "Embedded & IoT",
    "Computer Vision Exploration"
  ]
}`}
                    </pre>
                  )}
                </div>

                {/* Bottom Visual Card Highlight */}
                <div className="bg-[#121422] p-3 border-t border-purple-500/20 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Engineered for Reliability</span>
                  </div>
                  <span className="text-purple-400">Alexandria, Egypt</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
