import React from 'react';
import { Mail, ExternalLink, Globe } from 'lucide-react';
import { socialsData } from '../data/socials';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const SocialHub = () => {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin': return <LinkedinIcon className="w-6 h-6 text-purple-400" />;
      case 'Mail': return <Mail className="w-6 h-6 text-violet-400" />;
      case 'Github': return <GithubIcon className="w-6 h-6 text-indigo-400" />;
      default: return <Globe className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#0A0B10] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" />
            <span>Verified Links</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Connect <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">With Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Reach out through direct professional channels and repository hubs.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socialsData.map((social) => (
            <div
              key={social.id}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl border border-purple-500/20 bg-[#0F111A]/90 space-y-4 flex flex-col justify-between group ${social.color}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/30 group-hover:scale-110 transition-transform">
                    {getSocialIcon(social.icon)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-purple-500/20 text-[11px] font-mono text-purple-300">
                    {social.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-purple-300 transition-colors">
                    {social.name}
                  </h3>
                  <div className="text-xs font-mono text-purple-400 mt-0.5">
                    {social.handle}
                  </div>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {social.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-500/10">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-semibold text-purple-300 hover:text-white transition-colors"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

