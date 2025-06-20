export function Hero() {
  return (
    <div className="flex w-full flex-col items-center lg:flex-row lg:items-start">
      <div className="flex w-full flex-col items-center lg:w-1/2">
        <img
          src="https://asinfos.in/_next/static/media/portfolio-hero.7c167252.webp"
          alt="Hero Profile Image"
          className="h-48 w-48 rounded-full border border-cyan-50 object-cover lg:mb-0 lg:h-72 lg:w-72"
        />

        <div className="text-text-secondary mb-2 flex flex-col items-start text-sm">
          <div className="text-secondary flex justify-start pt-1">
            <img
              src="/location.svg"
              alt="Location Icon"
              className="mr-2 h-5 w-5"
            />
            <span>Merlo, Argentina</span>
          </div>
        </div>
        <div className="flex">
          <a
            href="mailto:ian.ciarulli@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            <img src="/mail.svg" alt="Mail Icon" className="h-6 w-6" />
          </a>

          <div className="ml-6 pt-0.75">
            <a
              href="https://www.linkedin.com/in/ian-ciarulli/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <img
                src="/linkedin.svg"
                alt="LinkedIn Icon"
                className="h-4.5 w-4.5"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center px-6 lg:w-1/2 lg:px-0 lg:pl-13">
        <h1 className="mb-4 pt-8 text-center text-2xl font-bold lg:pt-24 lg:text-left">
          Hi, I'm <span className="text-morocco-brown">Ian</span>, a Frontend
          developer specialized in{' '}
          <span className="text-highlight-rn bg-highlight-bg whitespace-nowrap">
            React Native
          </span>
          .
        </h1>
        <p className="mb-4 text-center text-base lg:text-left">
          I have 5 years developing within the{' '}
          <span className="whitespace-nowrap">React Native</span> ecosystem.
        </p>
      </div>
    </div>
  );
}
