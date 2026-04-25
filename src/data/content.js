import photographySample from '../assets/photography-sample-1.png'
import photographySampleTwo from '../assets/photography-sample-2.png'
import videographySampleOne from '../assets/videography-sample-1.png'
import graphicDesignSampleTwo from '../assets/graphic-design-sample-2.png'
import graphicDesignSampleThree from '../assets/graphic-design-sample-4.png'

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
    mediaEmbeds: ['https://drive.google.com/file/d/1rgkegY78eoJYM142OFe_9pN-Meudrv5a/preview'],
  },
  {
    title: 'Photography',
    description:
      'I capture meaningful moments through photography, emphasizing storytelling, composition, and lighting.',
    skills: ['Portrait & Event Photography', 'Photo Editing'],
    mediaImages: [photographySample, photographySampleTwo],
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
    mediaEmbeds: ['https://drive.google.com/file/d/1QQ1wOE3oFZuYJVHqZtzyWXBpjx9U5FhF/preview'],
    mediaImages: [videographySampleOne],
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
