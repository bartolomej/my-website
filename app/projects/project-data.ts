export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  websiteUrl: string;
  githubUrl?: string;
  preview?: "screenshot" | "og-image";
}

export const projects: Project[] = [
  {
    id: "jobwiser",
    title: "JobWiser",
    year: 2025,
    description: "AI-powered job search platform",
    websiteUrl: "https://jobwiser.co",
    preview: "screenshot",
  },
  {
    id: "kazm",
    title: "Kazm",
    year: 2022,
    description: "Membership platform I was building at Kazm",
    websiteUrl: "https://join.kazm.com",
  },
  {
    id: "pins",
    title: "Pins",
    year: 2024,
    description: "Toy dynamic programming language with VM",
    websiteUrl: "https://github.com/bartolomej/pins24",
  },
  {
    id: "flowser",
    title: "Flowser",
    year: 2023,
    description: "Flow blockchain development tool kickstarted at 2021 Flow hackathon",
    websiteUrl: "https://flowser.dev",
  },
  {
    id: "pensive",
    title: "Pensive",
    year: 2024,
    description: "Mental coaching app I was building at LightningRod Labs",
    websiteUrl: "https://pensiveapp.com",
  },
  {
    id: "linklock",
    title: "LinkLock",
    year: 2023,
    description: "On-chain membership protocol built at 2023 Flow hackathon",
    websiteUrl: "https://devfolio.co/projects/linklock-2686",
  },
  {
    id: "woda",
    title: "Woda",
    year: 2023,
    description: "Animated landing website I built at HiGroup",
    websiteUrl: "https://www.woda-alliance.com",
  },
  {
    id: "genart",
    title: "GenArt",
    year: 2020,
    description: "Generative art experiments in WebGL",
    websiteUrl: "https://bartolomej.github.io/genart",
    githubUrl: "https://github.com/bartolomej/genart",
    preview: "screenshot",
  },
  {
    id: "rn-alarm",
    title: "React Native alarm",
    year: 2020,
    description: "Demo React Native alarm clock application",
    websiteUrl: "https://github.com/bartolomej/rn-alarm",
    githubUrl: "https://github.com/bartolomej/rn-alarm",
    preview: "og-image",
  },
];
