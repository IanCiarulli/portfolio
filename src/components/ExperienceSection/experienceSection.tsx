import { useRef, useState, useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { motion } from 'framer-motion';
import { experienceAtom } from '../../store';
import { ExperienceCard } from '../ExperienceCard/experienceCard';

export function ExperienceSection() {
  const experiences = useAtomValue(experienceAtom);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="flex w-full flex-col items-center justify-center px-12 pt-32 lg:px-0"
      aria-label="Experience Section"
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
      <div className="mx-auto">
        <div className="mb-6 flex flex-col items-center">
          <h2 className="text-morocco-brown mb-2 text-center text-3xl font-bold tracking-tight">
            Experience
          </h2>
          <div className="bg-element h-1 w-16 rounded-full"></div>
          <div className="text-cta/80 mt-6 w-[85%] text-center text-sm italic lg:w-full">
            <p>
              This is an extended version; for the more compact version, please
              refer to my resume.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
