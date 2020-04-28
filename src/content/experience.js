// common
import typescript from '../assets/tools/typescript-plain.png';
import yarn from '../assets/tools/yarn-original.png';
// backend development
import nodejs from '../assets/tools/nodejs-plain.png';
import mysql from '../assets/tools/mysql-plain.png';
import heroku from '../assets/tools/heroku-plain.png';
import jest from '../assets/tools/jest.png';
// web development
import react from '../assets/tools/react-original.png';
import redux from '../assets/tools/redux-original.png';
import netlify from '../assets/tools/netlify.png';
import webpack from '../assets/tools/webpack-original.png';
// ui design
import dribble from '../assets/tools/dribble.png';
import behance from '../assets/tools/behance.png';
import figma from '../assets/tools/figma.png';
// film making
import premierePro from '../assets/tools/premiere-pro.png';
import afterEffects from '../assets/tools/after-effects.png';
import wedding from '../assets/gallery/wedding.jpg';
// screenshots
import backendCode from '../assets/experiences/backend/backend-code.png';
import reactCode from '../assets/experiences/website/react-code.png';
import herokuLogs from '../assets/experiences/backend/heroku-logs.png';
import postman from '../assets/experiences/backend/postman.png';
import figmaBoard from '../assets/experiences/design/figma.png';
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
  "dribble": {
    "icon": dribble,
    "title": "Dribble",
    "description": ""
  },
  "behance": {
    "icon": behance,
    "title": "Behance",
    "description": ""
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
    "description": "Backend development is one of my favorite things to do as a developer. I like thinking in terms of systems: how systems behave, recover, communicate...",
    "tools": [
      tools["nodejs"],
      tools["mysql"],
      tools["heroku"],
      tools["jest"],
    ],
    "previews": [
      {
        "url": herokuLogs,
        "type": "image"
      },
      {
        "url": postman,
        "type": "image"
      },
      {
        "url": backendCode,
        "type": "image"
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
      tools["jest"]
    ],
    "previews": [
      {
        "url": reactCode,
        "type": "image",
        "size": 300
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
      tools["jest"],
      tools["yarn"],
    ],
    "previews": [
      {
        "url": mobile,
        "type": "image",
        "size": 400
      }
    ]
  },
  {
    "title": "UI Design",
    "description": "I'm not a designer, but I do fully design my own apps. For that I use Figma prototyping tool to sketch some quick mockups of my design.",
    "tools": [
      tools["dribble"],
      tools["behance"],
      tools["figma"],
    ],
    "previews": [
      {
        "url": figmaBoard,
        "type": "image",
        "size": 300
      }
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
        "url": wedding,
        "type": "image",
        "size": 300
      }
    ]
  }
]
