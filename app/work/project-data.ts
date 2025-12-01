export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  websiteUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  preview?: "screenshot" | "og-image";
}

export const projects: Project[] = [
  {
    id: "aluena",
    title: "Aluena",
    year: 2025,
    description: "Pre-vetted talent pool for web3",
    websiteUrl: "https://aluena.com",
    preview: "screenshot",
    isFeatured: true,
  },
  {
    id: "defeed",
    title: "Defeed",
    year: 2025,
    description: "A single feed to never miss what happens",
    websiteUrl: "https://defeed.co",
    githubUrl: "https://github.com/defeedco/defeed",
    preview: "screenshot",
    isFeatured: true,
  },
  {
    id: "cadence-formatter",
    title: "Cadence Formatter",
    year: 2025,
    description: "Cadence programming language formatter",
    githubUrl: "https://github.com/bartolomej/cadence",
    isFeatured: false,
  },
  {
    id: "vibetest",
    title: "VibeTest",
    year: 2025,
    description: "e2e tests that evolve effortlessly",
    websiteUrl: "https://vibetest.me",
    preview: "screenshot",
    isFeatured: false,
  },
  {
    id: "jobwiser",
    title: "JobWiser",
    year: 2025,
    description: "AI-powered job search platform",
    websiteUrl: "https://jobwiser.co",
    preview: "screenshot",
    isFeatured: false,
  },
  {
    id: "kazm",
    title: "Kazm",
    year: 2022,
    description: "Membership platform for web3 communities",
    websiteUrl: "https://join.kazm.com",
    isFeatured: true,
  },
  {
    id: "pins",
    title: "Pins",
    year: 2024,
    description: "Toy dynamic programming language with VM",
    websiteUrl: "https://github.com/bartolomej/pins24",
    isFeatured: false,
  },
  {
    id: "flowser",
    title: "Flowser",
    year: 2023,
    description: "Flow blockchain development tool kickstarted at 2021 Flow hackathon",
    websiteUrl: "https://flowser.dev",
    isFeatured: true,
  },
  {
    id: "pensive",
    title: "Pensive",
    year: 2024,
    description: "Mental coaching app I was building at LightningRod Labs",
    websiteUrl: "https://pensiveapp.com",
    isFeatured: true,
  },
  {
    id: "linklock",
    title: "LinkLock",
    year: 2023,
    description: "On-chain membership protocol built at 2023 Flow hackathon",
    websiteUrl: "https://devfolio.co/projects/linklock-2686",
    isFeatured: true,
  },
  {
    id: "woda",
    title: "Woda",
    year: 2023,
    description: "Animated landing website I built at HiGroup",
    websiteUrl: "https://www.woda-alliance.com",
    isFeatured: true,
  },
  {
    id: "genart",
    title: "GenArt",
    year: 2020,
    description: "Generative art experiments in WebGL",
    websiteUrl: "https://bartolomej.github.io/genart",
    githubUrl: "https://github.com/bartolomej/genart",
    preview: "screenshot",
    isFeatured: true,
  },
  {
    id: "rn-alarm",
    title: "React Native alarm",
    year: 2020,
    description: "Demo React Native alarm clock application",
    websiteUrl: "https://github.com/bartolomej/rn-alarm",
    githubUrl: "https://github.com/bartolomej/rn-alarm",
    preview: "og-image",
    isFeatured: false,
  },
];
