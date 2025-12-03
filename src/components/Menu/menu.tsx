import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hamburgerIcon from '/menu_b.svg';
import closeIcon from '/x_w.svg';

export function Menu() {
  const [open, setOpen] = useState(false);

  const toggleVisibility = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const handleNavigation = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      toggleVisibility();

      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${targetId}`);
        }
      }, 100);
    },
    [toggleVisibility]
  );

  return (
    <>
      {!open ? (
        <button
          onClick={() => toggleVisibility()}
          className="bg-sazerac fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full"
          aria-label={'Open menu'}
        >
          <img src={hamburgerIcon} alt="Menu Icon" className="h-5 w-5" />
        </button>
      ) : null}

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu-overlay"
            className="bg-morocco-brown fixed inset-0 z-40 flex flex-col items-center justify-center"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <motion.button
              onClick={() => toggleVisibility()}
              className="bg-morocco-brown fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-3xl leading-none font-normal"
              aria-label="Close menu"
              initial={{ rotate: 0, scale: 1 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              <img src={closeIcon} alt="Menu Icon" className="h-5 w-5" />
            </motion.button>
            <motion.ul
              className="text-sazerac space-y-8 text-3xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="#home"
                  aria-label="Home"
                  onClick={(e) => handleNavigation(e, 'home')}
                  className="hover:text-beige block transition-colors duration-200"
                  whileHover={{
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  Home
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="#projects"
                  aria-label="Projects"
                  onClick={(e) => handleNavigation(e, 'projects')}
                  className="hover:text-beige block transition-colors duration-200"
                  whileHover={{
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  Projects
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="#experience"
                  aria-label="Experience"
                  onClick={(e) => handleNavigation(e, 'experience')}
                  className="hover:text-beige block transition-colors duration-200"
                  whileHover={{
                    textShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  Experience
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
