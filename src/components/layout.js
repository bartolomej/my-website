import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled";
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const path = location.pathname;
  return (
    <div>
      <Navigation>
        <PageLink loc={path} to="/">Bartolomej</PageLink>
        <div>
          <PageLink loc={path} to="/projects">Projects</PageLink>
          <PageLink loc={path} to="/blog">Blog</PageLink>
          <PageLink loc={path} to="/skills">My Skills</PageLink>
          <PageLink loc={path} to="/gallery">Gallery</PageLink>
        </div>
      </Navigation>
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </div>
  )
}

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${rhythm(35)};
  height: 8vh;
`;

const PageLink = styled(Link)`
  margin-left: ${p => p.to !== '/' ? '15px' : ''};
  ${p => p.loc === p.to ? `color: red`: ''}
`;

const Footer = styled.div`
  margin: 50px auto;
  max-width: ${rhythm(24)};
`;

export default Layout
