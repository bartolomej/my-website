import React from 'react';
import styled from "styled-components";

function Landing () {

  return (
    <Container>
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
`;

const ShortAboutMe = styled.p`
  font-family: 'Space Mono', monospace;
  color: ${props => props.theme.lightText};
`;

export default Landing;
