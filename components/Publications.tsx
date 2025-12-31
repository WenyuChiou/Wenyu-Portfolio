
import React from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
    return (
        <section id="publications" className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-end gap-6 mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">Publications</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full mb-2"></div>
                </div>

                <div className="space-y-6">
                    {PUBLICATIONS.map((pub) => (
                        <div key={pub.id} className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors">
                                        {pub.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-3 text-sm fira-code text-gray-400">
                                        <span className="bg-white/5 px-2 py-1 rounded">{pub.conference}</span>
                                        <span className="text-blue-400">[{pub.year}]</span>
                                    </div>
                                </div>

                                <a
                                    href={pub.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 flex items-center gap-2 text-sm font-bold fira-code bg-white/5 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg border border-white/10 transition-all"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
