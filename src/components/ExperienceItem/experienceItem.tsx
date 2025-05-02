import { ExperienceItem } from '../../models';

export function Experience() {
  return (
    <section id="projects" className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-2 border-gray-700 pl-8"
            >
              <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-teal-400" />
              <h3 className="text-xl font-semibold text-teal-400">
                {exp.company}
              </h3>
              <p className="mb-1 text-lg font-medium">{exp.role}</p>
              <p className="mb-2 text-sm text-gray-400">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: '',
    role: '',
    period: '',
    description: '',
  },
  {
    id: 2,
    company: '',
    role: '',
    period: '',
    description: '',
  },
  {
    id: 3,
    company: '',
    role: '',
    period: '',
    description: '',
  },
];
