import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Wrench, Layers, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0F111A] border border-purple-500/30 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header Bar */}
        <div className="bg-[#121422] px-6 py-4 border-b border-purple-500/20 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold">
              {project.category} Case Study
            </span>
            <h3 className="text-lg font-bold font-['Outfit'] text-white truncate max-w-xs sm:max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-purple-500/20 text-slate-300 hover:text-white hover:bg-purple-600/20 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-200">
          
          {/* Main Visual Header Image */}
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-purple-500/20">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-white">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-purple-300">{project.subtitle}</p>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-purple-500/20 space-y-1">
              <div className="text-xs font-mono text-purple-400">My Role</div>
              <div className="text-sm font-semibold text-white">{project.role}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-purple-500/20 space-y-1">
              <div className="text-xs font-mono text-purple-400">Category</div>
              <div className="text-sm font-semibold text-white">{project.category} Engineering</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-purple-500/20 space-y-1">
              <div className="text-xs font-mono text-purple-400">Architecture</div>
              <div className="text-sm font-semibold text-white">Modular & Responsive</div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold font-['Outfit'] text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <span>Project Overview</span>
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-white/5 border border-purple-500/10 p-4 rounded-xl">
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Dual Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30">
              <h4 className="text-base font-bold font-['Outfit'] text-rose-300 flex items-center gap-2">
                <span>The Problem</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
              <h4 className="text-base font-bold font-['Outfit'] text-emerald-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>The Solution</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-['Outfit'] text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-violet-400" />
              <span>Key Features & Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-purple-500/20 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold font-['Outfit'] text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-indigo-400" />
              <span>Technologies & Libraries Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="bg-[#121422] px-6 py-4 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs font-mono text-slate-400">
            Ismail Ghoneim • Case Study Details
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-purple-500/30 text-slate-200 hover:text-white hover:bg-purple-600/20 text-xs font-semibold transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-semibold shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
