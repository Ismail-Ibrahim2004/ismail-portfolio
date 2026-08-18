import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all required fields.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07080D] border-t border-purple-500/20">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Let's Build <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Something Meaningful</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Have an idea, project, or opportunity? I'd be happy to connect and discuss it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 rounded-3xl border border-purple-500/30 bg-[#0F111A]/90 space-y-6">
              
              <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                Contact & Connect
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Feel free to reach out via direct email or connect through LinkedIn.
              </p>

              {/* Direct CTA Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`mailto:${profileData.contactInfo.email}`}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>Email Me</span>
                  </div>
                  <span className="text-xs font-mono opacity-80">{profileData.contactInfo.email}</span>
                </a>

                <a
                  href={profileData.contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#0B0C14] hover:bg-purple-950/50 border border-purple-500/40 text-purple-300 font-semibold text-sm transition-all"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5" />
                    <span>Connect on LinkedIn</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-purple-400" />
                </a>
              </div>

              <div className="space-y-4 pt-4 border-t border-purple-500/20 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-purple-500/20">
                  <div className="p-2.5 rounded-lg bg-purple-950/70 border border-purple-500/30 text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">Location</div>
                    <div className="text-white font-semibold">{profileData.contactInfo.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-purple-500/20">
                  <div className="p-2.5 rounded-lg bg-purple-950/70 border border-purple-500/30 text-purple-400">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">GitHub</div>
                    <a href={profileData.contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 font-semibold">
                      github.com/Ismail-Ibrahim2004
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 bg-[#0F111A]/90 space-y-6 shadow-2xl"
            >
              <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 font-mono animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/50 text-rose-300 text-xs sm:text-sm flex items-center gap-3 font-mono">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-purple-300 font-medium">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-purple-300 font-medium">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-purple-300 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Project / Engineering Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-purple-300 font-medium">Message *</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea, project, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-purple-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-purple-700 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold py-3.5 rounded-xl shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.01] active:scale-95 text-sm disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

