import React from 'react';
import './intro.css';
import { Col, Container, Row } from 'react-bootstrap';
import { USER_INFO } from '../../constants';
import imageLink from '../../assets/selfie.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    return (
        <section id="intro" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px] -z-10"></div>

            <div className="text-center max-w-4xl mx-auto">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest animate-fade-in">
                    Available for new opportunities
                </div>

                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Hi, I'm <span className="text-white font-medium">{USER_INFO.name}</span>. I build high-performance web applications and integrate cutting-edge AI to solve real-world problems.
                </p>
            </div>

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


            {/*
            <div className="introContent">
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <p className="selfIntro">
                                <img src={imageLink} alt="profile" className="profile" />
                                <span id="name">Whitney Yuen</span>
                                <span id="title">Full Stack JAVA Developer</span>
                                <span id="desc">I am a skilled Full Stack JAVA Developer with experience in proficient both frontend and backend web application development.</span>
                            </p>
                        </Col>
                        <Col xs={12} md={8}>
                            <div id="exp">
                                <div className="job">
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={2}>
                                                <img src="https://media.licdn.com/dms/image/v2/C560BAQH82QW5VN3NCA/company-logo_100_100/company-logo_100_100/0/1630662496647/vocational_training_council_logo?e=1744243200&v=beta&t=lhFEMWH1XXUAbzDf9ff9AxLDXffhl9jKWYm8uznhLH4" />
                                            </Col>
                                            <Col xs={12} md={10}>
                                                <div className="jobPeriod">December 2021 - December 2023</div>
                                                <div className="jobTitle">Assistant IT Manager</div>
                                                <div className="jobCompany">Vocational Training Council</div>
                                                <div className="jobDuty">
                                                    <ul>
                                                        <li>Managed a team of 10 people, successfully migrating from a Waterfall to an Agile environment.</li>
                                                        <li>Implemented a new payment method of Fast Payment System (FPS) to Hall Application System for over 80% usage.</li>
                                                        <li>Modified on academic qualifications for Admission Systems due to update from HKEAA.</li>
                                                        <li>Performed system, workflow and operation designs on Student Admission operation, Hall Admission System and Trade Test Registry System.</li>
                                                        <li>Arranged upgrade external libraries, regular server patching, security code scanning and drill on disaster recovery to fulfill ISO27001 requirements for Student Admission operation, Hall Admission System and Trade Test Registry System.</li>
                                                        <li>Maintained quality performance on whole ITSD department with over 95% satisfactory.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="jobSkills">
                                                    <ul>
                                                        <li className="jobSkill">JAVA</li>
                                                        <li className="jobSkill">Spring MVC 5</li>
                                                        <li className="jobSkill">Spring Security</li>
                                                        <li className="jobSkill">Struts 2</li>
                                                        <li className="jobSkill">Oracle SQL</li>
                                                        <li className="jobSkill">PL/SQL</li>
                                                        <li className="jobSkill">MySQL</li>
                                                        <li className="jobSkill">Hibernate 5</li>
                                                        <li className="jobSkill">JIRA</li>
                                                        <li className="jobSkill">Git</li>
                                                        <li className="jobSkill">jsf</li>
                                                        <li className="jobSkill">Jenkins</li>
                                                        <li className="jobSkill">Power BI</li>
                                                        <li className="jobSkill">Eclipse</li>
                                                        <li className="jobSkill">VS Code</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <hr />
                                <div className="job">
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={2}>
                                                <img src="https://media.licdn.com/dms/image/v2/C4E0BAQGKU6iwo5Jlxg/company-logo_100_100/company-logo_100_100/0/1631352633255?e=1744243200&v=beta&t=EiRaA2xBvGjM30wS8zDR79g2a8jkCVm5lLe99gjQAVg" />
                                            </Col>
                                            <Col xs={12} md={10}>
                                                <div className="jobPeriod">October 2018 - December 2021</div>
                                                <div className="jobTitle">Analyst Programmer</div>
                                                <div className="jobCompany">Seamatch Asia Limited <br />(work for Vocational Training Council)</div>
                                                <div className="jobDuty">
                                                    <ul>
                                                        <li>Designed and implemented a web application for 15,000 student online applications during COVID.</li>
                                                        <li>Implemented a new payment method of Fast Payment System (FPS) to Admission Systems and Trade Test Registry System for over 80% usage.</li>
                                                        <li>Integrated security solutions (Queue-IT) into web applications for enhanced protection.</li>
                                                        <li>Provided technical guidance with vendor for Admission Systems.</li>
                                                        <li>Supported for Admission Systems.</li>
                                                        <li>Arranged and tender for organizing IT training courses for all VTC staffs.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="jobSkills">
                                                    <ul>
                                                        <li className="jobSkill">JAVA</li>
                                                        <li className="jobSkill">Spring MVC 3</li>
                                                        <li className="jobSkill">Spring Security</li>
                                                        <li className="jobSkill">Struts 2</li>
                                                        <li className="jobSkill">Oracle SQL</li>
                                                        <li className="jobSkill">MySQL</li>
                                                        <li className="jobSkill">Hibernate 3</li>
                                                        <li className="jobSkill">IBatis</li>
                                                        <li className="jobSkill">TFS</li>
                                                        <li className="jobSkill">jsf</li>
                                                        <li className="jobSkill">C#</li>
                                                        <li className="jobSkill">Jenkins</li>
                                                        <li className="jobSkill">AWS</li>
                                                        <li className="jobSkill">Eclipse</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <hr />
                                <div className="job">
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={2}>
                                                <img src="https://media.licdn.com/dms/image/v2/D560BAQFVNCmPepGAWQ/company-logo_100_100/company-logo_100_100/0/1695692795458/pccw_solutions_logo?e=1744243200&v=beta&t=PHd62pWXpiCvET7yTOWaqtrL31R9XpCY4aHgFi3Pga0" />
                                            </Col>
                                            <Col xs={12} md={10}>
                                                <div className="jobPeriod">July 2016 - October 2018</div>
                                                <div className="jobTitle">Solution Developer</div>
                                                <div className="jobCompany">Lenovo PCCW Solutions</div>
                                                <div className="jobDuty">
                                                    <ul>
                                                        <li>Revamped and conducted user acceptance test for the external website HKCSL online shop.</li>
                                                        <li>Enhanced enterprise web applications for order purchase system of HKCSL/1O1O.</li>
                                                        <li>Developed web platforms for True Name registration for China Mobile.</li>
                                                        <li>Created a Customer Relationship Management platform.</li>
                                                        <li>Setup data for order purchase system of HKCSL/1O1O.</li>
                                                        <li>Created prototypes of ECR Terminal interface.</li>
                                                        <li>Supported for order purchase system of HKCSL/1O1O.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="jobSkills">
                                                    <ul>
                                                        <li className="jobSkill">JAVA</li>
                                                        <li className="jobSkill">Oracle SQL</li>
                                                        <li className="jobSkill">jsp</li>
                                                        <li className="jobSkill">jstl</li>
                                                        <li className="jobSkill">Spring MVC 3</li>
                                                        <li className="jobSkill">Bootstrap</li>
                                                        <li className="jobSkill">jQuery</li>
                                                        <li className="jobSkill">Javascript</li>
                                                        <li className="jobSkill">CSS</li>
                                                        <li className="jobSkill">MyBatis</li>
                                                        <li className="jobSkill">AJAX</li>
                                                        <li className="jobSkill">JSON</li>
                                                        <li className="jobSkill">Angular 5</li>
                                                        <li className="jobSkill">Typescript</li>
                                                        <li className="jobSkill">NgRx</li>
                                                        <li className="jobSkill">Node.JS</li>
                                                        <li className="jobSkill">Express.JS</li>
                                                        <li className="jobSkill">Git</li>
                                                        <li className="jobSkill">SourceTree</li>
                                                        <li className="jobSkill">Tortoise SVN</li>
                                                        <li className="jobSkill">Jenkins</li>
                                                        <li className="jobSkill">JMeter</li>
                                                        <li className="jobSkill">Eclipse</li>
                                                        <li className="jobSkill">VS Code</li>
                                                        <li className="jobSkill">FileZilla</li>
                                                        <li className="jobSkill">Putty</li>
                                                        <li className="jobSkill">VB</li>
                                                        <li className="jobSkill">.NET</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <hr />
                                <div className="job">
                                    <Container>
                                        <Row>
                                            <Col xs={12} md={2}>
                                                <img src="https://media.licdn.com/dms/image/v2/C4E0BAQH4YoQ1L_piMg/company-logo_100_100/company-logo_100_100/0/1630652114876/hkust_logo?e=1744243200&v=beta&t=Id4JdMWJQz_ZM4Oi62hCEU7s9uZEOO6P2jvr-YwraDo" />
                                            </Col>
                                            <Col xs={12} md={10}>
                                                <div className="jobPeriod">August 2015 - July 2016</div>
                                                <div className="jobTitle">Student Worker</div>
                                                <div className="jobCompany">The Hong Kong University of Science and Technology</div>
                                                <div className="jobDuty">
                                                    <ul>
                                                        <li>Assisted ITSC website migration project</li>
                                                        <li>Enforced rules and regulations of the Barns</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="jobSkills">
                                                    <ul>
                                                        <li className="jobSkill">HTML</li>
                                                        <li className="jobSkill">JQuery</li>
                                                        <li className="jobSkill">CSS</li>
                                                        <li className="jobSkill">Bootstrap</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>*/}
        </section>
    )
}

export default Intro;