import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface MailCtaProps {
  rounded: boolean;
  text?: string;
}

export function MailCta({ rounded, text = 'Send Email' }: MailCtaProps) {
  const baseClasses = 'flex items-center transition-all';
  const roundedClasses =
    'text-cta bg-spring-wood h-11 w-11 justify-center rounded-full shadow-sm hover:bg-[#e8e0d0] hover:shadow-md';
  const rectangularClasses =
    'text-spring-wood bg-cta hover:text-spring-wood/80 border-spring-wood/30 hover:border-spring-wood/50 gap-2 rounded-lg  px-4 py-2.5 text-sm font-medium transition-colors duration-200';

  return (
    <motion.a
      href="mailto:ian.ciarulli@gmail.com"
      aria-label="Email"
      className={`${baseClasses} ${rounded ? roundedClasses : rectangularClasses}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Mail className={rounded ? 'h-4 w-4 xl:h-6 xl:w-6' : 'h-4 w-4'} />
      {!rounded && text}
    </motion.a>
  );
}
