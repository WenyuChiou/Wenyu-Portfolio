
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            My research toolkit spans from advanced statistical modeling and geospatial analysis to modern computational simulations and data engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((cat, idx) => (
            <div key={cat.category} 
                 className="glass p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 group relative">
              <div className="absolute top-0 right-0 p-6 text-6xl font-bold text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium hover:bg-blue-500/10 hover:text-blue-400 transition-all cursor-default border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
