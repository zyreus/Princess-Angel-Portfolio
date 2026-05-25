import {
  BriefcaseBusiness,
  Brush,
  Camera,
  FileText,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Sparkles,
} from 'lucide-react'

export const contactItems = [
  { icon: Phone, label: 'Phone', value: '09671460857', href: 'tel:09671460857' },
  { icon: Mail, label: 'Email', value: 'princessjlister.apple@gmail.com', href: 'mailto:princessjlister.apple@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Purok 5 Mabuhay, Carmen Davao del Norte' },
  { icon: FileText, label: 'Portfolio', value: 'princess-angel-portfolio.vercel.app', href: 'https://princess-angel-portfolio.vercel.app/' },
]

export const resumeSkills = [
  'Video Editing',
  'Photo Editing',
  'Layout Artist',
  'Graphic Design',
  'Active Listening',
  'Teamwork',
  'Time Management',
  'Leadership',
  'Communication',
  'Critical Thinking',
  'Computer Proficiency',
]

export const languages = [
  { language: 'English', level: 'Basic', progress: 42 },
  { language: 'Filipino', level: 'Fluent', progress: 88 },
  { language: 'Bisaya', level: 'Mother Tongue', progress: 96 },
]

export const education = [
  {
    school: 'Kabacan Pilot Central Elementary School',
    years: '2008 - 2016',
    details: ['With Honor'],
  },
  {
    school: 'Mabuhay National High School',
    years: '2016 - 2020',
    details: ['With Honor', 'BSP Awardee', 'GSP Awardee', 'YES-O Awardee'],
  },
  {
    school: 'University of Mindanao Panabo College',
    years: '2020 - 2022',
    details: ['With High Honor'],
  },
  {
    school: 'Davao del Norte State College',
    years: '2022 - 2026',
    details: ['Bachelor of Science in Information Technology'],
  },
]

export const experiences = [
  {
    icon: Camera,
    role: 'Photography / Video Editing',
    details: ['Covered debuts and birthdays', 'Edited event highlights and visual stories'],
  },
  {
    icon: Megaphone,
    role: 'Dncs Ideas',
    details: ['Served as field reporter', 'Supported clear and timely story gathering'],
  },
  {
    icon: Brush,
    role: 'Graphic Designer',
    details: ['Designed brochures', 'Created tarpaulin layouts for events'],
  },
]

export const profileSummary =
  'Motivated Bachelor of Science in Information Technology student with a strong foundation in creative media, communication, and computer proficiency. Known for adapting quickly, listening actively, and working well with teams. Eager to join a respected organization where I can contribute fresh ideas, develop technical and creative skills, and build meaningful professional experience with dedication and integrity.'

export const resumeMeta = {
  firstName: 'Princess Angel',
  fullName: 'Princess Angel Rentuaya Paslot',
  lastName: 'Paslot',
  degree: 'Bachelor of Science in Information Technology',
  role: 'Creative Media & UI-focused IT Student',
  shortIntro: 'Creative IT student focused on visual design, communication, and practical digital solutions.',
  label: 'Candidate Profile',
  badge: 'Open to Opportunities',
  sectionLabel: 'Professional Details',
  profileIcon: Sparkles,
  experienceIcon: BriefcaseBusiness,
}
