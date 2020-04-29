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
// project groups assets
import mobilePreview from '../assets/mobile.png';


const mathProjects = [
  {
    "title": "Path Finding",
    "description": "Simple web visualization of 2 path finding algorithms.",
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
    "description": "Web solar system playground. Create new planet with initial velocities and watch how the solar system evolves.",
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
    "description": "2D dynamical vector field playground. Input equations and watch vectors evolve through time.",
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
    "description": "A tool for rendering videos and images of Julia Set fractal. Written in GO.",
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
    "description": "Julia Set web interactive playground. Change hyper parameter C value and observe how the fractal changes.",
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
    "description": "",
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
    "description": "I build this website for a local translation agency.",
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
    "title": "Translator",
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
    "description": "We, as a team of 8 young passionate developers, product managers and designers developed this website during a workshop at Business Solutions d.o.o.",
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
]

const projects = [
  {
    "title": "Math Projects",
    "path": "/math",
    "description": "Coding projects related to mathematics and physics.",
    "projects": mathProjects,
    "preview": {
      "url": vectorField,
      "type": "video",
    },
    "tags": [
      "go-lang",
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
