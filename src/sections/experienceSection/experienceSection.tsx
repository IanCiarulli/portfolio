import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExperienceRows } from '../../components';

export function ExperienceSection() {
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
      <ExperienceRows />
    </motion.section>
  );
}
