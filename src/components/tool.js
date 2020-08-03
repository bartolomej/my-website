import React from "react";
import styled from "@emotion/styled";


const tools = {
  "react-native": {
    title: "React Native",
    image: require("../assets/tools/react.png"),
    url: "https://reactnative.dev/"
  },
  "react": {
    title: "React.js",
    image: require("../assets/tools/react.png"),
    url: "https://reactjs.org/"
  },
  "after-effects": {
    title: "Adobe After Effects",
    image: require("../assets/tools/after-effects.png"),
    url: "https://www.adobe.com/si/products/aftereffects.html"
  },
  "figma": {
    title: "Figma",
    image: require("../assets/tools/figma.png"),
    url: "https://www.figma.com/"
  },
  "go": {
    title: "Go language",
    image: require("../assets/tools/go.png"),
    url: "https://golang.org/"
  },
  "heroku": {
    title: "Heroku deployment platform",
    image: require("../assets/tools/heroku.png"),
    url: "https://www.heroku.com/"
  },
  "java": {
    title: "Java language",
    image: require("../assets/tools/java.png"),
    url: "https://www.java.com/"
  },
  "jest": {
    title: "Jest testing tool",
    image: require("../assets/tools/jest.png"),
    url: "https://jestjs.io/"
  },
  "mysql": {
    title: "MySQL database",
    image: require("../assets/tools/mysql.png"),
    url: "https://www.mysql.com/"
  },
  "netlify": {
    title: "Netlify deployment platform",
    image: require("../assets/tools/netlify.png"),
    url: "https://www.netlify.com/"
  },
  "nodejs": {
    title: "Node.js",
    image: require("../assets/tools/nodejs.png"),
    url: "https://nodejs.org/"
  },
  "premiere-pro": {
    title: "Adobe Premiere Pro",
    image: require("../assets/tools/premiere-pro.png"),
    url: "https://www.adobe.com/si/products/premiere.html"
  },
  "photoshop": {
    title: "Adobe Photoshop",
    image: require("../assets/tools/photoshop.png"),
    url: "https://www.adobe.com/si/products/photoshop.html"
  },
  "redux": {
    title: "Redux state management",
    image: require("../assets/tools/redux.png"),
    url: "https://redux.js.org/"
  },
  "typescript": {
    title: "TypeScript language",
    image: require("../assets/tools/typescript.png"),
    url: "https://www.typescriptlang.org/"
  }
};

function Tool ({ toolKey }) {
  const t = tools[toolKey];

  if (!t) {
    throw new Error(`Tool ${toolKey} not found`);
  }

  return (
    <Link title={t.title} href={t.url} target="_blank" rel="noreferrer">
      <Image alt={`${toolKey} logo`} src={t.image}/>
    </Link>
  );
}

const Link = styled.a`
  box-shadow: none !important;
  display: inline-block;
  margin-right: 3px;
  margin-bottom: 8px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  transition: 0.2s ease-in background;
  &:hover {
    background: rgb(var(--color-linkHover));
    img {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1300px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 700px) {
    width: 55px;
    height: 55px;
  }
`;

const Image = styled.img`
  padding: 14px;
  margin: 0;
  transition: 0.3s ease-in all;
`;
export default Tool;
