import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Calendar, MapPin } from 'lucide-react';
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
      <div className="p-4 pb-2 sm:p-6 sm:pb-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <Building2
                    size={16}
                    className="text-morocco-brown/60 mt-0.5 flex-shrink-0"
                  />
                  <h3 className="text-morocco-brown text-lg leading-tight font-bold sm:text-xl">
                    {experience.company}
                  </h3>
                </div>
                <div className="flex items-center gap-2.5">
                  <Briefcase
                    size={15}
                    className="text-cta/50 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-cta text-base leading-tight font-medium sm:text-lg">
                    {experience.role.replace(
                      'Technical Consultant',
                      'Tech Consultant'
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-shrink-0 flex-col items-end gap-1.5 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-cta/40 flex-shrink-0" />
                  <span className="text-cta text-right leading-tight font-bold">
                    {experience.period[0]} -{' '}
                    {experience.period[1] ? experience.period[1] : 'Present'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-cta/40 flex-shrink-0" />
                  <span className="text-cta/70 text-right leading-tight font-medium">
                    Remote
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.ul className="space-y-2" layout>
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
                  <span className="text-morocco-brown mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-current sm:mt-1.5 sm:h-1.5 sm:w-1.5"></span>
                  <span className="text-xs leading-relaxed sm:text-sm">
                    {desc}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {hasMoreDescriptions && (
              <motion.div
                className={`text-cta/70 hover:text-cta ${!isExpanded ? 'mt-0' : 'mt-2'} flex items-center gap-2 text-sm font-medium transition-colors duration-200`}
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
