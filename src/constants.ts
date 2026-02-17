import { Experience, Skill } from './types';

export const Nav_Links = [
  { name: 'Introduction', href: '#intro' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experiences' },
  { name: 'Contact', href: '#contact' },
];

export const USER_INFO = {
  name: 'Whitney Yuen',
  title: 'Full Stack JAVA Developer',
  bio: 'Full Stack JAVA Developer passionate about building robust distributed systems and intuitive user interfaces.',
  location: 'Toronto, ON',
  email: 'whitneyyuen401@gmail.com',
  github: 'https://github.com/whitneyyuen',
  linkedin: 'https://linkedin.com/in/whitney-yuen',
  youtube: 'https://www.youtube.com/@whitneyney21'
};

export const SKILLS: Skill[] = [
  { name: 'Java', level: 100, category: 'Backend' },
  { name: 'Oracle SQL / MySQL', level: 100, category: 'Backend' },
  { name: 'Eclipse', level: 90, category: 'Tools' },
  { name: 'React', level: 88, category: 'Frontend' },
  { name: 'Python', level: 85, category: 'Backend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'MSSQL / PostgreSQL / NoSQL', level: 80, category: 'Backend' },
  { name: 'Power BI', level: 80, category: 'Tools' },
  { name: 'Docker / K8s', level: 80, category: 'Tools' },
  { name: 'Visual Studio Code', level: 80, category: 'Tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Assistant IT Manager',
    company: 'Vocational Training Council',
    period: 'Dec 2021 - Dec 2023',
    description: [
      'Transitioned a team of 10 from Waterfall to Agile development methodology successfully, designed workflows at JIRA platform, resulting increasing project delivery efficiency by 30%.',
      'Collaborated with users for business requirement, implementation and user acceptance testing.',
      'Developed a PowerBI dashboard for student admission statistics from Oracle database.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Analyst Programmer',
    company: 'Seamatch Asia Limited (Working for Vocational Training Council)',
    period: 'Oct 2018 - Dec 2021',
    description: [
      'Designed and implemented a web application for 15,000 student online applications during COVID using Java and Spring Boot with Builder design pattern, i18n supported multiple languages, regex pattern for form validation and stream for filtering.',
      'Implemented a new payment method of Fast Payment System (FPS) to Admission Systems, Trade Test Registry System and Hall Application System for over 80% usage, generated FPS QR code on different payment advices with Jasper Report, called payment service provider by Rest APIs and handled missing transaction on reconcile file.',
      'Enhanced UI/UX through responsive web design improvements for desktop and mobile versions with CSS flexbox and Javascript onresize.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Solution Developer',
    company: 'Lenovo PCCW Solutions',
    period: 'Jul 2016 - Oct 2018',
    description: [
      'Revamped and conducted user acceptance test for the external website HKCSL online shop.',
      'Enhanced enterprise web applications for an order purchase system serving 1,000,000 customers using Java and Spring framework with Builder design pattern, supported multiple languages by i18n.',
      'Developed web platforms for True Name registration for China Mobile within 2 weeks, serving 100,000 customers.'
    ]
  }
];