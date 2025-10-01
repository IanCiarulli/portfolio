import { type FC, useRef, useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { ProjectsGrid } from '../../components';
import { Projects } from '../../store';

export const ProjectsSection: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="font-jetbrains flex w-full flex-col items-center justify-center px-8 pt-32 md:px-12 lg:px-0"
      aria-label="Projects Section"
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 40,
      }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-morocco-brown mb-2 text-center text-3xl font-bold tracking-tight">
        Projects
      </h2>
      <div className="bg-element mb-6 h-1 w-16 rounded-full"></div>
      <ProjectsGrid items={Projects} forwardRef={sectionRef} />
    </motion.section>
  );
};
