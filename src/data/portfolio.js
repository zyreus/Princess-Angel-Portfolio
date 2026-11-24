import graphicDesignSampleTwo from '../assets/graphic-design-sample-2.png'
import graphicDesignSampleThree from '../assets/graphic-design-sample-4.png'
import graphicDesignSampleFour from '../assets/graphic-design-sample-5.png'
import graphicDesignSampleSix from '../assets/graphic-design-sample-6.png'
import graphicDesignSampleSeven from '../assets/graphic-design-sample-7.png'
import medicalTriageDashboard from '../assets/medical-triage-dashboard.png'
import projectDashboard from '../assets/mabuhightrack-dashboard.png'
import photographySampleFour from '../assets/photography-sample-4.png'

export const roles = [
  'Administrative Support',
  'Data Management',
  'Digital Operations',
  'IT Solutions',
  'Office Operations',
]

export const profile = {
  name: 'Princess Angel R. Paslot',
  email: 'princessangel.paslot@gmail.com',
  location: 'Davao del Norte, Philippines',
  tagline: 'Administrative Support | Data Management | Digital Operations | IT Solutions',
  summary:
    'I am an Information Technology graduate with a strong interest in administrative operations, data management, and digital solutions. I bring together technical knowledge, organizational skills, and attention to detail to support efficient workflows and business operations.',
  github: 'https://github.com/princesspaslot',
  linkedin: 'https://www.linkedin.com/in/princess-angel-paslot-03568b315/',
  facebook: 'https://www.facebook.com/yourprincess.angel',
}

export const stats = [
  { label: 'IT Systems Built', value: '4+' },
  { label: 'Skill Categories', value: '5' },
  { label: 'Certifications', value: '7+' },
  { label: 'Availability', value: 'Open' },
]

export const skillCategories = [
  {
    category: 'Administrative & Office Support',
    icon: 'Briefcase',
    tools: [
      'Document Preparation',
      'File & Records Organization',
      'Administrative Coordination',
      'Scheduling & Task Management',
      'Report Preparation',
      'Business Correspondence',
    ],
  },
  {
    category: 'Data Management & Documentation',
    icon: 'Database',
    tools: [
      'Data Entry',
      'Microsoft Excel',
      'Google Sheets',
      'Data Organization',
      'Database Management',
      'Digital Record Keeping',
      'Information Management',
    ],
  },
  {
    category: 'HR & Operations Support',
    icon: 'Users',
    tools: [
      'Contractor Information Tracking',
      'Personnel Records Organization',
      'Recruitment Coordination Support',
      'Contractor Pool Monitoring',
      'Capacity Tracking',
      'Operational Reporting',
    ],
  },
  {
    category: 'Digital & Creative Operations',
    icon: 'Monitor',
    tools: [
      'WordPress Content Management',
      'Website Administration',
      'Social Media Management',
      'Content Scheduling',
      'Canva',
      'Digital Content Organization',
    ],
  },
  {
    category: 'Information Technology',
    icon: 'Code',
    tools: [
      'HTML & CSS',
      'JavaScript',
      'PHP & Laravel',
      'MySQL',
      'React.js',
      'Bootstrap',
      'Git & GitHub',
    ],
  },
]

// Legacy skills array kept for backward compatibility
export const skills = [
  { category: 'Administrative & Office Support', level: null, tools: ['Document Preparation', 'File & Records Organization', 'Administrative Coordination', 'Scheduling & Task Management', 'Report Preparation', 'Business Correspondence'] },
  { category: 'Data Management', level: null, tools: ['Data Entry', 'Microsoft Excel', 'Google Sheets', 'Data Organization', 'Database Management', 'Digital Record Keeping'] },
  { category: 'HR & Operations Support', level: null, tools: ['Contractor Information Tracking', 'Personnel Records Organization', 'Recruitment Coordination', 'Operational Reporting'] },
  { category: 'Digital & Creative Operations', level: null, tools: ['WordPress Content Management', 'Website Administration', 'Social Media Management', 'Canva', 'Content Scheduling'] },
  { category: 'Information Technology', level: null, tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'React.js', 'Git & GitHub'] },
]

export const projectCategories = [
  'All',
  'Administrative & Business Systems',
  'Information Management Systems',
  'Web & Software Development',
  'Creative Works',
]

