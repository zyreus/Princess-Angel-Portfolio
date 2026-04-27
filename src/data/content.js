import photographySampleOne from '../assets/photography-sample-1.png'
import videographySampleOne from '../assets/videography-sample-1.png'
import graphicDesignSampleTwo from '../assets/graphic-design-sample-2.png'
import graphicDesignSampleThree from '../assets/graphic-design-sample-4.png'
import graphicDesignSampleFour from '../assets/graphic-design-sample-5.png'
import graphicDesignSampleSix from '../assets/graphic-design-sample-6.png'
import graphicDesignSampleSeven from '../assets/graphic-design-sample-7.png'
import photographySampleTwo from '../assets/photography-sample-2.png'
import photographySampleThree from '../assets/photography-sample-3.png'
import photographySampleFour from '../assets/photography-sample-4.png'
import photographySampleFive from '../assets/photography-sample-5.HEIC'
import photographySampleSix from '../assets/photography-sample-6.png'

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
    hintText: 'Click the Video to Play',
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
      photographySampleFour,
      photographySampleFive,
      photographySampleSix,
    ],
    mediaLinks: [
      'https://drive.google.com/drive/folders/1-PZralj3lNZ_Vs65zwIQSzIGJ-8Y1T6h?usp=sharing',
      'https://drive.google.com/drive/folders/10eGi-DSYmEZMACKuzP87WTcCCUyhLQ3d?usp=sharing',
      'https://drive.google.com/drive/folders/10DDAhnCJRhVWTlqTVwOsDGK1F2TT6dyc?usp=drive_link',
      'https://drive.google.com/drive/folders/10k-UPWPno_gARdFs3irYuunygJDUQvgA',
      'https://drive.google.com/drive/folders/1-OsIoTTgRWGUr18m3UKPYHRvYFUobnlH',
    ],
    hintText: 'Click the Photo for More Pictures',
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
      'https://drive.google.com/file/d/12Qde7pPZe7ZH33upBHhRxvwIQv1M_t-k/preview',
    ],
    mediaImages: [videographySampleOne],
    mediaLinks: [
      'https://drive.google.com/file/d/1QQ1wOE3oFZuYJVHqZtzyWXBpjx9U5FhF/view?usp=drive_link',
      'https://drive.google.com/file/d/10kSXOTRBVNFB-oJDiknDZ6W6JIXPiUj1/view?t=3.995781',
      'https://drive.google.com/file/d/12Qde7pPZe7ZH33upBHhRxvwIQv1M_t-k/view',
    ],
    hintText: 'Click the Video to Play',
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
    mediaImages: [graphicDesignSampleTwo, graphicDesignSampleThree, graphicDesignSampleFour, graphicDesignSampleSix, graphicDesignSampleSeven],
    mediaLinks: [graphicDesignSampleTwo, graphicDesignSampleThree, graphicDesignSampleFour, graphicDesignSampleSix, graphicDesignSampleSeven],
    hintText: 'Click the Picture to view whole',
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
