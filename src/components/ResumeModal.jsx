import React from 'react';
import { X, Download, Printer, GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { educationData } from '../data/education';
import { skillCategories } from '../data/skills';
import { projectsData } from '../data/projects';

export const ResumeModal = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const textContent = `
ISMAIL GHONEIM
Software Engineer | Mobile Application Development | Backend & Embedded Systems
Email: ${profileData.contactInfo.email} | LinkedIn: ${profileData.contactInfo.linkedin}
Location: ${profileData.contactInfo.location} | University: ${profileData.contactInfo.university}

PROFILE SUMMARY
${profileData.aboutStory.join('\n\n')}

EDUCATION
${educationData.map(e => `- ${e.degree} (${e.period})\n  ${e.institution}, ${e.location}`).join('\n')}

EXPERIENCE & SPECIALIZATION
${experienceData.map(e => `- ${e.role} | ${e.organization} (${e.period})\n  ${e.description}`).join('\n')}

FEATURED PROJECTS
${projectsData.map(p => `- ${p.title} (${p.category}): ${p.shortDescription} [Stack: ${p.techStack.join(', ')}]`).join('\n')}

TECHNICAL SKILLS
${skillCategories.map(c => `- ${c.name}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ismail_Ghoneim_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0F111A] border border-purple-500/40 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#121422] px-6 py-4 border-b border-purple-500/20 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <h3 className="text-lg font-bold font-['Outfit'] text-white">
              Official Curriculum Vitae • Ismail Ghoneim
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-purple-500/30 text-slate-200 hover:text-white text-xs font-semibold"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-purple-600 text-white hover:bg-purple-500 text-xs font-semibold shadow-lg shadow-purple-600/30"
              title="Download CV Document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 border border-purple-500/20 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Scrollable Sheet */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-[#0B0C14] text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header CV Identity */}
          <div className="border-b border-purple-500/20 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white">
                  Ismail Ghoneim
                </h1>
                <p className="text-purple-400 font-mono text-sm sm:text-base font-medium">
                  Software Engineer | Mobile Application Development | Backend & Embedded Systems
                </p>
              </div>

              <div className="text-xs font-mono text-slate-300 space-y-1 sm:text-right">
                <div>Email: {profileData.contactInfo.email}</div>
                <div>LinkedIn: linkedin.com/in/ismailghoneim-50b741259</div>
                <div>Location: {profileData.contactInfo.location}</div>
              </div>
            </div>

            <div className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-2 border-t border-purple-500/10 space-y-2">
              {profileData.aboutStory.slice(0, 3).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold font-['Outfit'] text-purple-300 uppercase tracking-wider flex items-center gap-2 border-b border-purple-500/20 pb-1">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <span>Education</span>
            </h2>

            {educationData.map((edu) => (
              <div key={edu.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-white">{edu.institution}</h3>
                  <span className="text-xs font-mono text-purple-400">{edu.period}</span>
                </div>
                <div className="text-xs font-semibold text-purple-300">{edu.degree}</div>
                <div className="text-xs text-slate-400">{edu.description}</div>
              </div>
            ))}
          </div>

          {/* Specialization & Experience Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold font-['Outfit'] text-purple-300 uppercase tracking-wider flex items-center gap-2 border-b border-purple-500/20 pb-1">
              <Briefcase className="w-5 h-5 text-purple-400" />
              <span>Experience & Specialization</span>
            </h2>

            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                    <div className="text-xs font-semibold text-purple-300">{exp.organization}</div>
                  </div>
                  <span className="text-xs font-mono text-purple-400">{exp.period}</span>
                </div>
                <p className="text-xs text-slate-300">{exp.description}</p>
                <div className="space-y-1 pl-3 border-l-2 border-purple-500/30">
                  {exp.responsibilities.map((r, rIdx) => (
                    <div key={rIdx} className="text-[11px] text-slate-300">• {r}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold font-['Outfit'] text-purple-300 uppercase tracking-wider flex items-center gap-2 border-b border-purple-500/20 pb-1">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span>Technical Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded-lg bg-white/5 border border-purple-500/10 space-y-1">
                  <div className="font-semibold text-purple-300 font-mono">{cat.name}:</div>
                  <div className="text-slate-300">{cat.skills.map(s => s.name).join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold font-['Outfit'] text-purple-300 uppercase tracking-wider flex items-center gap-2 border-b border-purple-500/20 pb-1">
              <Award className="w-5 h-5 text-purple-400" />
              <span>Selected Projects</span>
            </h2>

            <div className="space-y-2 text-xs">
              {projectsData.slice(0, 4).map((p) => (
                <div key={p.id} className="space-y-0.5">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{p.title} — {p.subtitle}</span>
                    <span className="text-purple-400 font-mono">[{p.category}]</span>
                  </div>
                  <div className="text-slate-300">{p.shortDescription}</div>
                  <div className="text-[11px] font-mono text-slate-400">Stack: {p.techStack.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#121422] px-6 py-3 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Curriculum Vitae</span>
          <button
            onClick={onClose}
            className="text-purple-400 hover:text-purple-300 font-semibold"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};

