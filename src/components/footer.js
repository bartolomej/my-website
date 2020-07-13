import React from "react";
import styled from "@emotion/styled";
import UseAnimations from "react-useanimations";
import { rhythm } from "../utils/typography";


function Footer ({ author, social }) {

  return (
    <Container>
      <Inner>
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
      </Inner>
    </Container>
  )
}

const Container = styled.footer`
  background: ${p => p.theme.background};
  position: relative;
  z-index: 2;
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 70px 5px;
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
  border-radius: 50%;
  transition: 0.3s ease-in all;
  padding: 10px;
  width: 50px;
  height: 50px;
  box-shadow: none !important;
  &:hover {
    color: white;
    background: ${p => p.theme.red};
  }
`;

const CopyWrapper = styled.span`
  text-align: center;
  margin-top: 30px;
  font-size: 1rem;
`;

export default Footer;