const graphicDesignReviewLinks = [
  { label: 'Graphic Design 2', url: graphicDesignSampleThree },
  { label: 'Graphic Design 3', url: graphicDesignSampleFour },
  { label: 'Graphic Design 4', url: graphicDesignSampleSix },
  { label: 'Graphic Design 5', url: graphicDesignSampleSeven },
]

const videoReviewLinks = [
  { label: 'Video Edit 1', url: 'https://drive.google.com/file/d/1QQ1wOE3oFZuYJVHqZtzyWXBpjx9U5FhF/view?usp=drive_link' },
  { label: 'Video Edit 2', url: 'https://drive.google.com/file/d/10kSXOTRBVNFB-oJDiknDZ6W6JIXPiUj1/view?t=3.995781' },
  { label: 'Video Edit 3', url: 'https://drive.google.com/file/d/12Qde7pPZe7ZH33upBHhRxvwIQv1M_t-k/view' },
]

const pictureReviewLinks = [
  { label: 'Picture Folder 2', url: 'https://drive.google.com/drive/folders/10eGi-DSYmEZMACKuzP87WTcCCUyhLQ3d?usp=sharing' },
  { label: 'Picture Folder 3', url: 'https://drive.google.com/drive/folders/10DDAhnCJRhVWTlqTVwOsDGK1F2TT6dyc?usp=drive_link' },
  { label: 'Picture Folder 4', url: 'https://drive.google.com/drive/folders/10k-UPWPno_gARdFs3irYuunygJDUQvgA' },
  { label: 'Picture Folder 5', url: 'https://drive.google.com/drive/folders/1-OsIoTTgRWGUr18m3UKPYHRvYFUobnlH' },
]

export const projects = [
  {
    id: 'mabuhightrack',
    title: 'MabuHighTrack',
    role: 'Project Manager, System Analyst',
    description: 'A student performance tracking system with analytics dashboards and AI-powered prediction insights. Supports role-based access, academic monitoring, and data-driven decision-making for school administrators.',
    category: 'Information Management Systems',
    image: projectDashboard,
    stack: ['React', 'Node.js', 'Analytics', 'AI Prediction'],
    stats: ['Predictive Insights', 'Role-based Dashboard', 'Academic Monitoring'],
    liveUrl: '#',
    githubUrl: 'https://github.com/princesspaslot',
  },
  {
    id: 'medical-triage',
    title: 'Medical Triage System',
    role: 'Developer, Analyst',
    description: 'A patient prioritization platform for efficient healthcare queue management and response. Automates triage logic, tracks patient records, and helps staff prioritize based on urgency.',
    category: 'Administrative & Business Systems',
    image: medicalTriageDashboard,
    stack: ['Filament-Laravel', 'PHP', 'MySQL', 'Healthcare'],
    stats: ['Priority rules', 'Queue management', 'Patient records'],
    liveUrl: '#',
    githubUrl: 'https://github.com/luvjenni/MedTriage',
  },
  {
    id: 'graphic-design-collection',
    title: 'Graphic Design Collection',
    role: 'Graphic Designer',
    description: 'A collection of social media graphics, posters, layouts, and visual brand pieces created for clear communication and professional presentation.',
    category: 'Creative Works',
    image: graphicDesignSampleSix,
    stack: ['Canva', 'Photoshop', 'Layouting', 'Typography'],
    stats: ['Poster designs', 'Social graphics', 'Visual hierarchy'],
    liveUrl: graphicDesignSampleTwo,
    liveLabel: 'Review Designs',
    reviewLinks: graphicDesignReviewLinks,
  },
  {
    id: 'video-editing-showcase',
    title: 'Video Presentation & Editing',
    role: 'Video Editor, Presenter',
    description: 'Edited and presented video content with storytelling, pacing, clean visuals, and audience-focused delivery. Demonstrates communication and content production skills.',
    category: 'Creative Works',
    image: 'https://drive.google.com/thumbnail?id=10kSXOTRBVNFB-oJDiknDZ6W6JIXPiUj1&sz=w1200',
    stack: ['CapCut', 'Premiere Pro', 'Storytelling', 'Presentation'],
    stats: ['Video editing', 'On-camera delivery', 'Creative direction'],
    liveUrl: 'https://drive.google.com/file/d/1Qso_uoCOJKIJ0gpMwfeEaW4n6XvqIgyY/view?usp=drive_link',
    liveLabel: 'Review Videos',
    reviewLinks: videoReviewLinks,
  },
  {
    id: 'photography-collection',
    title: 'Pictures & Photography',
    role: 'Photographer, Photo Editor',
    description: 'A photography collection focused on composition, meaningful moments, lighting, and polished image editing.',
    category: 'Creative Works',
    image: photographySampleFour,
    stack: ['Photography', 'Photo Editing', 'Composition', 'Lighting'],
    stats: ['Portraits', 'Event moments', 'Edited visuals'],
    liveUrl: 'https://drive.google.com/drive/folders/1-PZralj3lNZ_Vs65zwIQSzIGJ-8Y1T6h?usp=sharing',
    liveLabel: 'Review Pictures',
    reviewLinks: pictureReviewLinks,
  },
]

