import React from 'react';
import './experiences.css';
import { EXPERIENCES } from '../../constants';

const Experiences = () => {
    return (
        <section id="experiences" className="py-24 px-6 bg-slate-900/30">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-gradient">Experiences</span></h2>
                    <p className="text-slate-400">The journey through tech companies.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-emerald-600/50 before:via-white/20 before:to-transparent">
                    {EXPERIENCES.map((exp, idx) => (
                        <div key={exp.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-slate-950 z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

                            <div className="w-full md:w-1/2 pl-8 md:pl-0">
                                <div className={`glass p-8 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all duration-300 ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 block">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                                    <p className="text-emerald-400/80 font-medium mb-4">{exp.company}</p>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start text-sm text-slate-400 leading-relaxed">
                                                <span className="text-emerald-500 mr-2 mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden md:block w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experiences;