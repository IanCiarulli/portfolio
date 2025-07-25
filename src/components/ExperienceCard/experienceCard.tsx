import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ExperienceItem } from '../../models';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasMoreDescriptions = experience.description.length > 1;

  return (
    <div
      className={`bg-spring-wood/95 border-spring-wood/40 relative overflow-visible rounded-xl border shadow-[0_2px_8px_-1px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.12)] ${
        hasMoreDescriptions ? 'hover:bg-spring-wood/98 cursor-pointer' : ''
      }`}
      onClick={
        hasMoreDescriptions ? () => setIsExpanded(!isExpanded) : undefined
      }
    >
      <div className="p-6 pb-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-morocco-brown text-xl font-semibold">
              {experience.company}
            </h3>
            <p className="font-cta-hover text-lg font-medium">
              {experience.role}
            </p>
            <div className="text-cta flex items-center gap-2 text-sm">
              <span className="font-medium">Remote</span>
              <span className="font-medium">
                {experience.period[0]} -{' '}
                {experience.period[1] ? experience.period[1] : 'Present'}
              </span>
            </div>
          </div>

          <div className="relative">
            <motion.ul className="space-y-2 pb-1" layout>
              {experience.description.map((desc: string, i: number) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={false}
                  animate={
                    isExpanded || i === 0
                      ? {
                          opacity: 1,
                          height: 'auto',
                          y: 0,
                          scale: 1,
                        }
                      : i === 1 && !isExpanded
                        ? {
                            opacity: 0.6,
                            height: '1.5rem',
                            y: 0,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                            height: 0,
                            y: -10,
                            scale: 0.95,
                          }
                  }
                  transition={{
                    duration: 0.3,
                    delay: isExpanded
                      ? i * 0.1
                      : (experience.description.length - 1 - i) * 0.08,
                    ease: [0.04, 0.62, 0.23, 0.98],
                  }}
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  <span className="text-morocco-brown mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current"></span>
                  <span className="text-sm leading-relaxed">{desc}</span>
                </motion.li>
              ))}
            </motion.ul>

            {hasMoreDescriptions && (
              <motion.div
                className="text-cta/70 hover:text-cta mt-2 flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {!isExpanded ? (
                  <>
                    <span>
                      <span className="xl:hidden">Tap</span>
                      <span className="hidden xl:inline">Click</span> to show{' '}
                      {experience.description.length - 1} more point
                      {experience.description.length > 2 ? 's' : ''}
                    </span>
                    <motion.svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </motion.svg>
                  </>
                ) : (
                  <>
                    <span>
                      <span className="xl:hidden">Tap</span>
                      <span className="hidden xl:inline">Click</span> to
                      collapse
                    </span>
                    <motion.svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </motion.svg>
                  </>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
