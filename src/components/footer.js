import React from "react";
import styled from "@emotion/styled";
import UseAnimations from "react-useanimations";
import { rhythm } from "../utils/typography";


function Footer ({ author, social }) {

  return (
    <Container>
      <Inner>
        <SocialWrapper>
          <SocialLink
            title="My Github profile"
            href={`https://github.com/${social.github}`}
            target="_blank">
            <UseAnimations animationKey='github' size={30}/>
          </SocialLink>
          <SocialLink
            title="My Instagram profile"
            href={`https://instagram.com/${social.instagram}`}
            target="_blank">
            <UseAnimations animationKey='instagram' size={30}/>
          </SocialLink>
          <SocialLink
            title="My LinkedIn profile"
            href={`https://linkedin.com/in/${social.linkedIn}`}
            target="_blank">
            <UseAnimations animationKey='linkedin' size={30}/>
          </SocialLink>
          <SocialLink
            title="My Twitter profile"
            href={`https://twitter.com/${social.twitter}`}
            target="_blank">
            <UseAnimations animationKey='twitter' size={30}/>
          </SocialLink>
        </SocialWrapper>
        <CopyWrapper>
          Made with ❤️ by {author.name} &copy; {new Date().getFullYear()}
        </CopyWrapper>
      </Inner>
    </Container>
  );
}

const Container = styled.footer`
  box-shadow: inset 0 20px 20px 0 rgb(var(--color-background));
  backdrop-filter: blur(3px);
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
  backdrop-filter: blur(3px);
  margin: auto;
  border-radius: 50%;
  transition: 0.3s ease-in all;
  padding: 10px;
  width: 50px;
  height: 50px;
  box-shadow: none !important;
  &:hover {
    svg { color: white; }
    background: rgb(var(--color-red));
  }
`;

const CopyWrapper = styled.span`
  text-align: center;
  font-size: 1rem;
  width: fit-content;
  margin: 30px auto 0 auto;
  backdrop-filter: blur(3px);
`;

export default Footer;
