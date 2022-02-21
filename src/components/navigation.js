import React from "react";
import styled from "@emotion/styled";
import ReactSwitch from "react-switch";
import moonIcon from "../assets/moon-icon.svg";
import sunIcon from "../assets/sun-icon.svg";
import { Link } from "gatsby";
import UseAnimations from "react-useanimations";
import mobile from "is-mobile";
import logo from "../assets/logo.svg";
import { ThemeContext } from "../utils/theme";
import { THEMES } from "../utils/constants";


function Navigation ({ location, isTransparent = false }) {
  const [isOpen, setOpen] = React.useState(false);
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const ThemeSwitchBtn = () => (
    // defer theme switch rendering
    colorMode ? (
      <ThemeSwitch
        onChange={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        checked={colorMode === "dark"}
        onColor="#222"
        offColor="#333"
        checkedIcon={<img src={moonIcon} alt="Dark mode icon"/>}
        uncheckedIcon={<img src={sunIcon} alt="Light mode icon"/>}
        boxShadow={`0 0 2px 3px rgba(${THEMES.heading[colorMode]}, 0.6)`}
        activeBoxShadow={`0 0 2px 3px rgba(${THEMES.heading[colorMode]}, 0.6)`}
        aria-label="Color mode"
      />
    ) : null
  );

  const Links = ({ isMobile }) => isMobile ? (
    <MobileLinks>
      <PageLink loc={location} to="/projects">Projects</PageLink>
      <PageLink loc={location} to="/experience">Experience</PageLink>
      {/*<PageLink loc={location} to="/blog">Blog</PageLink>*/}
      <PageLink loc={location} to="/skills">Skills</PageLink>
      <PageLink loc={location} to="/gallery">Gallery</PageLink>
    </MobileLinks>
  ) : (
    <DesktopLinks>
      <PageLink loc={location} to="/projects">Projects</PageLink>
      <PageLink loc={location} to="/experience">Experience</PageLink>
      {/*<PageLink loc={location} to="/blog">Blog</PageLink>*/}
      <PageLink loc={location} to="/skills">Skills</PageLink>
      <PageLink loc={location} to="/gallery">Gallery</PageLink>
      <ThemeSwitchBtn/>
    </DesktopLinks>
  );
  return (
    <>
      {isOpen && <Links isMobile={true}/>}
      <Container transparent={isTransparent} navOpen={isOpen}>
        <HomeLink loc={location} to="/">
          <Logo alt="logo" src={logo}/>
        </HomeLink>
        {mobile() && <ThemeSwitchBtn/>}
        <OpenButton
          type="button"
          aria-expanded={isOpen}
          aria-controls="id-gkk1cs"
          aria-haspopup="dialog"
          aria-label="Toggle menu"
          onClick={() => setOpen(!isOpen)}>
          <UseAnimations animationKey="menu4" size={30}/>
        </OpenButton>
        <Links isMobile={false}/>
      </Container>
    </>
  );
}

const Container = styled.nav`
  z-index: 2;
  background: ${p => !p.transparent ? "rgba(var(--color-background), 0.6)" : ""};
  backdrop-filter: ${p => !p.transparent ? "blur(6px);" : ""};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 9vh;
  padding: 0 20px;
  transition: 300ms all;
  @media (max-width: 700px) {
    padding: 0 10px;
    ${p => p.navOpen ? `backdrop-filter: none; background: none;` : ""};
  }
`;

const MobileLinks = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    backdrop-filter: blur(6px);
    background: rgba(var(--color-background), 0.6);
    padding: 80px 20px;
  }
`;

const DesktopLinks = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: flex;
  }
`;

const ThemeSwitch = styled(ReactSwitch)`
  @media (min-width: 700px) {
    margin-left: 20px;
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
  margin-left: ${p => p.to !== "/" ? "20px" : ""};
  margin-right: ${p => p.to === "/gallery" ? "20px" : ""};
  ${p => !new RegExp(p.to).test(p.loc)
  ? `box-shadow: none; color: rgb(var(--color-navLink))`
  : `color: rgb(var(--color-navLinkActive))`};
  @media (max-width: 700px) {
    padding: 20px 0;
    margin: 0 20px;
    box-shadow: none;
    ${p => p.loc === p.to ? `font-weight: bold; font-size: 1.2rem;` : ""};
  }
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin: 0;
`;

export default Navigation;
