import type { ExperienceItem } from '../models';

export const ExperienceItems: ExperienceItem[] = [
  {
    id: 1,
    company: 'Freelance',
    role: 'Sole Engineer - Technical Consultant',
    period: [2024],
    description: [
      "First time doing technical consulting for a project where I wouldn't actually be hands-on with development. Valuable experience making technical recommendations, cutting the MVP scope to essentials, and helping the client better convey their vision to developers.",
      'Worked for a client who had a clear idea but little else defined, other than a tight deadline. I managed everything from initial planning to final delivery. Taking time early to flesh out their vision, set expectations, and collect all necessary details before development started made it possible to deliver on time.',
    ],
  },
  {
    id: 2,
    company: 'Southern Code',
    role: 'React Native Developer',
    period: [2021, 2022],
    description: [
      "Started at Southern Code continuing the same project I'd been working on at Puzzle Digital. Once the app launched and the high-demand phase settled, they kept just the essential maintenance crew. I got moved to another project that was nearing its final stage but still had significant work to complete.",
      "Up until then, I'd worked on products that were already live or new projects with flexible launch dates. This time was different; the deadline was non-negotiable. We weren't severely behind, but there was a mix of technical debt and complex features to implement. The experience I'd gained on the Dolby platform became crucial for this challenge. The team was receptive to process suggestions, and thanks to their openness and our collective effort, we delivered on time while meeting the client's quality expectations.",
      'First time being a mobile tech lead, and I had to figure out how to meet the client deadline or, worst case, minimize the impact because the project was behind schedule and close to its deadline. I led my team of 5 developers to restructure our processes and enhance our collaborative culture, successfully launching on time with no quality trade-offs.',
    ],
  },
  {
    id: 3,
    company: 'Puzzle Digital',
    role: 'React Native Developer',
    period: [2020, 2021],
    description: [
      "Hands down the most ambitious project I've worked on has been Dolby's content platform. When I joined, there was just a small group of engineers and developers working on a POC. I was involved from that early POC stage all the way through MVP to the first release candidate. We maximized React Native's multiplatform capabilities, compiling for iOS, Android, Web, and tvOS. First time I'd been on such a large-scale project from day one. Taught me a lot about architecture, scalability, and planning, but also how important communication and clear team goals are.",
      'When I transferred from Next Dots (which eventually became Puzzle Digital), the company created Puzzle Academy to structure their developer training program. I got assigned a group of trainee developers to mentor and help them grow until they were ready to join one of the development teams.',
      'I also helped improve our candidate selection process by suggesting exercises based on real projects the company had built. These included some of the recurring problems developers actually run into day-to-day. Helped us properly evaluate candidates and put them in the right groups based on their skill level.',
    ],
  },
  {
    id: 4,
    company: 'Next Dots',
    role: 'React Native Developer',
    period: [2018, 2020],
    description: [
      'My first job in the software industry. When I joined Next Dots, we were just a few people total. It was an excellent opportunity to solidify my knowledge of the technologies, since everything I knew about React Native was self-taught and my programming foundation came from a game development degree I had been studying the year before.',
      'I worked on many different projects, to the point where I could be working on up to 4 different codebases in a single day. A bit overwhelming as a junior at first, but it ended up showing me multiple examples of how to approach problems and navigate different structures.',
      'At Next Dots, we formed a core team that stayed together for several years and eventually became the backbone of major projects like Dolby XP & Dolby HUB.',
    ],
  },
];
