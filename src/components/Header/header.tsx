import { useLanguage } from '../../context/LanguageContext';

export function Header() {
  const { lang, toggleLang } = useLanguage();
  return (
    <header className="fixed top-0 right-0 left-0 z-50 font-mono text-xs backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <h1 className="text-sm font-bold">Ian Ciarulli</h1>
        <nav className="hidden items-center space-x-6 text-white md:flex">
          <a href="#about" className="transition-colors hover:text-teal-400">
            {lang === 'EN' ? 'About Me' : 'Sobre mi'}
          </a>
          <a href="#work" className="transition-colors hover:text-teal-400">
            {lang === 'EN' ? 'Experience' : 'Experiencia'}
          </a>
          <a href="#projects" className="transition-colors hover:text-teal-400">
            {lang === 'EN' ? 'My work' : 'Mis trabajos'}
          </a>
        </nav>
        <div className="flex w-auto items-center justify-between">
          <label className="relative inline-flex cursor-pointer items-center select-none">
            <div className="flex h-6 w-18 rounded-md bg-gray-200">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={lang === 'ES'}
                onChange={toggleLang}
              />
              <span className="absolute top-0 left-0 h-full w-1/2 rounded-sm bg-blue-500 transition-transform peer-checked:translate-x-full"></span>
              <span className="relative z-10 flex-1 text-center leading-8 text-white peer-checked:text-gray-700">
                EN
              </span>
              <span className="relative z-10 flex-1 text-center leading-8 text-gray-700 peer-checked:text-white">
                ES
              </span>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}
