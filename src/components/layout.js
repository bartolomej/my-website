import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled";
import { opacity, ThemeContext, ThemeLayout } from "../utils/theme";
import Navigation from "./navigation";
import Background from "./background";
import Footer from "./footer";


const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          description
          social {
            github
            instagram
            linkedIn
            twitter
          }
          title
        }
      }
    }
  `);

  return (
    <ThemeContext.Consumer>
      {theme => (
        <ThemeLayout theme={theme}>
          <Navigation theme={theme} location={location.pathname}/>
          <Main>{children}</Main>
          <Footer
            social={data.site.siteMetadata.social}
            author={data.site.siteMetadata.author}
          />
          <BackgroundWrapper>
            <Background animate={false} color={`rgb(149,138,177)`} size={5} />
          </BackgroundWrapper>
        </ThemeLayout>
      )}
    </ThemeContext.Consumer>
  )
}

const Main = styled.main`
  min-height: 70vh;
  padding-bottom: 80px;
  border-bottom: 2px dotted ${p => opacity(p.theme.gold, 0.4)};
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  & canvas {
    animation: 1s ease-in intro forwards;
  }
  @keyframes intro {
    0% { opacity: 0 }
    100% { opacity: 0.5 }
  }
`;

export default Layout
