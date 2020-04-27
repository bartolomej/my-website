import React from 'react';
import styled from "styled-components";
import { ReactComponent as logo } from "../assets/logo.svg";
import UseAnimations from "react-useanimations";


function Navigation () {
  return (
    <Container>
      <LeftWrapper>
        <Logo/>
      </LeftWrapper>
      <RightWrapper>
        <Link href="#projects">Projects</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="https://github.com/bartolomej">
          <UseAnimations style={{display: 'flex'}} animationKey="github" size={30} />
        </Link>
      </RightWrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 8vh;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.3em;
  color: ${props => props.theme.lightText};
  margin-left: 20px;
  transition: 0.6s all ease;
  &:hover {
    color: ${props => props.theme.vibrant};
  }
`;

const Logo = styled(logo)`
  height: 40px;
  width: 40px;
`;

export default Navigation;
