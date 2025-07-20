import { useAtomValue } from 'jotai';
import { experienceAtom } from '../../store';

export function Experience() {
  const experiences = useAtomValue(experienceAtom);

  return (
    <section
      id="experience"
      className="w-full py-32"
      aria-label="Experience Section"
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-6 flex flex-col items-center">
          <h2 className="text-morocco-brown mb-2 text-center text-3xl font-bold tracking-tight">
            Experience
          </h2>
          <div className="bg-element h-1 w-16 rounded-full"></div>
          <div className="text-cta/80 mt-6 w-[85%] text-center text-sm italic max-[361px]:w-[90%] lg:w-full">
            <p>
              This is an extended version; for a more streamlined one, please
              refer to my resume.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-spring-wood/95 border-spring-wood/40 rounded-xl border p-6 shadow-[0_2px_8px_-1px_rgba(0,0,0,0.08)] transition-all duration-200 hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.12)]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="text-morocco-brown text-xl font-semibold">
                    {exp.company}
                  </h3>
                  <p className="font-cta-hover text-lg font-medium">
                    {exp.role}
                  </p>
                  <div className="text-cta flex items-center gap-4 text-sm">
                    <span className="font-medium">Remote</span>
                    <span className="font-medium">
                      {exp.period[0]} -{' '}
                      {exp.period[1] ? exp.period[1] : 'Present'}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-morocco-brown mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current"></span>
                      <span className="text-sm leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
