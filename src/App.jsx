import React from 'react';
import Landing from "./components/Landing";
import styled from "styled-components";
import projects from './content/projects.js';
import photos from "./content/photos";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Photo from "./components/Photo";


function App () {
  return (
    <Root>
      <Navigation/>
      <Landing/>
      <Section>
        <SectionTitle id="projects">My Coding Projects</SectionTitle>
        <ProjectWrapper>
          {projects.map(p => (
            <Project
              key={p.url}
              url={p.url}
              title={p.title}
              tags={p.tags}
              description={p.description}
              preview={p.preview}
            />
          ))}
        </ProjectWrapper>
      </Section>
      <Section>
        <SectionTitle id="gallery">My Photo gallery</SectionTitle>
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
    </Root>
  );
}

const Root = styled.div`
  background: ${props => props.theme.dark};
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  color: ${props => props.theme.vibrant};
  text-underline: ${props => props.theme.vibrant};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 50px auto;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
`;

const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;
