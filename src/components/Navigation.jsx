import React from 'react';
import styled from "styled-components";
import { ReactComponent as logo } from "../logo.svg";


function Navigation () {
  return (
    <Container>
      <LeftWrapper>
        <Logo/>
      </LeftWrapper>
      <RightWrapper>
        <Link>Projects</Link>
        <Link>Gallery</Link>
        <Link>About</Link>
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
  font-weight: bold;
  color: ${props => props.theme.lightText};
  margin-left: 20px;
`;

const Logo = styled(logo)`
  height: 40px;
  width: 40px;
`;

export default Navigation;
