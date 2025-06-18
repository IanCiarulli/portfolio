export function Hero() {
  return (
    <div className="flex h-full w-full flex-col items-center lg:flex-row lg:items-start">
      {/* Left Column for lg and above */}
      <div className="flex w-full flex-col items-center lg:w-1/2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010"
          alt="Hero Profile Image"
          className="mb-4 h-36 w-36 rounded-full object-cover lg:mb-0 lg:h-60 lg:w-60"
        />
        <p className="text-center text-lg lg:text-left">Ian Ciarulli</p>
        <div className="text-secondary mb-1 flex items-center pt-2">
          <svg width="16" height="24" viewBox="-7 -2 24 24">
            <path
              fill="gray"
              d="M4 9.9A5.002 5.002.0 015 0a5 5 0 011 9.9V19a1 1 0 01-2 0V9.9zM5 8a3 3 0 100-6 3 3 0 000 6z"
            ></path>
          </svg>
          <span> Merlo, Argentina</span>
        </div>
      </div>

      {/* Right Column for lg and above */}
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
        <div className="flex space-x-4">
          <div className="rounded-sm p-1.75">
            <a
              href="mailto:ian.ciarulli@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <div>
                <div className="h-[20px] w-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="hover:text-cta transition-colors duration-200"
                  >
                    <path
                      d="M64 112c-8.8.0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1.0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16h384c8.8.0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64h384c35.3.0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128z"
                      className="fill-current"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-sm p-1.75">
            <a
              href="mailto:ian.ciarulli@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <div>
                <div className="h-[20px] w-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="hover:text-cta transition-colors duration-200"
                  >
                    <path
                      d="M64 112c-8.8.0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1.0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16h384c8.8.0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64h384c35.3.0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128z"
                      className="fill-current"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
