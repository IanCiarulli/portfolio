import { Image } from '@imagekit/react';
import { THUMBNAILS_URL } from '../../constants';

// Convertir a componente
function ContactLinks() {
  return (
    <div className="flex w-full items-end justify-center space-x-4 lg:justify-start">
      {/* <a
        href="mailto:ian.ciarulli@gmail.com"
        target="_blank"
        aria-label="Email"
      >
        <img src="/mail.svg" alt="Mail Icon" className="h-10 w-10" />
      </a>
      <div className="pt-1.25">
        <a
          href="https://www.linkedin.com/in/ian-ciarulli/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <img
            src="/linkedin.svg"
            alt="LinkedIn Icon"
            className="h-7.5 w-7.5"
          />
        </a>
      </div> */}
      <div className="pt-1">
        <button
          type="button"
          onClick={async () => {
            const response = await fetch('files/test.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'IanCiarulli_CV.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          }}
          className="bg-cta hover:bg-cta-hover text-cta-text inline-flex h-10 items-center rounded px-4 text-sm font-semibold transition-colors"
          aria-label="Download CV"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="flex w-full flex-col lg:flex-row lg:items-start">
      <div className="flex w-full flex-col items-center">
        <Image
          src={`${THUMBNAILS_URL}dolby.webp`}
          alt="Hero Profile Image"
          className="h-36 w-36 object-cover lg:mb-0 lg:h-52 lg:w-52"
          fetchPriority="high"
          loading="eager"
          transformation={[
            {
              height: 208,
              width: 208,
              quality: 95,
              format: 'webp',
              progressive: true,
              cropMode: 'extract',
            },
          ]}
        />
      </div>
      <div className="flex w-full flex-col px-6">
        <h1 className="mb-4 w-full text-left text-6xl font-bold whitespace-nowrap">
          Ian Ciarulli
        </h1>
        <h2 className="mb-4 w-full text-left text-3xl font-bold whitespace-nowrap">
          <span className="mr-1 rounded bg-[#061c29] px-2 py-1 text-[#61dafb]">
            React Native
          </span>
          developer
        </h2>
        <p className="font-jetbrains mb-4 w-full text-left text-base">
          <span className="font-bold"> 5+ </span>Years of experience / 15+
          projects
        </p>
        <div className="text-text-secondary flex w-full justify-start text-sm">
          <img
            src="/location.svg"
            alt="Location Icon"
            className="mr-1.5 h-4.5 w-4.5"
          />
          <span>Merlo, Argentina</span>
        </div>
        <ContactLinks />
      </div>
    </section>
  );
}
