import React from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import { Section, SectionTitle } from "../style";
import julia from "../assets/juliaset.png";
import projects from "../content/projects";
import ProjectGroup from "../components/ProjectGroup";
import photos from "../content/photos";
import Photo from "../components/Photo";


function Home () {
  return (
    <>
      <LandingWrapper>
        <Background alt="" src={julia}/>
        <TextWrapper>
          <HelloText>
            Hi, my name is
          </HelloText>
          <Title>
            Bartolomej Kozorog
          </Title>
          <ShortAboutMe>
            I’m a computer science student from Slovenia. I like coding, photography and mathematics,..
          </ShortAboutMe>
          <ShortAboutMe>
            Follow me on <GithubLink target="_blank" href="https://github.com/bartolomej">Github</GithubLink>.
          </ShortAboutMe>
        </TextWrapper>
      </LandingWrapper>
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
      <Footer/>
    </>
  );
}

const LandingWrapper = styled.div`
  height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: black;
  box-shadow: 0 0 40px 20px black;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  filter: blur(2px);
`;

const TextWrapper = styled.div`
  flex: 1;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HelloText = styled.p`
  font-family: 'Space Mono', monospace;
  color: ${props => props.theme.lightText};
`;

const Title = styled.h1`
  text-shadow: 3px 3px ${props => props.theme.lightText};
  font-size: 4em;
  color: ${props => props.theme.vibrant};
  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.3;
    font-size: 3em;
  }
`;

const ShortAboutMe = styled.p`
  font-family: 'Space Mono', monospace;
  max-width: 600px;
  text-align: center;
  margin-top: 5px;
  font-size: 1em;
  color: ${props => props.theme.lightText};
`;

const GithubLink = styled.a`
  font-size: 1.2em;
  color: ${props => props.theme.vibrant};
  &:hover{
    color: ${props => props.theme.vibrant}
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Home;
