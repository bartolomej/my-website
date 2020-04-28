import React from 'react';
import styled, { css } from "styled-components";
import { ReactComponent as logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";


function Navigation ({ current }) {

  const RouterLink = ({to, children}) => (
    <RLink iscurrent={current === to} to={to}>
      {children}
    </RLink>
  );

  return (
    <Container>
      <LeftWrapper>
        <Logo/>
      </LeftWrapper>
      <RightWrapper>
        <RouterLink to="/">Home</RouterLink>
        <ExternalLink href="/#projects">Projects</ExternalLink>
        <ExternalLink href="/#gallery">Photos</ExternalLink>
        <ExternalLink href="https://github.com/bartolomej">
          <UseAnimations style={{ display: 'flex' }} animationKey="github" size={30}/>
        </ExternalLink>
      </RightWrapper>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
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
  font-size: 1.3em;
  color: ${props => props.theme.lightText};
  margin-left: 20px;
  transition: 0.6s all ease;
  &:hover {
    color: ${props => props.theme.vibrant};
  }
  @media (max-width: 400px) {
    font-size: 0.8em;
  }
`;

const RLink = styled(Link)`
  ${LinkStyle};
  ${props => props.iscurrent ? `color: ${props.theme.vibrant}` : ''};
`;

const ExternalLink = styled.a`${LinkStyle}`;

const Logo = styled(logo)`
  height: 40px;
  width: 40px;
`;

export default Navigation;
