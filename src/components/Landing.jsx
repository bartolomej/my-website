import React from 'react';
import styled from "styled-components";
import julia from '../assets/juliaset.png'

function Landing () {

  return (
    <Container>
      <Background src={julia}/>
      <TextWrapper>
        <HelloText>
          Hi, my name is
        </HelloText>
        <Title>
          Bartolomej Kozorog
        </Title>
        <ShortAboutMe>
          I’m a computer science student from Slovenia. I like coding, photography and mathematics,..
        </ShortAboutMe>
      </TextWrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: black;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  filter: blur(2px);
`;

const TextWrapper = styled.div`
  flex: 1;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HelloText = styled.p`
  font-family: 'Space Mono', monospace;
  color: ${props => props.theme.lightText};
`;

const Title = styled.h1`
  font-size: 3em;
  color: ${props => props.theme.vibrant};
  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.3;
  }
`;

const ShortAboutMe = styled.p`
  font-family: 'Space Mono', monospace;
  max-width: 600px;
  text-align: center;
  color: ${props => props.theme.lightText};
`;

export default Landing;
