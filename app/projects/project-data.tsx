export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Kazm",
    year: 2022,
    description: "Membership platform I was building at Kazm",
    url: "https://join.kazm.com",
  },
  {
    title: "Pins",
    year: 2024,
    description: "Toy dynamic programming language with VM",
    url: "https://github.com/bartolomej/pins24",
  },
  {
    title: "Flowser",
    year: 2023,
    description: "Flow blockchain development tool kickstarted at 2021 Flow hackathon",
    url: "https://flowser.dev",
  },
  {
    title: "Pensive",
    year: 2024,
    description: "Mental coaching app I was building at LightningRod Labs",
    url: "https://pensiveapp.com",
  },
  {
    title: "LinkLock",
    year: 2023,
    description: "On-chain membership protocol built at 2023 Flow hackathon",
    url: "https://devfolio.co/projects/linklock-2686",
  },
  {
    title: "Woda",
    year: 2023,
    description: "Animated landing website I built at HiGroup",
    url: "https://www.woda-alliance.com",
  },
  {
    title: "GenArt",
    year: 2020,
    description: "Generative art experiments in WebGL",
    url: "https://github.com/bartolomej/genart",
  },
  {
    title: "React Native alarm",
    year: 2020,
    description: "Demo React Native alarm clock application",
    url: "https://github.com/bartolomej/rn-alarm",
  },
];
