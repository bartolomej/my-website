import React from 'react';
import styled from "styled-components";
import UseAnimations from "react-useanimations";
import julia from '../assets/juliaset.png'


function Footer () {

  return (
    <Container>
      <Background alt="" src={julia}/>
      <SocialMediaWrapper>
        <Link rel="noreferrer" href="https://www.github.com/bartolomej">
          <AnimatedIcon animationKey="github" size={40} />
          Github
        </Link>
        <Link rel="noreferrer" href="https://www.instagram.com/mejkozorog/">
          <AnimatedIcon animationKey="instagram" size={40} />
          Instagram
        </Link>
        <Link rel="noreferrer" href="https://www.linkedin.com/in/bartolomej-kozorog-55419610b">
          <AnimatedIcon animationKey="linkedin" size={40} />
          LinkedIn
        </Link>
        <Link rel="noreferrer" href="https://www.twitter.com/mkozorog">
          <AnimatedIcon animationKey="twitter" size={40} />
          Twitter
        </Link>
      </SocialMediaWrapper>
      <Link rel="noreferrer" style={{marginTop: 40}} href={"https://bartolomej.github.io/portfolio-2019/"}>
        Last year's portfolio.
      </Link>
    </Container>
  )
}

const Container = styled.footer`
  height: 40vh;
  width: 100%;
  z-index: 2;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 120px 50px black;
`;

const Background = styled.img`
  top: -30%;
  position: absolute;
  right: 0;
  left: 0;
  width: 100vw;
  -webkit-filter: blur(2px);
  filter: blur(2px)
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;

const AnimatedIcon = styled(UseAnimations)`
  height: 60px;
`;

const Link = styled.a`
  color: ${props => props.theme.lightText};
  transition: 0.3s all ease;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    color: ${props => props.theme.vibrant};
    transform: scale(1.1);
  }
`;

export default Footer;
