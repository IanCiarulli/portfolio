import { useState } from 'react';
import { Project } from '../../models';

const projects: Project[] = [
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

export const ProjectItem = () => {
  const [selectedTech, setSelectedTech] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="h-screen w-full overflow-y-auto p-6">
      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden">
          <div
            className="transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${projects.length * 100}%`,
              display: 'flex',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="w-full px-4"
                style={{ flex: `0 0 ${100 / projects.length}%` }}
              >
                <div
                  className={`mb-8 overflow-hidden rounded-lg shadow-lg ${index % 2 === 0 ? 'flex' : 'flex flex-row-reverse'} md:flex-row`}
                >
                  <div className="w-full md:w-1/3">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-64 w-full object-cover p-3 md:h-full"
                    />
                  </div>

                  <div className="flex w-full flex-col justify-between p-6 md:w-2/3">
                    <div>
                      <h2 className="mb-3 text-2xl font-bold text-white">
                        {project.title}
                      </h2>
                      <p className="text-secondary mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xl"
                        >
                          {tech.icon}
                        </span>
                      ))}

                      <button
                        onClick={() => setSelectedTech(project)}
                        className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 md:hidden"
                      >
                        +{project.technologies.length - 2}
                      </button>

                      {project.technologies.slice(2).map((tech, i) => (
                        <span
                          key={i}
                          className="hidden h-8 w-8 items-center justify-center rounded-full text-xl md:flex"
                        >
                          {tech.icon}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* L-R buttons, dont work properly */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100"
        >
          →
        </button>
      </div>

      {selectedTech && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="w-full max-w-md rounded-lg bg-white">
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800">
                  Technologies
                </h3>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                {selectedTech.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded p-2 hover:bg-gray-50"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xl">
                      {tech.icon}
                    </span>
                    <span className="text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* To Do
none of the responsive features other than the modal and the "+" icon showing up are working correctly
the L/R buttons aren´t showing up, just the backgrounds
the carousel over travels on both directions
the container of this component is breaking the mobile layout
*/
