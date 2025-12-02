import { Image } from '@imagekit/react';
import { THUMBNAILS_URL } from '../../constants';
import { MapPinned } from 'lucide-react';
import { CvCta, MailCta, LinkedInCta } from '..';

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 pt-4 lg:flex-row lg:items-start lg:gap-6 xl:gap-10">
      <div className="flex flex-shrink-0 justify-center lg:justify-start">
        <Image
          src={`${THUMBNAILS_URL}portrait.webp`}
          alt="Hero Profile Image"
          fetchPriority="high"
          loading="eager"
          className="aspect-[4/5] w-[200px] rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:w-[240px] lg:w-[240px] xl:w-[260px]"
          transformation={[
            {
              height: 365,
              width: 240,
              quality: 90,
              format: 'webp',
              progressive: true,
            },
          ]}
        />
      </div>

      <div className="flex w-full flex-col items-center text-center lg:min-w-0 lg:flex-1 lg:items-start lg:pl-2 lg:text-left xl:pl-4">
        <div className="w-full max-w-lg lg:max-w-none">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-7xl">
            Ian Ciarulli
          </h1>
          <h2 className="mb-4 text-lg font-bold text-nowrap sm:text-xl lg:text-2xl xl:mb-3 xl:text-3xl">
            <span className="mr-1 rounded bg-[#061c29] px-1 py-1 text-sm text-[#61dafb] sm:text-base lg:text-2xl xl:text-3xl">
              React Native
            </span>
            Developer
          </h2>
          <div className="mb-4 text-sm sm:text-base lg:text-base xl:text-lg">
            <span className="whitespace-nowrap">
              <span className="group relative">
                <span className="font-bold">5+ </span>
                Years of experience /
              </span>
              <span className="font-bold"> 15+</span> projects
            </span>
          </div>
        </div>

        <div className="text-cta mb-4 flex items-center justify-center lg:justify-start">
          <MapPinned className="text-cta mr-2 h-4 w-4 xl:h-5 xl:w-5" />
          <span className="text-sm sm:text-base lg:text-base xl:text-lg">
            Merlo, Argentina
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start xl:gap-4">
          <MailCta rounded={true} />
          <LinkedInCta rounded={true} />
          <CvCta />
        </div>
      </div>
    </section>
  );
}
