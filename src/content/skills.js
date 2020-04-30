// common
import typescript from '../assets/tools/typescript.png';
import yarn from '../assets/tools/yarn.png';
// backend development
import nodejs from '../assets/tools/nodejs.png';
import mysql from '../assets/tools/mysql.png';
import heroku from '../assets/tools/heroku.png';
import jest from '../assets/tools/jest.png';
// web development
import react from '../assets/tools/reactjs.png';
import redux from '../assets/tools/redux.png';
import netlify from '../assets/tools/netlify.png';
import webpack from '../assets/tools/webpack.png';
// ui design
import figma from '../assets/tools/figma.png';
// film making
import premierePro from '../assets/tools/premiere-pro.png';
import afterEffects from '../assets/tools/after-effects.png';
import wedding from '../assets/gallery/wedding.jpg';
import onSet from '../assets/skills/film/onset.JPG';
import capricorn from '../assets/gallery/capricorn.jpg';
// screenshots
import backendCode from '../assets/skills/backend/backend-code.png';
import reactCode from '../assets/skills/frontend/react-code.png';
import herokuLogs from '../assets/skills/backend/heroku-logs.png';
import postman from '../assets/skills/backend/postman.png';
import mobileDesign from '../assets/skills/frontend/mobile-design.png';
import reactDev from '../assets/skills/frontend/react-development.png';
import reactNativeDev from '../assets/skills/frontend/rn-development.png';
import websiteDesign from '../assets/skills/frontend/website-design.png';
import mobile from '../assets/mobile.png';

const tools = {
  "nodejs": {
    "icon": nodejs,
    "title": "Node.js",
    "description": "I like working with JavaScript, because of it's \"expressiveness\" and generally coding experience."
  },
  "mysql": {
    "icon": mysql,
    "title": "mysql",
    "description": "Mysql and TypeORM are a great combo for Node.js persistence layer"
  },
  "heroku": {
    "icon": heroku,
    "title": "heroku",
    "description": "Heroku is a great, simple and cheap option for hobbyist."
  },
  "jest": {
    "icon": jest,
    "title": "jest",
    "description": "I use Jest for testing."
  },
  "yarn": {
    "icon": yarn,
    "title": "yarn",
    "description": "I migrated from npm to yarn, because it's a little bit faster."
  },
  "reactjs": {
    "icon": react,
    "title": "React.js",
    "description": "I love developing apps in React.js."
  },
  "redux": {
    "icon": redux,
    "title": "redux",
    "description": "I think redux coupled with redux-tools is a great way to manage global app state."
  },
  "netlify": {
    "icon": netlify,
    "title": "Netlify",
    "description": "Netlify is a great and cheap option for deployment."
  },
  "webpack": {
    "icon": webpack,
    "title": "Webpack",
    "description": "I use Webpack for code bundling."
  },
  "typescript": {
    "icon": typescript,
    "title": "TypeScript",
    "description": "If I want to be a 'type safe' developer I use TypeScript. It's good for refactoring too."
  },
  "react-native": {
    "icon": react,
    "title": "React Native",
    "description": "I love developing apps (that don't require top notch performance) in React Native."
  },
  "figma": {
    "icon": figma,
    "title": "Figma",
    "description": ""
  },
  "premiere-pro": {
    "icon": premierePro,
    "title": "Adobe Premiere Pro",
    "description": ""
  },
  "after-effects": {
    "icon": afterEffects,
    "title": "Adobe After Effects",
    "description": ""
  },
}

export default [
  {
    "title": "Backend development",
    "description": [
      `I started with backend development in Node.js around ${new Date().getFullYear() - 2017} years ago. It's one of my favorite disciplines in software development space.`,
      `I have experience in software testing, building REST APIs, writing well structured backend code, etc,.. Since I started I've developed 4 backend apps, that expose REST APIs, communicate with database and other external services,..`
    ],
    "tools": [
      tools["nodejs"],
      tools["mysql"],
      tools["heroku"],
      tools["jest"],
    ],
    "previews": [
      {
        "url": herokuLogs,
        "type": "image",
      },
      {
        "url": postman,
        "type": "image",
      },
      {
        "url": backendCode,
        "type": "image",
      },
    ]
  },
  {
    "title": "Web Development",
    "description": "I've developed many web apps mostly in vanilla JS and React.js.",
    "tools": [
      tools["reactjs"],
      tools["webpack"],
      tools["netlify"],
      tools["yarn"],
      tools["redux"],
      tools["typescript"],
    ],
    "previews": [
      {
        "url": reactCode,
        "type": "image",
      },
      {
        "url": websiteDesign,
        "type": "image",
      },
      {
        "url": reactDev,
        "type": "image",
      },
    ]
  },
  {
    "title": "Mobile development",
    "description": "I started mobile development in 2018. Since then I developed several React Native apps.",
    "tools": [
      tools["react-native"],
      tools["redux"],
      tools["typescript"],
      tools["figma"],
      tools["yarn"],
    ],
    "previews": [
      {
        "url": mobileDesign,
        "type": "image"
      },
      {
        "url": reactNativeDev,
        "type": "image"
      },
      {
        "url": mobile,
        "type": "image"
      },
    ]
  },
  {
    "title": "Photography and Film making",
    "description": "My first passion was film making. At the times I dreamed of becoming a movie director. I have had several years of film making experience. Professionally filmed 4 weddings and helped edited a movie that screened in our local theater 3 times.",
    "tools": [
      tools["premiere-pro"],
      tools["after-effects"]
    ],
    "previews": [
      {
        "url": onSet,
        "type": "image",
      },
      {
        "url": capricorn,
        "type": "image",
      },
      {
        "url": wedding,
        "type": "image",
      },
    ]
  }
]
