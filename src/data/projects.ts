export interface Project {
  title: string;
  stack: string[];
  description: string;
  links: { label: string; href: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Assembler & Virtual Machine",
    featured: true,
    stack: ["C", "Assembly"],
    description:
      "An assembler that encodes assembly code to binary in simulated memory and runs it. Grew over 9 milestones to support conditional jumps, I/O, loops, and functions with parameters and return values.",
    links: [
      {
        label: "Code",
        href: "https://github.com/ZachatorCodes/csc2025-assembler",
      },
    ],
  },
  {
    title: "Trip-Planning Server",
    featured: true,
    stack: ["Java", "Spring Boot", "JUnit", "GitHub Actions"],
    description:
      "A REST API for planning trips, built in a 5-person Scrum team for Colorado State's Software Engineering course. It calculates geographic distances, builds tours and searches places. Every pull request is peer-reviewed, and merges deploy through CI/CD after passing JUnit, Mockito and Postman tests.",
    links: [],
  },
  {
    title: "Habit Bingo (WIP)",
    featured: true,
    stack: ["SvelteKit", "TypeScript", "PostgreSQL", "Claude Code"],
    description:
      "A monthly habit-tracking bingo game for friend groups, live in production with 8 tagged releases. Built test-first with Claude Code using design specs, milestone plans and architecture decision records, with Google OAuth, rate-limited sign-in and 79 Vitest and Playwright test files running in GitHub Actions CI.",
    links: [
      { label: "Live site", href: "https://habit-bingo.app" },
      {
        label: "Code",
        href: "https://github.com/ZachatorCodes/habit-bingo-v2",
      },
    ],
  },
  {
    title: "Billing System",
    stack: ["C++", "CMake", "PostgreSQL"],
    description:
      "A group-built C++ billing system backed by PostgreSQL through libpq, with dependencies managed by CMake and vcpkg.",
    links: [],
  },

  {
    title: "Kitty Connection",
    stack: ["React", "Ruby on Rails", "Material UI"],
    description:
      "A full-stack cat-adoption app where users browse shelters and cats and apply to adopt, limited to one application per cat. Includes BCrypt authentication and Action Mailer emails. My Flatiron School capstone.",
    links: [
      {
        label: "Code",
        href: "https://github.com/ZachatorCodes/kitty-connection",
      },
    ],
  },
  {
    title: "Northern Colorado Grotto Website (WIP)",
    stack: ["React", "React Router", "Tailwind CSS", "DaisyUI"],
    description:
      "A single-page website for the Northern Colorado Grotto, a chapter of the National Speleological Society, where I serve as secretary.",
    links: [
      {
        label: "Live site",
        href: "https://zachatorcodes.github.io/noco-grotto/",
      },
    ],
  },
  {
    title: "Action Runner",
    stack: ["JavaScript", "Three.js", "Claude"],
    description:
      "A parkour and exploration browser game built with a tutoring student by prompting Claude, used to teach how to plan, prompt and debug with AI. Plays on desktop and mobile.",
    links: [
      {
        label: "Live site",
        href: "https://zachatorcodes.github.io/tutoring-action-runner/",
      },
    ],
  },
  {
    title: "Steam Sale Finder",
    stack: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
    description:
      "Finds games on sale using CheapShark's public API. My first JavaScript projects.",
    links: [
      {
        label: "Live site",
        href: "https://zachatorcodes.github.io/steam-sales/",
      },
    ],
  },
];
