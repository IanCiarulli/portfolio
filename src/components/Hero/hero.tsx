import { Image } from '@imagekit/react';
import { THUMBNAILS_URL } from '../../constants';
import { Mail, Linkedin, MapPinned } from 'lucide-react';
import { CvCta } from '..';

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-2 lg:flex-row lg:items-start lg:gap-12">
      <div className="mb-4 flex w-full justify-center sm:mb-6">
        <Image
          src={`${THUMBNAILS_URL}portrait.webp`}
          alt="Hero Profile Image"
          fetchPriority="high"
          loading="eager"
          className="aspect-[4/5] w-[160px] rounded-xl border border-[#e8dbca] object-cover shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:w-[200px] lg:w-[240px] xl:w-[280px]"
          transformation={[
            {
              height: 480,
              width: 384,
              quality: 95,
              format: 'webp',
              progressive: true,
            },
          ]}
        />
      </div>
      <div className="flex w-full flex-col px-6">
        <div>
          <h1 className="mb-4 w-full text-left text-4xl font-bold whitespace-nowrap sm:mb-8 sm:text-6xl">
            Ian Ciarulli
          </h1>
          <h2 className="mb-3 w-full text-left text-xl font-bold whitespace-nowrap sm:mb-6 sm:text-3xl">
            <span className="mr-1 rounded bg-[#061c29] px-2 py-1 text-[#61dafb]">
              React Native
            </span>
            Developer
          </h2>
          <p className="font-jetbrains mb-4 w-full text-left text-base sm:text-lg">
            <span className="text-base font-bold sm:text-lg"> 5+ </span>Years of
            experience / 15+ projects
          </p>
        </div>
        <div className="text-cta flex w-full">
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
