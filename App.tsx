
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AIChat from './components/AIChat';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/50">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-32 px-4 max-w-5xl mx-auto">
          <div className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
             <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] bg-gradient-to-br from-blue-500 to-indigo-600 flex-shrink-0 flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
                  {PERSONAL_INFO.name.charAt(0)}
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-bold mb-6 tracking-tight">Research Profile</h2>
                  <p className="text-xl text-gray-400 leading-relaxed mb-8">
                    {PERSONAL_INFO.bio}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> LinkedIn
                    </a>
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> GitHub
                    </a>
                    <a href={PERSONAL_INFO.orcid} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> ORCID
                    </a>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> Email
                    </a>
                  </div>
                </div>
             </div>
          </div>
        </section>

        <Projects />
        <Experience />
        <Skills />
        <AIChat />
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
           <p className="mb-2">© 2025 {PERSONAL_INFO.name} | Lehigh University</p>
           <p className="fira-code text-[10px] opacity-30 uppercase tracking-widest">Hydrology & Risk Analysis / AI Driven Modeling / Data Science</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
