import { useCallback, useState } from 'react';

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
          <img src={'/menu_b.svg'} alt="Menu Icon" className="h-5 w-5" />
        </button>
      ) : (
        <div className="text-morocco-brown bg-sprin bg-sazerac fixed inset-0 z-40 flex flex-col items-center justify-center">
          <button
            onClick={() => toggleVisibility()}
            className="fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="space-y-6 text-2xl">
            <li>
              <a
                href="#home"
                aria-label="Home"
                onClick={(e) => handleNavigation(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                aria-label="Projects"
                onClick={(e) => handleNavigation(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                aria-label="Experience"
                onClick={(e) => handleNavigation(e, 'experience')}
              >
                Experience
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
