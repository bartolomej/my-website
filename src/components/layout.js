import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "@emotion/styled";
import { rhythm } from "../utils/typography"
import UseAnimations from "react-useanimations";
import { ThemeContext, ThemeLayout } from "../utils/theme";
import Navigation from "./navigation";

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

  return (
    <ThemeContext.Consumer>
      {theme => (
        <ThemeLayout theme={theme}>
          <Navigation theme={theme} location={location.pathname} />
          <main>{children}</main>
          <Footer>
            <SocialLink href={`https://github.com/${social.github}`} target="_blank">
              <UseAnimations animationKey='github' size={40}/>
            </SocialLink>
            <SocialLink href={`https://instagram.com/${social.instagram}`} target="_blank">
              <UseAnimations animationKey='instagram' size={40}/>
            </SocialLink>
            <SocialLink href={`https://linkedin.com/in/${social.linkedIn}`} target="_blank">
              <UseAnimations animationKey='linkedin' size={40}/>
            </SocialLink>
            <SocialLink href={`https://twitter.com/${social.twitter}`} target="_blank">
              <UseAnimations animationKey='twitter' size={40}/>
            </SocialLink>
          </Footer>
        </ThemeLayout>
      )}
    </ThemeContext.Consumer>
  )
}

const Footer = styled.footer`
  margin: 0 auto;
  padding: 50px 0;
  max-width: ${rhythm(24)};
  display: flex;
`;

const SocialLink = styled.a`
  margin: auto;
`;

export default Layout
