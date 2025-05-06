import { ProjectItem } from '../../models';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Modern Web Application',
    description:
      'A full-stack application built with modern technologies. Features include real-time updates, responsive design, and seamless user experience across all devices.',
    thumbnail:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    technologies: [
      { icon: '⚛️', name: 'React' },
      { icon: '🌐', name: 'Next.js' },
      { icon: '📱', name: 'React Native' },
      { icon: '🎨', name: 'Tailwind CSS' },
      { icon: '🔥', name: 'Firebase' },
      { icon: '📊', name: 'GraphQL' },
    ],
  },
  {
    id: 2,
    title: 'Data Analytics Dashboard',
    description:
      'Interactive dashboard that visualizes complex data sets in an intuitive way. Includes customizable charts, filters, and export capabilities.',
    thumbnail: 'https://images.pexels.com/photos/7376/startup-photos.jpg',
    technologies: [
      { icon: '📊', name: 'D3.js' },
      { icon: '⚡', name: 'Vue.js' },
      { icon: '🔄', name: 'Redux' },
      { icon: '🎯', name: 'TypeScript' },
      { icon: '🗄️', name: 'MongoDB' },
      { icon: '🚀', name: 'Express.js' },
    ],
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description:
      'Scalable e-commerce solution with advanced features like real-time inventory management, secure payments, and customer analytics dashboard.',
    thumbnail:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    technologies: [
      { icon: '🛒', name: 'Shopify API' },
      { icon: '💳', name: 'Stripe' },
      { icon: '🔐', name: 'Auth0' },
      { icon: '📦', name: 'Node.js' },
      { icon: '🎨', name: 'SASS' },
      { icon: '🔍', name: 'Elasticsearch' },
    ],
  },
];
