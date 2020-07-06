import React from "react";
import styled from "@emotion/styled";
import ReactSwitch from "react-switch";
import moonIcon from "../assets/moon-icon.svg";
import sunIcon from "../assets/sun-icon.svg";
import { rhythm } from "../utils/typography";
import { Link } from "gatsby";
import UseAnimations from "react-useanimations";


function Navigation ({ location, theme }) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Container>
      <PageLink loc={location} to="/">Bartolomej</PageLink>
      <OpenButton onClick={() => setOpen(!isOpen)}>
        <UseAnimations animationKey="menu4" size={30} />
      </OpenButton>
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
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${rhythm(35)};
  height: 8vh;
  @media (max-width: 700px) {
    margin: 0 10px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: ${p => p.isOpen ? `flex` : 'none'};
    position: absolute;
    flex-direction: column;
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
    padding: 10px;
    margin-top: 10px;
  }
`;

const PageLink = styled(Link)`
  margin-left: ${p => p.to !== '/' ? '20px' : ''};
  margin-right: ${p => p.to === '/gallery' ? '20px' : ''};
  ${p => p.loc === p.to ? `color: red` : ''};
  @media (max-width: 700px) {
    padding: 20px 0;
  }
`;

export default Navigation;
