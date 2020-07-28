import React from "react";
import styled from "@emotion/styled";


const tools = {
  "react-native": {
    image: require("../assets/tools/react.png"),
    url: "https://reactnative.dev/"
  },
  "react": {
    image: require("../assets/tools/react.png"),
    url: "https://reactjs.org/"
  },
  "after-effects": {
    image: require("../assets/tools/after-effects.png"),
    url: "https://www.adobe.com/si/products/aftereffects.html"
  },
  "figma": {
    image: require("../assets/tools/figma.png"),
    url: "https://www.figma.com/"
  },
  "go": {
    image: require("../assets/tools/go.png"),
    url: "https://golang.org/"
  },
  "heroku": {
    image: require("../assets/tools/heroku.png"),
    url: "https://www.heroku.com/"
  },
  "java": {
    image: require("../assets/tools/java.png"),
    url: "https://www.java.com/"
  },
  "jest": {
    image: require("../assets/tools/jest.png"),
    url: "https://jestjs.io/"
  },
  "mysql": {
    image: require("../assets/tools/mysql.png"),
    url: "https://www.mysql.com/"
  },
  "netlify": {
    image: require("../assets/tools/netlify.png"),
    url: "https://www.netlify.com/"
  },
  "nodejs": {
    image: require("../assets/tools/nodejs.png"),
    url: "https://nodejs.org/"
  },
  "premiere-pro": {
    image: require("../assets/tools/premiere-pro.png"),
    url: "https://www.adobe.com/si/products/premiere.html"
  },
  "photoshop": {
    image: require("../assets/tools/photoshop.png"),
    url: "https://www.adobe.com/si/products/photoshop.html"
  },
  "redux": {
    image: require("../assets/tools/redux.png"),
    url: "https://redux.js.org/"
  },
  "typescript": {
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
    <Link href={t.url} target="_blank" rel="noreferrer">
      <Image alt={`${toolKey} logo`} src={t.image}/>
    </Link>
  );
}

const Link = styled.a`
  box-shadow: none !important;
  display: inline-block;
  margin-right: 8px;
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
  @media (max-width: 700px) {
    width: 45px;
    height: 45px;
  }
`;

const Image = styled.img`
  padding: 14px;
  margin: 0;
  transition: 0.3s ease-in all;
`;
export default Tool;
