import React from 'react';
import { SKILLS } from '../../constants';
import './skills.css';

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-16 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Core Skills</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {SKILLS.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-medium text-slate-300">{skill.name}</span>
                                        <span className="text-slate-500">{skill.level}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-200 rounded-full transition-all duration-1000"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;