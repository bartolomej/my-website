import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { ThemeContext } from "../utils/theme";
import Navigation from "./navigation";
import Background from "./background";
import Footer from "./footer";
import { rhythm } from "../utils/typography";
import GlobalStyles from "../utils/styles";


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
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  const isHome = location.pathname === '/';

  return (
    <ThemeContext.Consumer>
      {() => (
        <RootWrapper isHome={isHome} ref={ref}>
          <GlobalStyles/>
          <Navigation
            location={location.pathname}
            isTransparent={isHome}
          />
          <Main isHome={isHome}>{children}</Main>
          {!isHome && (
            <Footer
              social={data.site.siteMetadata.social}
              author={data.site.siteMetadata.author}
            />
          )}
          {!isHome && (
            <CanvasContainer>
              <Background
                height={height}
                animate={false}
                color={`rgb(149,138,177)`} size={5}
              />
            </CanvasContainer>
          )}
        </RootWrapper>
      )}
    </ThemeContext.Consumer>
  );
};

const RootWrapper = styled.div`
  overflow: ${p => p.isHome ? 'hidden' : 'inherit'};
  background-color: rgb(var(--color-background));
  transition: all 0.4s ease;
`;

const Main = styled.main`
  padding: ${p => p.isHome ? '' : `13vh ${rhythm(3 / 4)}`};
  min-height: ${p => !p.isHome ? '100vh' : ''};
  @media (max-width: 700px) {
    padding: ${p => p.isHome ? '' : `15vh ${rhythm(3 / 4)};`};
  }
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

export default Layout;
