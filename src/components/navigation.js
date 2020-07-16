import React from "react";
import styled from "@emotion/styled";
import ReactSwitch from "react-switch";
import moonIcon from "../assets/moon-icon.svg";
import sunIcon from "../assets/sun-icon.svg";
import { rhythm } from "../utils/typography";
import { Link } from "gatsby";
import UseAnimations from "react-useanimations";
import { CSSTransition } from 'react-transition-group';
import mobile from 'is-mobile';
import logo from '../assets/logo.svg';
import "../utils/animations.css"

function Navigation ({ location, theme }) {
  const [isOpen, setOpen] = React.useState(false);

  const Links = () => (
    <LinkWrapper theme={theme} isOpen={isOpen}>
      <PageLink loc={location} to="/projects">Projects</PageLink>
      <PageLink loc={location} to="/blog">Blog</PageLink>
      <PageLink loc={location} to="/skills">My Skills</PageLink>
      <PageLink loc={location} to="/gallery">Gallery</PageLink>
      <ThemeSwitch
        onChange={() => theme.updateTheme(theme.name === "light" ? "dark" : "light")}
        checked={theme.name === "dark"}
        onColor="#222"
        offColor="#333"
        checkedIcon={<img src={moonIcon} alt="moon icon"/>}
        uncheckedIcon={<img src={sunIcon} alt="sun icon"/>}
        boxShadow="0 0 2px 3px #B38CD9"
        activeBoxShadow="0 0 2px 3px #dfb3e6"
      />
    </LinkWrapper>
  );

  return (
    <Container>
      <HomeLink loc={location} to="/">
        <Logo src={logo} />
      </HomeLink>
      <OpenButton onClick={() => setOpen(!isOpen)}>
        <UseAnimations animationKey="menu4" size={30}/>
      </OpenButton>
      {mobile() && (
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames={"nav"}>
          <Links/>
        </CSSTransition>
      )}
      {!mobile() && (
        <Links />
      )}
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 8vh;
  padding: 0 20px;
  @media (max-width: 700px) {
    margin: 0 10px;
    padding: 0;
    height: 12vh;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: ${p => p.isOpen ? `flex` : 'none'};
    position: absolute;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${p => p.theme.props.background};
    padding: 30px 0;
  }
`;

const ThemeSwitch = styled(ReactSwitch)`
  margin-left: 20px;
  @media (max-width: 700px) {
    margin: 50px auto;
  }
`;

const OpenButton = styled.button`
  display: none;
  z-index: 3;
  & > div {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 700px) {
    display: unset;
  }
`;

const HomeLink = styled(Link)`
  box-shadow: none;
  display: flex;
  align-items: center;
`;

const PageLink = styled(Link)`
  margin-left: ${p => p.to !== '/' ? '20px' : ''};
  margin-right: ${p => p.to === '/gallery' ? '20px' : ''};
  ${p => p.loc === p.to ? `color: ${p.theme.orange} !important; box-shadow: inset 0 -4px;` : ''};
  @media (max-width: 700px) {
    padding: 20px 0;
    margin: 0 20px;
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin: 0;
`;

export default Navigation;
