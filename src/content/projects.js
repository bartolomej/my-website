import cryptobricks from '../assets/projects/cryptobricks.mp4'
import translator from '../assets/projects/translator.mp4';
import awesomeSearch from '../assets/projects/awesome-search.mp4';
import pathFinding from '../assets/projects/path-finding.mp4';
import nikeWebsite from '../assets/projects/nike-website.mp4';
import vectorField from '../assets/projects/vector-field.mp4';
import planetSimulation from '../assets/projects/planet-simulation.mp4';
import scngMobile from '../assets/projects/scng-mobile.png';
import numberFlower from '../assets/projects/number-flower.mp4';
import pendulumDynamics from '../assets/projects/pendulum-dynamics.mp4';
import juliaSet from '../assets/projects/julia-set.mp4';
import moduloArithmetics from '../assets/projects/modulo-arithmetics.mp4';
import simplePendulum from '../assets/projects/simple-pendulum.mp4';
import bsTeams from '../assets/projects/bs-teams.mp4';
import pustUTminuBo from '../assets/projects/pust-u-tminu-bo-plakat.jpg';
import randomCode from '../assets/projects/random-code.mp4';
import wikipediaNetwork from '../assets/projects/wikipedia-network.mp4';
// project groups assets
import mobilePreview from '../assets/mobile.png';
import wedding from '../assets/gallery/wedding.jpg';
import weddingVideo1 from '../assets/projects/wedding-1.mp4';
import weddingVideo2 from '../assets/projects/wedding-2.mp4';


const mathProjects = [
  {
    "title": "Path Finding",
    "description": "Simple web visualization of 2 path finding algorithms. Made for a school project.",
    "repo": "https://github.com/bartolomej/path-finding",
    "preview": {
      "url": pathFinding,
      "type": "video"
    },
    "url": "https://bartolomej.github.io/path-finding/",
    "tags": [
      "graph-algorithms",
      "path-finding"
    ]
  },
  {
    "title": "Planets Simulation",
    "description": "Web solar system playground. Create new planets and observe how the solar system evolves with time.",
    "preview": {
      "url": planetSimulation,
      "type": "video"
    },
    "url": "https://bartolomej.github.io/planet-system/",
    "repo": "https://github.com/bartolomej/planet-system",
    "tags": [
      "physics-simulation",
      "solar-system",
      "gravity"
    ]
  },
  {
    "title": "Vector Field",
    "description": "2D dynamical vector field playground. Input equations and observe field evolution with time.",
    "preview": {
      "url": vectorField,
      "type": "video"
    },
    "url": "https://bartolomej.github.io/vector-field/",
    "repo": "https://github.com/bartolomej/vector-field",
    "tags": [
      "math-simulation",
      "vector-field"
    ]
  },
  {
    "title": "Julia Set Art",
    "description": "A tool for rendering videos and images of Julia Set fractal. Written in GO language.",
    "url": "https://bartolomej.github.io/complex-set-art/",
    "repo": "https://github.com/bartolomej/complex-set-art",
    "preview": {
      "url": "https://raw.githubusercontent.com/bartolomej/complex-set-art/master/docs/examples/giphy1.gif",
      "type": "image",
      "background": "black",
    },
    "tags": [
      "complex-set",
      "julia-set",
      "fractals"
    ]
  },
  {
    "title": "Julia Set",
    "description": "This is a julia set interactive web playground. Change hyper parameter and observe how the fractal changes.",
    "url": "https://github.com/bartolomej/julia-set",
    "repo": "https://github.com/bartolomej/julia-set",
    "preview": {
      "url": juliaSet,
      "type": "video"
    },
    "tags": [
      "complex-set",
      "julia-set",
      "fractals"
    ]
  },
  {
    "title": "Pendulum Dynamics",
    "description": "Pendulum system dynamics with 'phase space' visualization.",
    "url": "https://bartolomej.github.io/pendulum-dynamics/",
    "repo": "https://github.com/bartolomej/pendulum-dynamics",
    "preview": {
      "url": pendulumDynamics,
      "type": "video"
    },
    "tags": [
      "analysis",
      "pendulum",
      "physics"
    ]
  },
  {
    "title": "Number Flower",
    "description": "Visualization of number ratios, inspired by Mathologer video.",
    "repo": "https://github.com/bartolomej/flower",
    "url": "https://bartolomej.github.io/flower/",
    "preview": {
      "url": numberFlower,
      "type": "video"
    },
    "tags": [
      "number-patterns",
      "mathematics",
    ]
  },
  {
    "title": "Simple pendulum",
    "description": "Simple harmonic pendulum physics visualization.",
    "repo": "https://github.com/bartolomej/simple-pendulum",
    "url": "https://bartolomej.github.io/simple-pendulum/",
    "preview": {
      "url": simplePendulum,
      "type": "video"
    },
    "tags": [
      "simulation",
      "physics",
    ]
  },
  {
    "title": "Modulo Patterns",
    "description": "Geometric patterns in number modulo arithmetics, inspired by Mathologer video.",
    "repo": "https://github.com/bartolomej/modulo-arithmetics",
    "url": "https://bartolomej.github.io/modulo-arithmetics/",
    "preview": {
      "url": moduloArithmetics,
      "type": "video"
    },
    "tags": [
      "geometry",
      "mathematics",
    ]
  }
]

