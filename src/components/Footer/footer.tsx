import { motion } from 'framer-motion';
import { Download, Mail, Code } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      href: 'https://linkedin.com/in/ian-ciarulli',
      label: 'LinkedIn',
      icon: '/linkedin.svg',
    },
    {
      href: 'mailto:ian.ciarulli@gmail.com',
      label: 'Email',
      icon: '/mail.svg',
    },
  ];

  const techStack = [
    'React',
    'TypeScript',
    'TailwindCSS',
    'Framer Motion',
    'Vite',
    'Bun',
  ];

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
            <p className="text-spring-wood/80 mb-6 text-sm leading-relaxed">
              Frontend Engineer passionate about creating exceptional user
              experiences with modern web technologies and thoughtful design.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-spring-wood/60 hover:text-spring-wood hover:bg-spring-wood/10 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="h-5 w-5 opacity-60 transition-opacity duration-200 hover:opacity-100"
                  />
                </motion.a>
              ))}
            </div>
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
              <motion.a
                href="mailto:ian@example.com"
                className="text-spring-wood hover:text-spring-wood/80 border-spring-wood/30 hover:border-spring-wood/50 flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4" />
                Send Email
              </motion.a>
              <motion.a
                href="/files/test.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-morocco-brown bg-spring-wood hover:bg-spring-wood/90 flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-spring-wood/20 mt-12 border-t pt-6">
          <div className="mb-4 flex items-center justify-center">
            <h5 className="text-spring-wood/80 text-sm font-medium">
              Built with
            </h5>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techStack.map((tech) => (
              <motion.div
                key={tech}
                className="flex items-center gap-2 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
              >
                <Code className="text-spring-wood/40 h-4 w-4" />
                <span className="text-spring-wood/60 text-xs font-medium">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
