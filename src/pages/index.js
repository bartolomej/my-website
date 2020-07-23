import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { rhythm } from "../utils/typography";
import SEO from "../components/seo";
import text from "../../content/index.json";
import Animation from "../components/animation";
import isMobile from "is-mobile";
import { ThemeContext } from "../utils/theme";


function Index ({ location }) {
  const { colorMode } = React.useContext(ThemeContext);

  return (
    <Layout location={location}>
      <SEO title={"Home"}/>
      <Header>
        <Emoji>👋</Emoji>
        <Title>{text.title}</Title>
        <Description>{text.description}</Description>
      </Header>
      <AnimWrapper>
        <Animation
          startRadius={isMobile() ? 1 : 42}
          hueFactor={colorMode === 'light' ? 3 : 5}
          startHue={320}
        />
      </AnimWrapper>
    </Layout>
  );
}

const Header = styled.header`
  margin: 0 auto;
  text-align: center;
  max-width: ${rhythm(20)};
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 700px) {
    width: 90vw;
    text-align: left;
  }
`;

const AnimWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  & canvas {
    animation: 1s ease-in intro forwards;
  }
  @keyframes intro {
    0% { opacity: 0 }
    100% { opacity: 0.8 }
  }
`;

const Emoji = styled.div`
  font-size: 2.2em;
`;

const Title = styled.h1`
  margin-top: 5px;
  font-size: 3rem;
  text-shadow: 3px 3px 1px rgb(var(--color-lightBlue));
  @media (max-width: 700px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
`;

export default Index;
