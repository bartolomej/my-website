import React from 'react';
import styled, { css } from "styled-components";
import { ReactComponent as logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";


function Header ({ current }) {

  const RouterLink = ({ to, children }) => (
    <RLink iscurrent={current === to} to={to}>
      {children}
    </RLink>
  );

  return (
    <Container>
      <LeftWrapper>
        <RLink to="/">
          <Logo/>
        </RLink>
      </LeftWrapper>
      <RightWrapper>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <ExternalLink rel="noreferrer" href="https://github.com/bartolomej">
          <UseAnimations style={{ display: 'flex' }} animationKey="github" size={30}/>
        </ExternalLink>
      </RightWrapper>
    </Container>
  )
}

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8vh;
  @media (max-width: 700px) {
    height: 12vh;
  }
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

const LinkStyle = css`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.1em;
  color: ${props => props.theme.lightText};
  transition: 0.6s all ease;
  &:hover {
    color: ${props => props.theme.vibrant};
  }
  @media (max-width: 300px) {
    font-size: 0.8em;
  }
`;

const RLink = styled(Link)`
  ${LinkStyle};
  margin-right: 20px;
  ${props => props.iscurrent ? `color: ${props.theme.vibrant}` : ''};
`;

const ExternalLink = styled.a`${LinkStyle}`;

const Logo = styled(logo)`
  height: 45px;
  width: 45px;
`;

export default Header;
