import { motion } from 'framer-motion';
import linkedinIcon from '/linkedin.svg';

interface LinkedInCtaProps {
  rounded: boolean;
  text?: string;
  brownBackground?: boolean;
}

export function LinkedInCta({
  rounded,
  text = 'LinkedIn Profile',
  brownBackground = true,
}: LinkedInCtaProps) {
  const baseClasses = 'flex items-center transition-all';
  const roundedClasses =
    'bg-spring-wood h-11 w-11 justify-center rounded-full shadow-sm hover:bg-[#e8e0d0] hover:shadow-md';

  const rectangularClasses = brownBackground
    ? 'bg-cta text-cta-text hover:bg-cta-hover gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200'
    : 'text-cta bg-spring-wood hover:bg-spring-wood/90 gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200';

  return (
    <motion.a
      href="https://linkedin.com/in-ian-ciarulli/"
      aria-label="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${rounded ? roundedClasses : rectangularClasses}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={linkedinIcon}
        alt="LinkedIn"
        className={rounded ? 'h-4 w-4 xl:h-5 xl:w-5' : 'h-4 w-4'}
      />
      {!rounded && text}
    </motion.a>
  );
}
