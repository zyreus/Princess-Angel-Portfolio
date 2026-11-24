import {
  BriefcaseBusiness,
  Briefcase,
  FileText,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Sparkles,
} from 'lucide-react'

export const contactItems = [
  { icon: Phone, label: 'Phone', value: '09671460857', href: 'tel:09671460857' },
  { icon: Mail, label: 'Email', value: 'princessangel.paslot@gmail.com', href: 'mailto:princessangel.paslot@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Purok 5 Mabuhay, Carmen, Davao del Norte' },
  { icon: FileText, label: 'Portfolio', value: 'princess-angel-portfolio.vercel.app', href: 'https://princess-angel-portfolio.vercel.app/' },
]

export const resumeSkills = [
  'Document Preparation',
  'Records Management',
  'Data Entry',
  'Microsoft Excel',
  'Google Sheets',
  'Administrative Coordination',
  'Report Preparation',
  'WordPress CMS',
  'Social Media Management',
  'HTML & CSS',
  'React.js',
  'Laravel & PHP',
  'MySQL',
  'Communication',
  'Time Management',
  'Attention to Detail',
  'Critical Thinking',
  'Team Collaboration',
]

export const languages = [
  { language: 'English', level: 'Proficient', progress: 72 },
  { language: 'Filipino', level: 'Fluent', progress: 88 },
  { language: 'Bisaya', level: 'Mother Tongue', progress: 96 },
]

export const education = [
  {
    school: 'Kabacan Pilot Central Elementary School',
    years: '2008 – 2016',
    details: ['With Honor'],
  },
  {
    school: 'Mabuhay National High School',
    years: '2016 – 2020',
    details: ['With Honor', 'BSP Awardee', 'GSP Awardee', 'YES-O Awardee'],
  },
  {
    school: 'University of Mindanao Panabo College',
    years: '2020 – 2022',
    details: ['With High Honor'],
  },
  {
    school: 'Davao del Norte State College',
    years: '2022 – 2026',
    details: ['BS Information Technology', 'Graduate'],
  },
]

export const experiences = [
  {
    icon: Briefcase,
    role: 'Junior Graphic Designer / Digital Operations Support',
    company: 'CreativeBlox Multimedia Services',
    details: [
      'Prepared weekly reports and organized internal documentation',
      'Maintained contractor pool trackers and specialty records',
      'Assisted with WordPress content management and website updates',
      'Organized social media content and posting schedules',
    ],
  },
  {
    icon: BriefcaseBusiness,
    role: 'OJT Team Leader / System Developer',
    company: 'On-the-Job Training (Academic Internship)',
    details: [
      'Led team coordination and project delivery',
      'Developed a Medical Triage System using Laravel',
      'Prepared documentation, reports, and technical records',
      'Coordinated requirements with supervisors and stakeholders',
    ],
  },
  {
    icon: Monitor,
    role: 'Graphic Designer (Freelance)',
    company: 'Independent',
    details: [
      'Designed brochures, posters, and tarpaulin layouts',
      'Created social media graphics using Canva and Photoshop',
    ],
  },
]

export const profileSummary =
  'Information Technology graduate with a strong foundation in administrative support, data management, documentation, and digital operations. Known for being organized, detail-oriented, and adaptable. Capable of contributing to both administrative and technical workflows. Open to roles in administrative support, data management, HR coordination, digital operations, office operations, and IT support.'

export const resumeMeta = {
  firstName: 'Princess Angel',
  fullName: 'Princess Angel Rentuaya Paslot',
  lastName: 'Paslot',
  degree: 'Bachelor of Science in Information Technology',
  role: 'IT & Administrative Professional',
  shortIntro: 'IT graduate with expertise in administrative support, data management, documentation, and digital operations.',
  label: 'Candidate Profile',
  badge: 'Open to Opportunities',
  sectionLabel: 'Professional Details',
  profileIcon: Sparkles,
  experienceIcon: BriefcaseBusiness,
}
