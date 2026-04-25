import photographySampleOne from '../assets/photography-sample-1.png'
import videographySampleOne from '../assets/videography-sample-1.png'
import graphicDesignSampleTwo from '../assets/graphic-design-sample-2.png'
import graphicDesignSampleThree from '../assets/graphic-design-sample-4.png'
import photographySampleTwo from '../assets/photography-sample-2.png'
import photographySampleThree from '../assets/photography-sample-3.png'

export const roles = [
  'Photographer',
  'Videographer',
  'Video Presenter',
  'Editor',
  'Graphic Designer',
  'Layout Artist',
  'Project Manager',
  'System Analyst',
]

export const creativeSections = [
  {
    title: 'Video Presentation',
    description:
      'I present content on camera with clarity and confidence, focusing on strong communication and audience engagement.',
    skills: ['On-Camera Hosting', 'Script Delivery', 'Educational & Informational Presentation'],
    mediaEmbeds: ['https://drive.google.com/file/d/1Qso_uoCOJKIJ0gpMwfeEaW4n6XvqIgyY/preview'],
  },
  {
    title: 'Photography',
    description:
      'I capture meaningful moments through photography, emphasizing storytelling, composition, and lighting.',
    skills: ['Portrait & Event Photography', 'Photo Editing'],
    mediaImages: [
      photographySampleOne,
      photographySampleTwo,
      photographySampleThree,
    ],
    mediaLinks: [
      'https://drive.google.com/drive/folders/1-PZralj3lNZ_Vs65zwIQSzIGJ-8Y1T6h?usp=sharing',
      'https://drive.google.com/drive/folders/10eGi-DSYmEZMACKuzP87WTcCCUyhLQ3d?usp=sharing',
      'https://drive.google.com/drive/folders/10DDAhnCJRhVWTlqTVwOsDGK1F2TT6dyc?usp=drive_link',
    ],
  },
  {
    title: 'Videography & Editing',
    description:
      'I create and edit videos that effectively communicate stories from production to post-processing.',
    skills: [
      'Videography',
      'Video Editing (Premiere Pro / CapCut / After Effects)',
      'Color Grading & Storytelling',
    ],
    mediaEmbeds: [
      'https://drive.google.com/file/d/1QQ1wOE3oFZuYJVHqZtzyWXBpjx9U5FhF/preview',
      'https://drive.google.com/file/d/10kSXOTRBVNFB-oJDiknDZ6W6JIXPiUj1/preview',
    ],
    mediaImages: [videographySampleOne],
    mediaLinks: [
      'https://drive.google.com/file/d/1QQ1wOE3oFZuYJVHqZtzyWXBpjx9U5FhF/view?usp=drive_link',
      'https://drive.google.com/file/d/10kSXOTRBVNFB-oJDiknDZ6W6JIXPiUj1/view?t=3.995781',
    ],
  },
  {
    title: 'Graphic Design & Layouting',
    description:
      'I design visually engaging graphics and layouts that communicate information clearly and effectively.',
    skills: [
      'Poster & Social Media Design',
      'Layout Design (Brochures, Presentations, UI Layouts)',
      'Typography & Visual Hierarchy',
      'Tools: Canva, Photoshop, Illustrator',
    ],
    mediaImages: [graphicDesignSampleTwo, graphicDesignSampleThree],
  },
]

export const projects = [
  {
    title: 'MabuHighTrack',
    role: 'Project Manager, System Analyst',
    description:
      'A student performance tracking system with analytics dashboards and AI-powered prediction insights.',
    stack: ['React', 'Node.js', 'Analytics', 'AI Prediction'],
  },
  {
    title: 'Medical Triage System',
    role: 'Developer, Analyst',
    description: 'A patient prioritization platform for efficient healthcare queue management and response.',
    stack: ['Web App', 'JavaScript', 'Healthcare', 'Data Logic'],
  },
  {
    title: 'Mental Health Monitoring System',
    role: 'Developer, Analyst',
    description:
      'A mood tracking and analytics solution designed to support proactive mental health monitoring.',
    stack: ['React', 'Dashboard', 'Data Visualization', 'Monitoring'],
  },
]
