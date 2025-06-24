import { ExperienceItem } from '../../models';

export function Experience() {
  return (
    <section id="projects" className="w-full px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-2xl font-bold">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-element relative border-l-2 pl-8"
            >
              <div className="bg-cta absolute top-0 left-[-9px] h-4 w-4 rounded-full" />
              <h3 className="text-morocco-brown mb-1 text-xl font-semibold">
                {exp.company}
              </h3>
              <p className="mb-1 text-lg font-medium">{exp.role}</p>
              <p className="mb-1 font-medium">Remote</p>
              <p className="text-element mb-2 text-sm">
                {exp.period[0]} - {exp.period[1] ? exp.period[1] : 'Present'}
              </p>
              <ul className="text-text-secondary mb-2 list-none pl-0 text-sm">
                {exp.description.map((desc, i) => (
                  <li key={i} className="mb-1 flex items-start">
                    <span className="text-morocco-brown mr-2">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
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
    company: 'Freelance',
    role: 'React Native Developer',
    period: [2024],
    description: [
      'Longest bullet point text ever in the existence of the universe, it is so long that it will overflow the container and cause layout issues if not handled properly.',
      'Bullet point 2',
    ],
  },
  {
    id: 2,
    company: 'Southern Code',
    role: 'React Native Developer',
    period: [2021, 2022],
    description: ['Bullet point 3', 'Bullet point 4'],
  },
  {
    id: 3,
    company: 'Puzzle Digital',
    role: 'React Native Developer',
    period: [2020, 2021],
    description: [
      'Bullet point 5',
      'Bullet point 6',
      'Bullet point 7',
      'Bullet point 8',
    ],
  },
  {
    id: 4,
    company: 'Next Dots',
    role: 'React Native Developer',
    period: [2018, 2020],
    description: ['Bullet point 9', 'Bullet point 10'],
  },
];
