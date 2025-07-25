import { useAtomValue } from 'jotai';
import { experienceAtom } from '../../store';
import { ExperienceCard } from '../ExperienceCard/experienceCard';

export function Experience() {
  const experiences = useAtomValue(experienceAtom);

  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center justify-center px-12 pt-32 lg:px-0"
      aria-label="Experience Section"
    >
      <div className="mx-auto">
        <div className="mb-6 flex flex-col items-center">
          <h2 className="text-morocco-brown mb-2 text-center text-3xl font-bold tracking-tight">
            Experience
          </h2>
          <div className="bg-element h-1 w-16 rounded-full"></div>
          <div className="text-cta/80 mt-6 w-[85%] text-center text-sm italic lg:w-full">
            <p>
              This is an extended version; for the more compact version, please
              refer to my resume.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
