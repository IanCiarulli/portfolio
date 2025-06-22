import { ExperienceItem } from '../../models';

export function Experience() {
  return (
    <section id="projects" className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-2xl font-bold">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-element relative border-l-2 pl-8"
            >
              <div className="bg-cta absolute top-0 left-[-9px] h-4 w-4 rounded-full" />
              <h3 className="text-morocco-brown text-xl font-semibold">
                {exp.company}
              </h3>
              <p className="mb-1 text-lg font-medium">{exp.role}</p>
              <p className="text-element mb-2 text-sm">{exp.period}</p>
              <p className="text-text-secondary">{exp.description}</p>
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
    company: 'Southern Code',
    role: 'RN DEVELOPER',
    period: '2021 - 2022',
    description:
      'RN developer with a focus on mobile applications, working on various projects to enhance user experience and performance.',
  },
  {
    id: 2,
    company: 'Puzzle Digital',
    role: 'RN DEVELOPER',
    period: '2020 - 2021',
    description:
      'RN developer with a focus on mobile applications, working on various projects to enhance user experience and performance.',
  },
  {
    id: 3,
    company: 'Next Dots',
    role: 'RN DEVELOPER',
    period: '2018 - 2020',
    description:
      'RN developer with a focus on mobile applications, working on various projects to enhance user experience and performance.',
  },
];
