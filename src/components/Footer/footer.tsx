import { motion } from 'framer-motion';
import { CvCta, MailCta, LinkedInCta } from '../';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
      className="bg-morocco-brown relative mt-20 w-full"
    >
      <div className="via-spring-wood/30 absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent"></div>

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-spring-wood mb-4 text-xl font-bold tracking-tight">
              Ian Ciarulli
            </h3>
          </div>
          <div className="lg:col-span-1">
            <h4 className="text-spring-wood mb-4 text-lg font-semibold">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Experience' },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-spring-wood/70 hover:text-spring-wood group flex items-center gap-2 text-sm transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-1">
            <h4 className="text-spring-wood mb-4 text-lg font-semibold">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3">
              <LinkedInCta
                rounded={false}
                text="LinkedIn Profile"
                brownBackground={false}
              />
              <MailCta rounded={false} text="Send Email" />
              <CvCta brownBackground={false} />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
