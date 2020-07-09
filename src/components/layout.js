import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled";
import { rhythm } from "../utils/typography"
import { opacity, ThemeContext, ThemeLayout } from "../utils/theme";
import UseAnimations from "react-useanimations";
import Navigation from "./navigation";
import gatsby from '../assets/gatsby.svg';


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
  const social = data.site.siteMetadata.social;
  const author = data.site.siteMetadata.author;

  return (
    <ThemeContext.Consumer>
      {theme => (
        <ThemeLayout theme={theme}>
          <Navigation theme={theme} location={location.pathname}/>
          <Main>{children}</Main>
          <Footer>
            <SocialWrapper>
              <SocialLink href={`https://github.com/${social.github}`} target="_blank">
                <UseAnimations animationKey='github' size={30}/>
              </SocialLink>
              <SocialLink href={`https://instagram.com/${social.instagram}`} target="_blank">
                <UseAnimations animationKey='instagram' size={30}/>
              </SocialLink>
              <SocialLink href={`https://linkedin.com/in/${social.linkedIn}`} target="_blank">
                <UseAnimations animationKey='linkedin' size={30}/>
              </SocialLink>
              <SocialLink href={`https://twitter.com/${social.twitter}`} target="_blank">
                <UseAnimations animationKey='twitter' size={30}/>
              </SocialLink>
            </SocialWrapper>
            <CopyWrapper>
              Made with ❤️ by {author.name} &copy; {new Date().getFullYear()}
            </CopyWrapper>
            <GatsbyLink href="https://www.gatsbyjs.org/">
              <img alt="Gatsby" src={gatsby}/>
              Build using Gatsby Framework.
            </GatsbyLink>
          </Footer>
        </ThemeLayout>
      )}
    </ThemeContext.Consumer>
  )
}

const Main = styled.main`
  min-height: 70vh;
  border-bottom: 2px dotted ${p => opacity(p.theme.gold, 0.4)};
`;

const Footer = styled.footer`
  margin: 0 auto;
  padding: 70px 0;
  max-width: ${rhythm(24)};
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SocialWrapper = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  margin: auto;
`;

const CopyWrapper = styled.span`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
`;

const GatsbyLink = styled.a`
  margin-top: 30px;
  font-size: 12px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.name === 'dark' ? 'white' : 'black'} !important;
  & > img { 
    width: 100px;
    margin-bottom: 1.2rem;
    filter: ${p => p.theme.name === 'dark' ? 'invert(1)' : ''};
  }
`;

export default Layout
