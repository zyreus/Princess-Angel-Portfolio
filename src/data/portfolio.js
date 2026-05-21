import graphicDesignSampleTwo from '../assets/graphic-design-sample-2.png'
import graphicDesignSampleThree from '../assets/graphic-design-sample-4.png'
import graphicDesignSampleFour from '../assets/graphic-design-sample-5.png'
import graphicDesignSampleSix from '../assets/graphic-design-sample-6.png'
import graphicDesignSampleSeven from '../assets/graphic-design-sample-7.png'
import projectDashboard from '../assets/mabuhightrack-dashboard.png'
import photographySampleFour from '../assets/photography-sample-4.png'
import photographySampleSix from '../assets/photography-sample-6.png'
import videographySampleOne from '../assets/videography-sample-1.png'

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
  'Web Applications',
  'AI Projects',
  'Laravel Systems',
  'UI/UX Designs',
  'Analytics Projects',
  'Graphic Design',
  'Videos',
  'Pictures',
]

const graphicDesignReviewLinks = [
  { label: 'Graphic Design 1', url: graphicDesignSampleTwo },
  { label: 'Graphic Design 2', url: graphicDesignSampleThree },
  { label: 'Graphic Design 3', url: graphicDesignSampleFour },
  { label: 'Graphic Design 4', url: graphicDesignSampleSix },
  { label: 'Graphic Design 5', url: graphicDesignSampleSeven },
]

const videoReviewLinks = [
  { label: 'Video Presentation', url: 'https://drive.google.com/file/d/1Qso_uoCOJKIJ0gpMwfeEaW4n6XvqIgyY/view?usp=drive_link' },
  { label: 'Video Edit 1', url: 'https://drive.google.com/file/d/1QQ1wOE3oFZuYJVHqZtzyWXBpjx9U5FhF/view?usp=drive_link' },
  { label: 'Video Edit 2', url: 'https://drive.google.com/file/d/10kSXOTRBVNFB-oJDiknDZ6W6JIXPiUj1/view?t=3.995781' },
  { label: 'Video Edit 3', url: 'https://drive.google.com/file/d/12Qde7pPZe7ZH33upBHhRxvwIQv1M_t-k/view' },
]

const pictureReviewLinks = [
  { label: 'Picture Folder 1', url: 'https://drive.google.com/drive/folders/1-PZralj3lNZ_Vs65zwIQSzIGJ-8Y1T6h?usp=sharing' },
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
    stats: ['Prediction insights', 'Role-based dashboards', 'Academic monitoring'],
    liveUrl: '#',
    githubUrl: 'https://github.com/princesspaslot',
  },
  {
    id: 'medical-triage',
    title: 'Medical Triage System',
    role: 'Developer, Analyst',
    description: 'A patient prioritization platform for efficient healthcare queue management and response.',
    category: 'Laravel Systems',
    image: projectDashboard,
    stack: ['Web App', 'Filament-Laravel', 'Healthcare', 'Data Logic'],
    stats: ['Priority rules', 'Queue management', 'OJT delivery'],
    liveUrl: '#',
    githubUrl: 'https://github.com/princesspaslot',
  },
  {
    id: 'portfolio-design-system',
    title: 'Portfolio Design System',
    role: 'UI/UX Designer',
    description: 'A premium personal brand interface with reusable glass cards, motion patterns, and recruiter-friendly content.',
    category: 'UI/UX Designs',
    image: graphicDesignSampleSeven,
    stack: ['React', 'TailwindCSS', 'Framer Motion', 'Design Systems'],
    stats: ['Responsive UI', 'Motion language', 'Brand system'],
    liveUrl: '#',
    githubUrl: 'https://github.com/princesspaslot',
  },
  {
    id: 'analytics-dashboard',
    title: 'Performance Analytics Dashboard',
    role: 'Data Analyst',
    description: 'A reporting dashboard concept for summarizing performance metrics, trends, and actionable operational insights.',
    category: 'Analytics Projects',
    image: graphicDesignSampleSeven,
    stack: ['Data Analytics', 'Charts', 'Dashboards', 'Insights'],
    stats: ['Trend analysis', 'KPIs', 'Decision support'],
    liveUrl: '#',
    githubUrl: 'https://github.com/princesspaslot',
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
    image: videographySampleOne,
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
  {
    id: 'creative-media-gallery',
    title: 'Creative Media Gallery',
    role: 'Creative Portfolio',
    description: 'A combined media showcase featuring graphic designs, video work, and picture-based storytelling.',
    category: 'Pictures',
    image: photographySampleSix,
    stack: ['Graphics', 'Videos', 'Pictures', 'Portfolio Curation'],
    stats: ['Creative samples', 'Visual storytelling', 'Portfolio presentation'],
    liveUrl: 'https://drive.google.com/file/d/1Qso_uoCOJKIJ0gpMwfeEaW4n6XvqIgyY/view?usp=drive_link',
    liveLabel: 'Review Media',
    reviewLinks: [...graphicDesignReviewLinks, ...videoReviewLinks, ...pictureReviewLinks],
  },
]

export const certificates = [
  { title: 'Full Stack Development Training', issuer: 'Professional Training Program', date: '2025', group: 'Web Development Certifications', skills: ['React', 'APIs', 'Deployment'], verificationUrl: '#' },
  { title: 'Programming Foundations', issuer: 'Academic Certification', date: '2025', group: 'Programming Certifications', skills: ['Logic', 'Problem Solving', 'JavaScript'], verificationUrl: '#' },
  { title: 'Networking Essentials', issuer: 'Training Seminar', date: '2025', group: 'Networking Certifications', skills: ['Networking', 'Security Basics', 'Infrastructure'], verificationUrl: '#' },
  { title: 'On-the-Job Training Completion', issuer: 'OJT Program', date: '2025', group: 'OJT Certificates', skills: ['Team Leadership', 'System Development', 'Documentation'], verificationUrl: '#' },
  { title: 'Technology Seminar Participation', issuer: 'Seminars & Trainings', date: '2024', group: 'Seminars & Trainings', skills: ['Innovation', 'Career Readiness', 'Professional Growth'], verificationUrl: '#' },
]

export const achievements = [
  { year: '2026', title: 'Developed MabuHighTrack System', type: 'System Development', description: 'Led planning and analysis for a student performance tracking platform with dashboards and prediction insights.' },
  { year: '2025', title: 'OJT Team Leader', type: 'Leadership', description: 'Coordinated team responsibilities, project delivery, and documentation while contributing to a medical triage system.' },
  { year: '2025', title: 'Full Stack Development Training', type: 'Training', description: 'Completed hands-on development training covering modern web application structure and deployment practices.' },
  { year: '2024', title: 'Academic and Creative Recognition', type: 'Awards & Recognition', description: 'Built a multidisciplinary portfolio across technology, creative media, presentations, and user-centered design.' },
]
