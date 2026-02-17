import React, { useRef } from 'react';
import './contact.css';
import { USER_INFO } from '../../constants'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_z9pgf8o', 'template_qcjoqof', form.current, {
                publicKey: 'I2QPYeNfAtwLq63uu',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!');
                    alert("I will contact you as soon as possible. Thank you.");
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact" className="py-24 px-6 relative">
            <div className="container mx-auto">
                <div className="glass p-8 md:p-16 rounded-3xl border border-white/10 max-w-5xl mx-auto overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's <span className="text-gradient">Connect.</span></h2>
                            <p className="text-slate-400 mb-10 leading-relaxed">
                                Whether you have a question about a project, want to hire me, or just want to say hi, my inbox is always open.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email</p>
                                        <a href={`mailto:${USER_INFO.email}`} target='_blank;' className="text-lg font-medium hover:text-emerald-400 transition-colors">{USER_INFO.email}</a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-slate-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Location</p>
                                        <p className="text-lg font-medium">{USER_INFO.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex space-x-4">
                                {[
                                    { name: 'GitHub', link: `${USER_INFO.github}`, color: 'black', icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z' },
                                    { name: 'LinkedIn', link: `${USER_INFO.linkedin}`, color: 'blue', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                                    { name: 'Youtube', link: `${USER_INFO.youtube}`, color: 'red', icon: 'M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z' }
                                ].map(social => (
                                    <a key={social.name} href={social.link} target='_blank;' className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition-all">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" color={social.color}>
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                                    <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" name="visitor_name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                                    <input type="email" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" name="visitor_email" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                                <input type="text" className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" name="subject" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                                <textarea rows={4} className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" name="message" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" value="Send" className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        /*
        <section id="contact" className="py-24 px-6 relative">
            <Container>
                <Row>
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={10}>
                        <div className="contactContent">
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 contactTitle">Let's <span className="text-gradient">Connect.</span></h1>
              
                            <span className="contactDesc">Whether you have a question about a project, want to hire me, or just want to say hi, my inbox is always open.</span>
                            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                                <input type="text" className="name" name="visitor_name" placeholder="Your Name" required />
                                <input type="email" className="email" name="visitor_email" placeholder="Your Email" required />
                                <textarea className="content" rows="5" name="message" placeholder="Your Message" required />
                                
                                <Button type="submit" value="Send" variant="primary" className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-1">Send Message</Button>
                                <Button type="reset" value="Reset" variant="secondary" className="contactFormBtn">Clear</Button>
                            </form>
                        </div>

                        <div className="contactBtn">
                            <a href="https://github.com/whitneyyuen" target='_blank;'><FontAwesomeIcon color="black" icon={faGithub} /></a>
                            <a href="https://www.linkedin.com/in/whitney-yuen/" target='_blank;'><FontAwesomeIcon color="blue" icon={faLinkedin} /></a>
                            <a href="https://www.youtube.com/@whitneyney21" target='_blank;'><FontAwesomeIcon color="red" icon={faYoutube} /></a>
                        </div>
                    </Col>
                    <Col xs={12} md={1}></Col>
                </Row>
            </Container>
        </section>*/
    )
}

export default Contact;