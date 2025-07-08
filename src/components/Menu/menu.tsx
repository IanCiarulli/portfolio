import { useCallback, useState } from 'react';

export function Menu() {
  const [open, setOpen] = useState(false);
  // Function memorized to toggle the menu state
  const toggleVisibility = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  return (
    <>
      {!open ? (
        <button
          onClick={() => toggleVisibility()}
          className="bg-spring-wood fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full"
          aria-label={'Open menu'}
        >
          <img src={'/menu_b.svg'} alt="Menu Icon" className="h-5 w-5" />
        </button>
      ) : (
        <div className="text-morocco-brown bg-sprin bg-spring-wood fixed inset-0 z-40 flex flex-col items-center justify-center">
          <button
            onClick={() => toggleVisibility()}
            className="fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full text-3xl"
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="space-y-6 text-2xl">
            <li>
              <a href="#home" onClick={() => toggleVisibility()}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => toggleVisibility()}>
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => toggleVisibility()}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => toggleVisibility()}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
