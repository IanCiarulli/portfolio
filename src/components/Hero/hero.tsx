function ContactLinks({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex w-full justify-center space-x-4 lg:justify-start ${className}`}
    >
      <a
        href="mailto:ian.ciarulli@gmail.com"
        target="_blank"
        aria-label="Email"
      >
        <img src="/mail.svg" alt="Mail Icon" className="h-6 w-6" />
      </a>
      <div className="pt-0.75">
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
      <div className="text-text-secondary mb-2 flex flex-col items-start text-sm">
        <div className="text-secondary flex justify-start pt-1">
          <img
            src="/location.svg"
            alt="Location Icon"
            className="mr-1.5 h-4.5 w-4.5"
          />
          <span>Merlo, Argentina</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex w-full flex-col items-center lg:flex-row lg:items-start">
      <div className="flex w-full flex-col items-center px-6 lg:w-[55%] lg:px-0 lg:pl-13">
        <h1 className="mb-6 text-center text-3xl font-bold lg:text-left">
          Hi, I'm <span className="text-morocco-brown">Ian</span>, a Frontend
          developer specialized in{' '}
          <span className="text-highlight-rn bg-highlight-bg whitespace-nowrap">
            React Native
          </span>
          .
        </h1>
        <p className="font-jetbrains mb-6 w-full text-center text-base lg:text-left">
          I have 5 years developing within the{' '}
          <span className="whitespace-nowrap">React Native</span> ecosystem.
        </p>
        <ContactLinks className="hidden lg:flex" />
      </div>

      <div className="flex w-full flex-col items-center lg:w-[45%]">
        <img
          src="https://images.generated.photos/xjb1f1tmusZFtOLWl6VdasrPFgVVv-gtngIJvnwT1_8/rs:auto:1024:1024/wm:1:sowe:18:18:0.5/wmid:gp/czM6Ly9odW1hbi1n/ZW5lcmF0b3ItcHJv/ZC83NTMvYjk3NWYy/YjktZmNjYi00ZTU2/LWEyMWEtNzhiYmU2/YzUwMzFiLnBuZw.jpg"
          alt="Hero Profile Image"
          className="h-36 w-36 rounded-full border border-cyan-50 object-cover lg:mb-0 lg:h-52 lg:w-52"
        />
        <ContactLinks className="mt-4 lg:hidden" />
      </div>
    </div>
  );
}
