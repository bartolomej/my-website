import React from 'react';
import styled from "styled-components";
import UseAnimations from "react-useanimations";
import julia from '../assets/juliaset.png'


function Footer () {

  return (
    <Container>
      <Background alt="" src={julia}/>
      <SocialMediaWrapper>
        <Link href="https://www.github.com/bartolomej">
          <UseAnimations animationKey="github" size={40} />
        </Link>
        <Link href="https://www.instagram.com/mejkozorog/">
          <UseAnimations animationKey="instagram" size={40} />
        </Link>
        <Link href="https://www.linkedin.com/in/bartolomej-kozorog-55419610b">
          <UseAnimations animationKey="linkedin" size={40} />
        </Link>
        <Link href="https://www.twitter.com/mkozorog">
          <UseAnimations animationKey="twitter" size={40} />
        </Link>
      </SocialMediaWrapper>
      <Link href={"https://bartolomej.github.io/portfolio-2019/"}>
        Last year's portfolio.
      </Link>
    </Container>
  )
}

const Container = styled.footer`
  height: 40vh;
  z-index: 0;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
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

const Link = styled.a`
  color: ${props => props.theme.lightText};
  transition: 0.3s all ease;
  font-weight: bold;
  &:hover {
    color: ${props => props.theme.vibrant};
    transform: scale(1.1);
  }
`;

export default Footer;
