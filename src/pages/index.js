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
      <SEO
        title={"Home"}
        banner={'website-banner.png'}
      />
      <Header>
        <Emoji>👋</Emoji>
        <Title>{text.title}</Title>
        <Description>{text.description}</Description>
      </Header>
      <AnimWrapper>
        <Animation
          startRadius={isMobile() ? 1 : 42}
          nCircles={isMobile() ? 45 : 60}
          pathLength={isMobile() ? 200 : 350}
          luminosity={colorMode === 'light' ? 20 : 50}
          startHue={177}
        />
      </AnimWrapper>
    </Layout>
  );
}

const Header = styled.header`
  margin: 0 auto;
  text-align: center;
  max-width: ${rhythm(18)};
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  height: 500px;
  display: flex;
  width: 500px;
  backdrop-filter: blur(3px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 90vw;
    display: flex;
    backdrop-filter: none;
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

const Emoji = styled.span`
  font-size: 2.5em;
  display: inline-block;
  animation: wave 2s infinite forwards;
  transform-origin: bottom center;
  @keyframes wave {
    0% { transform: rotate(0deg) }
    20% { transform: rotate(-15deg) }
    40% { transform: rotate(13deg) }
    60% { transform: rotate(-10deg) }
    70% { transform: rotate(8) }
    80% { transform: rotate(-5) }
    90% { transform: rotate(3) }
    100% { transform: rotate(0) }
  }
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
  font-size: 1.2rem;
  width: 70%;
  @media (max-width: 700px) {
    width: unset;
  }
`;

export default Index;