const websites = [
  {
    "title": "Awesome Search",
    "description": "This is a search engine for a huge open source collection of awesome stuff <a href=\"https://awesome.re\">Awesome Lists</a>. (work in progress)",
    "preview": {
      "url": awesomeSearch,
      "type": "video"
    },
    "url": "https://bartolomej.github.io/awesome-search/",
    "repo": "https://github.com/bartolomej/awesome-search",
    "tags": [
      "awesome-list",
      "nodejs",
      "reactjs",
      "rest-api"
    ]
  },
  {
    "title": "Translator Website",
    "description": "I build this website for a local translation agency.",
    "preview": {
      "url": translator,
      "type": "video"
    },
    "url": "https://www.prevajalec.eu/",
    "tags": [
      "translation-agency",
      "agency-website"
    ]
  },
  {
    "title": "Nike Website Concept",
    "description": "Nike website design concept, developed for a school project.",
    "url": "https://bartolomej.github.io/nike-website/",
    "repo": "https://github.com/bartolomej/nike-website",
    "preview": {
      "url": nikeWebsite,
      "type": "video"
    },
    "tags": [
      "ui-design",
      "concept-website"
    ]
  },
  {
    "title": "CryptoBricks",
    "description": "A simple browser game that interacts with the Ethereum blockchain to players to publish and compete on bounties for rewards.",
    "preview": {
      "url": cryptobricks,
      "type": "video"
    },
    "url": "https://www.cryptobricks.in/",
    "repo": "https://github.com/bartolomej/crypto-bricks",
    "tags": [
      "cryptocurrency",
      "ethereum",
      "browser-game"
    ]
  },
  {
    "title": "BsTeams",
    "description": "We, as a team of 8 young passionate developers, product managers and designers developed this website during a <a href=\"https://www.talenthub.si/\">Next Talent Hub</a> workshop at <a href=\"https://www.b-s.si/\">Business Solutions</a>.",
    "repo": "https://github.com/jakic12/bs-teams",
    "preview": {
      "url": bsTeams,
      "type": "video"
    },
    "tags": [
      "workshop",
      "reactjs",
      "product-website"
    ]
  },
  {
    "title": "Wikipedia Network",
    "description": "Visualize wikipedia pages as a graph.",
    "repo": "https://github.com/bartolomej/wikipedia-network",
    "preview": {
      "url": wikipediaNetwork,
      "type": "video"
    },
    "tags": [
      "wikipedia",
      "graph-visualization",
      "network"
    ]
  },
  {
    "title": "Random Code",
    "description": "A collection of some random coding stuff that isn't that significant.",
    "preview": {
      "url": randomCode,
      "type": "video"
    },
    "tags": [
      "fourier",
      "circle-collision",
      "random"
    ]
  }
]

const mobile = [
  {
    "title": "SCNG App",
    "description": "Mobile application that displays schedule and meal menu for our high school in Nova Gorica. Sadly never launched.",
    "url": "https://bartolomej.github.io/scng-api/",
    "repo": "https://github.io/bartolomej/scng-mobile/",
    "preview": {
      "url": scngMobile,
      "type": "image",
      "background": "transparent",
      "overflow": "visible"
    },
    "tags": [
      "react-native",
      "nodejs",
      "mobile-app"
    ]
  },
];

const film = [
  {
    "title": "Wedding video 2",
    "description": "I filmed and edited my cousins wedding. This was my second wedding video project.",
    "preview": {
      "url": weddingVideo2,
      "type": "video",
    },
    "tags": [
      "wedding",
      "film",
      "video-editing"
    ]
  },
  {
    "title": "Wedding video 1",
    "description": "Me and my friend <a href=\"https://www.instagram.com/tilen_miklavic/\">Tilen Miklavic</a> filmed and edited a wedding video for a local client. My first wedding video project.",
    "preview": {
      "url": weddingVideo1,
      "type": "video",
    },
    "tags": [
      "wedding",
      "film",
      "video-editing"
    ]
  },
  {
    "title": "Documentary Film",
    "description": "We, as a group of 3 young film makers filmed, produced and edited local documentary film, which takes a look at the history of a local tradition. The film is called 'Pust u Tminu Bo!'.",
    "url": "https://www.facebook.com/Pust.u.tminu.bo/",
    "preview": {
      "url": pustUTminuBo,
      "type": "image",
    },
    "tags": [
      "wedding",
      "film",
      "video-editing"
    ]
  },
];

const projects = [
  {
    "title": "Math related Projects",
    "path": "/math",
    "description": "Coding projects related to mathematics and physics.",
    "projects": mathProjects,
    "preview": {
      "url": vectorField,
      "type": "video",
    },
    "tags": [
      "mathematics",
      "fractals",
      "web-simulations",
    ]
  },
  {
    "title": "Websites / Server apps",
    "path": "/websites",
    "description": "Coding projects related to mathematics and physics.",
    "projects": websites,
    "preview": {
      "url": translator,
      "type": "video",
    },
    "tags": [
      "reactjs",
      "html/css",
      "nodejs",
      "rest-api"
    ]
  },
  {
    "title": "Mobile / Server apps",
    "path": "/mobile",
    "description": "Mobile and backend apps that I developed.",
    "projects": mobile,
    "preview": {
      "url": mobilePreview,
      "type": "image",
    },
    "tags": [
      "react-native",
      "android",
      "ios",
      "nodejs"
    ]
  },
  {
    "title": "Film making",
    "path": "/film",
    "description": "Film making projects I worked on from 2016 - 2018.",
    "projects": film,
    "preview": {
      "url": wedding,
      "type": "image",
    },
    "tags": [
      "wedding-videos",
      "filming",
      "documentary",
    ]
  },
]

export function getProjectGroup (path) {
  for (let p of projects) {
    if (p.path === path) {
      return p;
    }
  }
  throw new Error('Project with path: "' + path + '" not found')
}

export default projects;
