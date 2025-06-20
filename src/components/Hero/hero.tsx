export function Hero() {
  return (
    <div className="flex w-full flex-col items-center lg:flex-row lg:items-start">
      <div className="flex w-full flex-col items-center lg:w-1/2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010"
          alt="Hero Profile Image"
          className="mb-4 h-36 w-36 rounded-full object-cover lg:mb-0 lg:h-60 lg:w-60"
        />
        <p className="text-center text-lg lg:text-left">Ian Ciarulli</p>
        <div className="text-text-secondary flex flex-col items-start text-sm">
          <span>ian.ciarulli@gmail.com</span>
          <div className="text-secondary mb-1 flex justify-start">
            <img
              src="/location.svg"
              alt="location Icon"
              className="mr-2 h-5 w-5"
            />
            <span> Merlo, Argentina</span>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center px-6 lg:w-1/2 lg:px-0">
        <h1 className="mb-4 pt-8 text-center text-2xl font-bold lg:pt-24 lg:text-left">
          Frontend developer, specialized in{' '}
          <span className="text-highlight-rn bg-highlight-bg whitespace-nowrap">
            React Native
          </span>
          .
        </h1>
        <p className="mb-4 text-center text-base lg:text-left">
          5 years of experience as a developer. Also led teams, mentored peers,
          and worked across the full development lifecycle.
        </p>
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
                alt={`LinkedIn Icon`}
                className="h-4.5 w-4.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
