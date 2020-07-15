import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled";
import { opacity, ThemeContext, ThemeLayout } from "../utils/theme";
import Navigation from "./navigation";
import Background from "./background";
import Footer from "./footer";


const Layout = ({ location, children }) => {
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

  const ref = React.useRef();
  const [height, setHeight] = React.useState(null);


  React.useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)
    }
  }, [ref]);

  return (
    <ThemeContext.Consumer>
      {theme => (
        <ThemeLayout innerRef={ref} theme={theme}>
          <Navigation theme={theme} location={location.pathname}/>
          <Main>{children}</Main>
          <Footer
            social={data.site.siteMetadata.social}
            author={data.site.siteMetadata.author}
          />
          <CanvasContainer>
            <Background
              height={height}
              animate={false}
              color={`rgb(149,138,177)`} size={5}
            />
          </CanvasContainer>
        </ThemeLayout>
      )}
    </ThemeContext.Consumer>
  )
}

const Main = styled.main`
  min-height: 80vh;
  padding-bottom: 80px;
`;

const CanvasContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  & canvas {
    animation: 1s ease-in intro forwards;
  }
  @keyframes intro {
    0% { opacity: 0 }
    100% { opacity: 0.5 }
  }
`;

export default Layout
