
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Academic Journey</h2>
          <p className="text-gray-500 fira-code text-sm">CHRONOLOGICAL RESEARCH & PROFESSIONAL EVOLUTION</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block"></div>

          <div className="space-y-24">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass overflow-hidden rounded-3xl hover:border-blue-500/30 transition-all duration-500 group">
                    {exp.image && (
                      <div className="relative h-48 overflow-hidden border-b border-white/5">
                        <img
                          src={exp.image}
                          alt={`${exp.company} - ${exp.role}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div>
                          <span className="text-blue-400 fira-code text-[10px] font-bold tracking-widest block mb-1">{exp.period}</span>
                          <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-gray-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start gap-3">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-blue-500/5 rounded-full text-[10px] fira-code text-blue-300/70 border border-blue-500/10">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
