import graphicDesignSampleTwo from '../assets/graphic-design-sample-2.png'
import graphicDesignSampleThree from '../assets/graphic-design-sample-4.png'
import graphicDesignSampleFour from '../assets/graphic-design-sample-5.png'
import graphicDesignSampleSix from '../assets/graphic-design-sample-6.png'
import graphicDesignSampleSeven from '../assets/graphic-design-sample-7.png'
import medicalTriageDashboard from '../assets/medical-triage-dashboard.png'
import projectDashboard from '../assets/mabuhightrack-dashboard.png'
import photographySampleFour from '../assets/photography-sample-4.png'

export const roles = ['Full Stack Developer', 'UI/UX Designer', 'Data Analyst', 'System Developer']

export const profile = {
  name: 'Princess Angel Paslot',
  email: 'princessangel.paslot@gmail.com',
  location: 'Philippines',
  tagline: 'Full Stack Developer, UI/UX Designer, and Data-driven System Builder',
  summary:
    'I design polished interfaces and build practical systems that help teams track operations, improve workflows, and turn data into clearer decisions.',
  github: 'https://github.com/princesspaslot',
  linkedin: 'https://www.linkedin.com/in/princess-angel-paslot-03568b315/',
  facebook: 'https://www.facebook.com/yourprincess.angel',
}

export const stats = [
  { label: 'Major systems', value: '4+' },
  { label: 'Core skill areas', value: '6' },
  { label: 'Training milestones', value: '8+' },
  { label: 'Availability', value: 'Open' },
]

export const skills = [
  { category: 'Frontend', level: 92, tools: ['React', 'TailwindCSS', 'Filament', 'Responsive UI', 'Accessibility'] },
  { category: 'Backend', level: 86, tools: ['Node.js', 'Laravel', 'REST APIs', 'Authentication'] },
  { category: 'Database', level: 84, tools: ['MySQL', 'Data Modeling', 'Reporting', 'Query Design'] },
  { category: 'UI/UX', level: 90, tools: ['Wireframes', 'Design Systems', 'Prototyping', 'User Flows'] },
  { category: 'DevOps', level: 74, tools: ['Vercel', 'GitHub', 'Deployment', 'Performance Audits'] },
  { category: 'Data Analytics', level: 88, tools: ['Dashboards', 'Metrics', 'Prediction Logic', 'Insights'] },
]

export const projectCategories = [
  'All',
  'AI Projects',
  'Laravel Systems',
  'Graphic Design',
  'Videos',
  'Pictures',
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
    description: 'A student performance tracking system with analytics dashboards and AI-powered prediction insights.',
    category: 'AI Projects',
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
    description: 'A patient prioritization platform for efficient healthcare queue management and response.',
    category: 'Laravel Systems',
    image: medicalTriageDashboard,
    stack: ['Web App', 'Filament-Laravel', 'Healthcare', 'Data Logic'],
    stats: ['Priority rules', 'Queue management', 'OJT delivery'],
    liveUrl: '#',
    githubUrl: 'https://github.com/luvjenni/MedTriage',
  },
  {
    id: 'graphic-design-collection',
    title: 'Graphic Design Collection',
    role: 'Graphic Designer',
    description: 'A collection of social media graphics, posters, layouts, and visual brand pieces for clear communication.',
    category: 'Graphic Design',
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
    description: 'Edited and presented video content with storytelling, pacing, clean visuals, and audience-focused delivery.',
    category: 'Videos',
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
    category: 'Pictures',
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
]

export const achievements = [
  { year: '2026', title: 'Developed MabuHighTrack System', type: 'System Development', description: 'Led planning and analysis for a student performance tracking platform with dashboards and prediction insights.' },
  { year: '2025', title: 'OJT Team Leader', type: 'Leadership', description: 'Coordinated team responsibilities, project delivery, and documentation while contributing to a medical triage system.' },
  { year: '2025', title: 'Full Stack Development Training', type: 'Training', description: 'Completed hands-on development training covering modern web application structure and deployment practices.' },
  { year: '2024', title: 'Academic and Creative Recognition', type: 'Awards & Recognition', description: 'Built a multidisciplinary portfolio across technology, creative media, presentations, and user-centered design.' },
]
