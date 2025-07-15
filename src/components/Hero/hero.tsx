import { Image } from '@imagekit/react';
import { THUMBNAILS_URL } from '../../constants';
import { Mail, Linkedin, MapPinned } from 'lucide-react';
import { CvCta } from '..';

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
        <h1 className="mb-8 w-full text-left text-6xl font-bold whitespace-nowrap">
          Ian Ciarulli
        </h1>
        <h2 className="mb-6 w-full text-left text-3xl font-bold whitespace-nowrap">
          <span className="mr-1 rounded bg-[#061c29] px-2 py-1 text-[#61dafb]">
            React Native
          </span>
          Developer
        </h2>
        <p className="font-jetbrains mb-4 w-full text-left text-base">
          <span className="font-bold"> 5+ </span>Years of experience / 15+
          projects
        </p>
        <div className="text-cta flex w-full items-end bg-amber-400 text-sm">
          <MapPinned className="text-cta mr-2 h-5 w-5" />
          <span>Merlo, Argentina</span>
        </div>
        <div className="mt-4 flex gap-4">
          <a
            href="mailto:ian@mail.com"
            aria-label="Email"
            className="text-cta rounded-full bg-[#f0e9dc] p-3 shadow-sm transition-all hover:bg-[#e8e0d0]"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/ian"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cta rounded-full bg-[#f0e9dc] p-3 shadow-sm transition-all hover:bg-[#e8e0d0]"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <CvCta />
        </div>
      </div>
    </section>
  );
}
