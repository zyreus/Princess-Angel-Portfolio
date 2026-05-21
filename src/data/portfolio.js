import graphicDesignSampleSeven from '../assets/graphic-design-sample-7.png'
import projectDashboard from '../assets/mabuhightrack-dashboard.png'

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

export const projectCategories = ['All', 'Web Applications', 'AI Projects', 'Laravel Systems', 'UI/UX Designs', 'Analytics Projects']

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
    id: 'amalgated-lending',
    title: 'Amalgated Lending Platform',
    role: 'Full Stack Developer',
    description: 'A lending workflow concept with borrower records, payment visibility, and admin-focused productivity screens.',
    category: 'Web Applications',
    image: projectDashboard,
    stack: ['React', 'Laravel', 'MySQL', 'Dashboard UI'],
    stats: ['Borrower records', 'Payment tracking', 'Admin workflows'],
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
    image: projectDashboard,
    stack: ['Data Analytics', 'Charts', 'Dashboards', 'Insights'],
    stats: ['Trend analysis', 'KPIs', 'Decision support'],
    liveUrl: '#',
    githubUrl: 'https://github.com/princesspaslot',
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