export const certificates = [
  {
    id: 'level-app-top-15-finalist',
    title: 'Top 15 Finalist - Level App 2.0 Final Pitching Competition',
    issuer: 'Davao Del Norte State College',
    date: 'May 16, 2025',
    category: 'Awards & Recognition',
    filters: ['Awards & Recognition', 'Information Technology'],
    image: '/certificates/level-app-top-15-finalist.png',
    description:
      'Awarded to Thryvex for reaching the Top 15 finalists in the Level App 2.0 final pitching competition, recognizing creative vision, presentation, and entrepreneurial determination.',
    details: ['Top 15 finalist recognition', 'Level App 2.0 final pitching competition', 'Highlighted startup creativity, presentation, and entrepreneurship'],
    skills: ['Startup Pitching', 'Entrepreneurship', 'Presentation', 'Innovation'],
    featured: true,
  },
  {
    id: 'level-app-participation',
    title: 'Level App 2.0 Certificate of Participation',
    issuer: 'Davao Del Norte State College',
    date: 'May 16, 2025',
    category: 'Awards & Recognition',
    filters: ['Awards & Recognition', 'Information Technology'],
    image: '/certificates/level-app-participation.png',
    description:
      'Presented to Thryvex for active participation and exemplary efforts in showcasing a startup project during the Level App 2.0 event.',
    details: ['Participated in Level App 2.0', 'Showcased a startup project through pitching and booth exhibit', 'Recognized for innovation in IT and technopreneurship'],
    skills: ['Technopreneurship', 'Startup Showcase', 'Team Collaboration', 'Innovation'],
    featured: true,
  },
  {
    id: 'internship-etiquette',
    title: 'Test Interpretation, 3K Session "Kwentuhan, Kumustahan at Kahalagahan" and Talk on Internship Etiquette',
    issuer: 'Davao Del Norte State College',
    date: 'September 19, 2025',
    category: 'Seminar / Internship Training',
    filters: ['Seminars', 'Professional Development'],
    image: '/certificates/internship-etiquette.png',
    description:
      'A professional development certificate covering test interpretation, wellness-centered student conversations, and internship etiquette preparation.',
    details: ['3K Session: Kwentuhan, Kumustahan at Kahalagahan', 'Talk on Internship Etiquette', 'Focused on communication, professionalism, and student readiness'],
    skills: ['Internship Etiquette', 'Communication', 'Professional Development', 'Student Training'],
    featured: true,
  },
  {
    id: 'color-theory-graphic-design',
    title: 'The Power of Color in Graphic Design: Theory, Psychology, and Practice',
    issuer: 'Davao Del Norte State College',
    date: 'November 5, 2025',
    category: 'Graphic Design',
    filters: ['Graphic Design'],
    image: '/certificates/color-theory-graphic-design.png',
    description:
      'A graphic design certificate focused on color theory, visual psychology, creative decision-making, and practical design application.',
    details: ['Covered color theory and psychology', 'Focused on visual design principles', 'Strengthened creative layout and design judgment'],
    skills: ['Graphic Design', 'Color Theory', 'Visual Design', 'Creativity'],
    featured: true,
  },
  {
    id: 'journey-it-specialist',
    title: 'Journey from Science Practitioner to Information Technology Specialist',
    issuer: 'Davao Del Norte State College',
    date: 'October 17, 2025',
    category: 'Information Technology',
    filters: ['Information Technology', 'Professional Development'],
    image: '/certificates/journey-it-specialist.png',
    description:
      'A career development certificate highlighting the professional journey from science practice toward information technology specialization.',
    details: ['Focused on IT career growth', 'Covered professional transition into technology', 'Highlighted industry awareness and long-term development'],
    skills: ['Information Technology', 'Career Development', 'Tech Industry', 'Professional Growth'],
    featured: true,
  },
  {
    id: 'ethical-hacker-cisco',
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: 'December 4, 2025',
    category: 'Cybersecurity',
    filters: ['Seminars', 'Cybersecurity'],
    image: '/certificates/ethical-hacker-cisco.png',
    description:
      'A Cisco Networking Academy cybersecurity certificate introducing ethical hacking concepts, network defense awareness, and security fundamentals.',
    details: ['Awarded by Cisco Networking Academy', 'Focused on ethical hacking fundamentals', 'Covered cybersecurity and network security concepts'],
    skills: ['Ethical Hacking', 'Cybersecurity', 'Network Security', 'Cisco Networking'],
    featured: true,
  },
  {
    id: 'cisco-packet-tracer',
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    date: 'January 28, 2024',
    category: 'Networking',
    filters: ['Seminars', 'Networking', 'Information Technology'],
    image: '/certificates/cisco-packet-tracer.png',
    description:
      'Awarded to Paslot Princess Angel for successfully completing Getting Started with Cisco Packet Tracer through the Cisco Networking Academy program.',
    details: ['Awarded by Networking Academy', 'Completion date: January 28, 2024', 'Cisco Networking Academy program'],
    skills: ['Cisco Packet Tracer', 'Networking', 'Network Simulation', 'Cisco Networking'],
    featured: true,
  },
]

