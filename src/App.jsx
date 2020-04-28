import React from 'react';
import Landing from "./components/Landing";
import styled from "styled-components";
import projects from './content/projects.js';
import photos from "./content/photos";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Photo from "./components/Photo";
import Footer from "./components/Footer";


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
              repo={p.repo}
              title={p.title}
              tags={p.tags}
              description={p.description}
              preview={p.preview}
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
    </Root>
  );
}

const Root = styled.div`
  background: ${props => props.theme.dark};
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: ${props => props.theme.vibrant};
  margin-bottom: 20px;
  text-shadow: 1px 1px ${props => props.theme.lightText};
  @media (max-width: 700px) {
    text-align: center;
    line-height: 1.2;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 120px auto;
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
