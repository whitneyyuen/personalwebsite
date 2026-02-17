import React from 'react';
import './about.css';
import { USER_INFO } from '../../constants';
import imageLink from '../../assets/selfie.JPG';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-16 items-center">
                    <div className="relative">
                        <img src={imageLink} alt="Whitney Yuen profile" className="profile" />
                        {/*<div className="w-full aspect-[3/4] rounded-3xl overflow-hidden glass p-3 border border-white/10 group">
                                        <img
                                            src={imageLink}
                                            alt="Whitney Yuen Profile"
                                            className="profile w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>*/}
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {USER_INFO.bio}
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-10">
                            I am a Software Engineer based in Toronto. With a strong foundation in backend development and experience leading Agile teams, I specialize in building robust enterprise solutions. I enjoy the intersection of clean code, efficient algorithms, and seamless user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;