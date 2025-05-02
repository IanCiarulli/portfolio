import { useLanguage } from '../../context/LanguageContext';

export function Header() {
  const { lang, toggleLang } = useLanguage();
  return (
    <header className="fixed top-0 right-0 left-0 z-50 font-mono text-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <h1 className="after:bg-primary relative cursor-pointer text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-600 hover:after:w-full">
          <a href="#">Ian Ciarulli</a>
        </h1>
        <nav className="hidden items-center space-x-6 text-white md:flex">
          <a
            href="#about"
            className="hover:text-primary transition-colors hover:scale-115"
          >
            {lang === 'EN' ? 'About Me' : 'Sobre mi'}
          </a>
          <a
            href="#work"
            className="hover:text-primary transition-colors hover:scale-115"
          >
            {lang === 'EN' ? 'Experience' : 'Experiencia'}
          </a>
          <a
            href="#projects"
            className="hover:text-primary transition-colors hover:scale-115"
          >
            {lang === 'EN' ? 'My work' : 'Mis trabajos'}
          </a>
        </nav>
        <div className="flex w-auto items-center">
          <label className="relative inline-flex cursor-pointer select-none">
            <div className="flex h-6 w-18 items-center justify-center font-bold">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={lang === 'ES'}
                onChange={toggleLang}
              />
              <span className="absolute top-0 left-0 h-full w-1/2 rounded-xs border border-gray-300 transition-transform duration-500 peer-checked:translate-x-full"></span>
              <span className="text-primary relative z-10 flex-1 text-center peer-checked:text-white">
                EN
              </span>
              <span className="peer-checked:text-primary relative z-10 flex-1 text-center text-white">
                ES
              </span>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}
