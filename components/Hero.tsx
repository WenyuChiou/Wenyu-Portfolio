
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* 背景光暈 */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse-slow delay-1000"></div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* 帶有發光環的頭像 */}
        <div className="mb-12 flex justify-center">
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500 via-transparent to-indigo-500 shadow-[0_0_50px_rgba(59,130,246,0.15)] group transition-all duration-500 hover:scale-105">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-white/5 bg-slate-900 overflow-hidden relative">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Wenyu+Chiou&background=0f172a&color=3b82f6&size=512&bold=true`;
                }}
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-white/20"></div>
          </div>
        </div>

        {/* 狀態標籤 */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold text-blue-400 tracking-[0.2em] uppercase fira-code">Research Active • Lehigh University</span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85] text-white">
          <span className="block opacity-90">WENYU</span>
          <span className="gradient-text">CHIOU</span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Advancing <span className="text-white font-medium">Flood Risk Adaptation</span> through <span className="text-blue-400 fira-code">Computational ABM</span> and <span className="text-indigo-400 fira-code">LLM Intelligence</span>.
        </p>

        {/* 附屬機構 - 精簡且現代 */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-16 px-4 opacity-60 hover:opacity-100 transition-opacity duration-700">
          <div className="flex flex-col items-center gap-4 group">
            <img
              src="assets/images/Catastophy Modeling Temporary.jpg"
              alt="CCMR"
              className="h-10 md:h-14 grayscale group-hover:grayscale-0 transition-all duration-300 rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="text-[9px] fira-code text-slate-500 tracking-widest group-hover:text-blue-400 transition-colors uppercase">Catastrophe Modeling & Resilience</span>
          </div>
          <div className="flex flex-col items-center gap-4 group">
            <img
              src="assets/images/CWAS.png"
              alt="CWAS"
              className="h-10 md:h-14 grayscale group-hover:grayscale-0 transition-all duration-300"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            <span className="text-[9px] fira-code text-slate-500 tracking-widest group-hover:text-indigo-400 transition-colors uppercase">CWAS Affiliated</span>
          </div>
        </div>

        {/* 行動按鈕 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-4 bg-white text-slate-950 hover:bg-blue-50 rounded-full font-bold transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-3 group"
          >
            Download CV
            <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </a>
          <a
            href="#ai-chat"
            className="w-full sm:w-auto px-12 py-4 glass text-white hover:bg-white/10 rounded-full font-bold transition-all border border-white/10"
          >
            Inquire AI Agent
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
