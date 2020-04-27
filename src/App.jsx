import React from 'react';
import Landing from "./components/Landing";
import styled from "styled-components";
import projects from './projects.js';
import Project from "./components/Project";
import Navigation from "./components/Navigation";


function App () {
  return (
    <Root>
      <Navigation/>
      <Landing/>
      <Section>
        <SectionTitle>My Coding Projects</SectionTitle>
        <ProjectWrapper>
          {projects.map(p => (
            <Project
              url={p.url}
              title={p.title}
              tags={p.tags}
              description={p.description}
              preview={p.preview}
            />
          ))}
        </ProjectWrapper>
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
  margin: 50px 0;
  flex-direction: column;
  align-items: center;
`;

const ProjectWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export default App;
