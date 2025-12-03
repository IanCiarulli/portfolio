import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './ResumeCta.css';

interface CvCtaProps {
  brownBackground?: boolean;
}

export const CvCta = ({ brownBackground = true }: CvCtaProps) => {
  const baseClasses =
    'arrow-container group inline-flex items-center gap-2 overflow-hidden rounded-md px-4 py-2.5 text-sm font-semibold shadow transition-all sm:text-base';

  const colorClasses = brownBackground
    ? 'bg-cta text-cta-text hover:bg-cta-hover'
    : 'text-cta bg-spring-wood hover:bg-spring-wood/90';

  return (
    <motion.a
      href="/files/Ian-Ciarulli-Resume.pdf"
      download="Ian-Ciarulli-Resume.pdf"
      className={`${baseClasses} ${colorClasses}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Download className="h-4 w-4" />
      Download Resume
    </motion.a>
  );
};
