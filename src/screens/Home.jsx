import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Section, SectionTitle } from "../style";
import julia from "../assets/juliaset.png";
import projects from "../content/projects";
import ProjectGroup from "../components/ProjectGroup";
import photos from "../content/photos";
import Photo from "../components/Photo";
import text from '../content/text';
import DeveloperProfile from "../components/DeveloperProfile";
import github from '../content/github.json';


function Home () {

  return (
    <>
      <LandingWrapper>
        <Background alt="" src={julia}/>
        <TopRightBackground alt="" src={julia}/>
        <TextWrapper>
          <ShortAboutMe>Hi, my name is</ShortAboutMe>
          <Title>Bartolomej</Title>
          <ShortAboutMe>
            I’m a computer science student from Slovenia. I like coding, photography and mathematics,..
          </ShortAboutMe>
        </TextWrapper>
      </LandingWrapper>
      <Section>
        <DeveloperProfile
          avatar={'https://avatars2.githubusercontent.com/u/36109955?v=4'}
          fullName={'Bartolomej Kozorog'}
          bio={text.extensive_about_me}
          commitsUrl={'https://github.com/bartolomej?tab=repositories'}
          followersUrl={'https://github.com/bartolomej?tab=followers'}
          profileUrl={'https://github.com/bartolomej'}
          commits={github.commits}
          followers={github.followers}
          languages={github.languages}
        />
      </Section>
      <Section>
        <SectionTitle id="projects">My Projects</SectionTitle>
        <ProjectWrapper>
          {projects.map(g => (
            <ProjectGroup
              key={g.path}
              title={g.title}
              description={g.description}
              tags={g.tags}
              path={g.path}
              preview={g.preview}
            />
          ))}
        </ProjectWrapper>
      </Section>
      <Section>
        <SectionTitle id="gallery">My Photos</SectionTitle>
        <PhotoWrapper>
          {photos.map(p => (
            <Photo
              key={p.src}
              src={p.src}
              caption={p.caption}
              orientation={p.orientation}
            />
          ))}
        </PhotoWrapper>
      </Section>
    </>
  );
}

const LandingWrapper = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: black;
  z-index: 0;
`;

const TopRightBackground = styled.img`
  position: absolute;
  width: 50vw;
  top: 0;
  right: 0;
  filter: blur(2px);
  transform: rotate(-20deg);
  @media (max-width: 1200px) {
    width: 40vw;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const Background = styled.img`
  position: absolute;
  bottom: 0;
  filter: blur(2px);
  @media (max-width: 700px) {
    height: 100vh;
    left: -40%;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-shadow: 3px 3px ${props => props.theme.lightText};
  font-size: 5em;
  color: ${props => props.theme.vibrant};
  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.3;
    font-size: 3em;
  }
`;

const ShortAboutMe = styled.p`
  font-family: 'Space Mono', monospace;
  max-width: 500px;
  text-align: center;
  margin-top: 5px;
  font-size: 1.3em;
  color: ${props => props.theme.lightText};
  @media (max-width: 700px) {
    font-size: 1.1em;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 1500px) {
    flex-direction: column;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Home;
