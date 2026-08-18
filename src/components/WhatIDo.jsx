import React from 'react';
import { Smartphone, Code2, Cpu, Server, BrainCircuit, ArrowUpRight } from 'lucide-react';

export const WhatIDo = () => {
  const verticals = [
    {
      title: "Mobile Application Development",
      icon: Smartphone,
      color: "from-purple-500 to-indigo-500",
      description: "Building cross-platform mobile applications in Flutter applying modern software engineering practices such as Clean Architecture and BLoC.",
      highlights: ["Flutter Cross-Platform", "Clean Architecture Pattern", "BLoC State Management", "User-Centric UI Layouts"]
    },
    {
      title: "Software Engineering",
      icon: Code2,
      color: "from-violet-500 to-purple-500",
      description: "Developing structured software solutions, object-oriented applications, and scalable computer science foundations.",
      highlights: ["Java & JavaFX Applications", "C / C++ Programs", "Object-Oriented Design", "Data Structures & Algorithms"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-indigo-500 to-cyan-500",
      description: "Architecting server-side logic, relational database schemas, and API solutions through academic and personal software projects.",
      highlights: ["PHP & Laravel Architecture", "MySQL Database Design", "RESTful API Development", "Data Persistence"]
    },
    {
      title: "Embedded Systems",
      icon: Cpu,
      color: "from-cyan-500 to-teal-500",
      description: "Building hardware-software integrated projects with microcontrollers, sensor arrays, and Linux edge devices.",
      highlights: ["Arduino Microcontrollers", "Raspberry Pi Single-Board Computers", "Embedded C / C++ Firmware", "Hardware Sensor Interfacing"]
    },
    {
      title: "Artificial Intelligence",
      icon: BrainCircuit,
      color: "from-pink-500 to-purple-500",
      description: "Exploring computer vision pipelines, image processing libraries, and AI models in Python for practical project applications.",
      highlights: ["Python AI Ecosystem", "OpenCV Vision Pipelines", "MediaPipe Landmark Tracking", "Edge ML Exploration"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#0A0B10] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <span>Specializations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-white">
            Professional <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Positioning</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Primary focus on software engineering with supporting specializations across mobile, backend, embedded, and AI domains.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-purple-500/20 bg-[#0F111A]/90 flex flex-col justify-between"
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${v.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:border-purple-400 transition-all">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-purple-300 transition-colors">
                  {v.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {v.description}
                </p>

                {/* Highlights List */}
                <div className="pt-2 border-t border-purple-500/10 space-y-1.5 font-mono text-[11px] text-slate-400">
                  {v.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-purple-400 font-medium">
                <span>Specialization Domain</span>
                <span>0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

