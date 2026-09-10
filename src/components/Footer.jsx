import React from 'react';
import { Sparkles, ArrowUp, Mail, Heart } from 'lucide-react';
import { socialsData } from '../data/socials';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github': return <GithubIcon className="w-4 h-4" />;
      case 'Linkedin': return <LinkedinIcon className="w-4 h-4" />;
      case 'Mail': return <Mail className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-[#05060A] text-slate-400 border-t border-purple-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Final CTA Banner Block */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 bg-[#0A0B10]/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white">
              Let's Build Something Meaningful
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Software Engineer focused on mobile applications, backend systems, embedded technology, and practical software solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform"
            >
              Get In Touch
            </a>
            <button
              onClick={onOpenResume}
              className="px-6 py-3 rounded-xl bg-white/5 border border-purple-500/30 text-purple-300 font-semibold text-xs hover:bg-purple-600/20 transition-colors cursor-pointer"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
          
          {/* Brand Intro */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold font-['Outfit'] text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-violet-400 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>Ismail <span className="text-purple-400">Ghoneim</span></span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Software Engineer focused on mobile applications, backend systems, embedded technology, and practical software solutions.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {socialsData.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-purple-500/20 flex items-center justify-center text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-colors"
                  title={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider font-['Outfit']">Navigation</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Me</a></li>
              <li><a href="#specialties" className="hover:text-purple-400 transition-colors">Specialties</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills & Tech</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a></li>
              <li><a href="#leadership" className="hover:text-purple-400 transition-colors">Leadership</a></li>
              <li><a href="#certifications" className="hover:text-purple-400 transition-colors">Certifications</a></li>
              <li><a href="#education" className="hover:text-purple-400 transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider font-['Outfit']">Featured Projects</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://github.com/Ismail-Ibrahim2004/movie_explorer" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">MovieHub — Flutter Explorer App ↗</a></li>
              <li><a href="https://github.com/Ismail-Ibrahim2004/Sakina" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">سَكِينَة | Sakina — Flutter App ↗</a></li>
              <li><a href="https://ismail-ibrahim2004.github.io/LUXY/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LUXY — Luxury Web Platform ↗</a></li>
              <li><a href="https://github.com/Ismail-Ibrahim2004/Tasweek" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Tasweek — E-Commerce ↗</a></li>
              <li><a href="https://github.com/Ismail-Ibrahim2004/AILAB" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">AILAB — Vision & Robotics ↗</a></li>
              <li><a href="https://github.com/Ismail-Ibrahim2004/Smart-Home-IoT" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Smart Home IoT Prototype ↗</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Ismail Ghoneim. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with focus on engineering reliability & maintainability</span>
            <Heart className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400 transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
