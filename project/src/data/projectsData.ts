import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/yourusername/ecommerce',
    featured: true,
  },
  {
    id: 'project2',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks and projects. Includes features like task categorization, due dates, and progress tracking.',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/taskmanager',
    github: 'https://github.com/yourusername/taskmanager',
    featured: true,
  },
  {
    id: 'project3',
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard that displays current weather conditions and forecasts for multiple locations using the OpenWeatherMap API.',
    tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS3'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/weather',
    github: 'https://github.com/yourusername/weather-dashboard',
  },
  {
    id: 'project4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing skills, projects, and professional information. Built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'Responsive Design'],
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/portfolio',
    github: 'https://github.com/yourusername/portfolio',
  },
];