export const certificateFilters = [
  'All',
  'Seminars',
  'Information Technology',
  'Graphic Design',
  'Awards & Recognition',
]

export const workExperience = [
  {
    id: 'creativeblox',
    company: 'CreativeBlox Multimedia Services',
    role: 'Junior Graphic Designer / Digital Operations Support',
    type: 'Independent Contractor',
    period: 'May 4, 2026 – Present',
    responsibilities: [
      'Prepared weekly reports and organized internal documentation.',
      'Maintained contractor pool trackers and specialty records.',
      'Assisted in contractor pre-qualification and coordination processes.',
      'Organized social media content and posting schedules.',
      'Assisted with WordPress content management and website updates.',
      'Reviewed internal policies and employee/contractor documentation.',
      'Supported digital operations and administrative coordination.',
    ],
    skills: ['Documentation', 'Coordination', 'WordPress', 'Social Media', 'Records Management', 'Reporting'],
  },
  {
    id: 'ojt',
    company: 'On-the-Job Training (OJT)',
    role: 'OJT Team Leader / System Developer',
    type: 'Academic Internship',
    period: '2025',
    responsibilities: [
      'Led team coordination, task distribution, and project delivery.',
      'Developed and contributed to the Medical Triage System.',
      'Prepared documentation, progress reports, and technical records.',
      'Coordinated with supervisors and stakeholders on project requirements.',
      'Applied knowledge in system analysis, development, and testing.',
    ],
    skills: ['Team Leadership', 'System Development', 'Documentation', 'Project Management', 'Communication'],
  },
]

export const toolsAndTechnologies = [
  {
    group: 'Office Productivity',
    items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Google Docs', 'Google Sheets'],
  },
  {
    group: 'Design & Content',
    items: ['Canva', 'WordPress', 'Adobe Photoshop'],
  },
  {
    group: 'Development',
    items: ['PHP', 'Laravel', 'JavaScript', 'React.js', 'MySQL', 'HTML & CSS'],
  },
  {
    group: 'Collaboration & Productivity',
    items: ['GitHub', 'Git', 'Vercel', 'Google Drive'],
  },
]

export const achievements = [
  { year: '2026', title: 'Junior Digital Operations Support at CreativeBlox', type: 'Work Experience', description: 'Provides administrative and digital operations support as an independent contractor, handling documentation, coordination, records management, and content operations.' },
  { year: '2026', title: 'Developed MabuHighTrack System', type: 'System Development', description: 'Led planning and analysis for a student performance tracking platform with dashboards and prediction insights.' },
  { year: '2025', title: 'OJT Team Leader', type: 'Leadership', description: 'Coordinated team responsibilities, project delivery, and documentation while contributing to a medical triage system.' },
  { year: '2025', title: 'Full Stack Development Training', type: 'Training', description: 'Completed hands-on development training covering modern web application structure and deployment practices.' },
  { year: '2024', title: 'Academic and Creative Recognition', type: 'Awards & Recognition', description: 'Built a multidisciplinary portfolio across technology, creative media, presentations, and user-centered design.' },
]
