
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Research Terminal Initialized. I am Wenyu's Digital Research Twin. Ask me about flood modeling, PhD goals, or technical methodologies." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedQueries = [
    "Tell me about LLM-ABM research",
    "What is your PhD focus at Lehigh?",
    "Recent research at CCMR?",
    "Technical toolkit?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (userMsg: string) => {
    if (!userMsg.trim() || isLoading) return;
    
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await geminiService.chatWithAI(userMsg, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "ERROR: Connection timeout. Research data repository unreachable." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight">Research Intelligence</h2>
          <p className="text-slate-500 fira-code text-[10px] tracking-[0.3em] uppercase">Digital Twin Agent v3.0 / Gemini Pro 3</p>
        </div>

        <div className="glass rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl flex flex-col h-[650px]">
          {/* 終端頂部條 */}
          <div className="p-5 border-b border-white/5 bg-slate-900/50 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-black text-sm text-white shadow-lg">WC</div>
                <div>
                   <h3 className="text-sm font-bold text-slate-200 tracking-tight">Wenyu_Agent.sys</h3>
                   <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[9px] text-slate-500 fira-code font-medium">STATUS: ANALYZING_REPOSITORY</span>
                   </div>
                </div>
             </div>
             <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
             </div>
          </div>

          {/* 對話流 */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-slate-800/50 text-slate-300 border border-white/5 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/30 border border-white/5 px-6 py-4 rounded-2xl flex gap-3 items-center">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="fira-code text-[10px] text-slate-500 uppercase tracking-widest">Processing Query...</span>
                </div>
              </div>
            )}
          </div>

          {/* 指令輸入 */}
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(input); }} className="p-6 bg-slate-900/80 border-t border-white/5">
            <div className="flex gap-3 p-1.5 bg-slate-950/50 rounded-2xl border border-white/10 focus-within:border-blue-500/50 transition-colors group">
              <span className="pl-4 flex items-center text-slate-600 fira-code text-sm group-focus-within:text-blue-500">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my research publications or methodology..."
                className="flex-1 bg-transparent border-none rounded-xl px-2 py-3 text-sm text-slate-200 focus:outline-none placeholder:text-slate-700 fira-code"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-xl font-bold text-xs transition-all disabled:opacity-30 flex items-center gap-2"
              >
                EXECUTE
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
