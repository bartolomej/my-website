import React from 'react';
import Landing from "./components/Landing";
import styled from "styled-components";
import projects from './projects.json';
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
              title={p.title}
              description={p.description}
              image={p.image}
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
  flex-direction: column;
  align-items: center;
`;

const ProjectWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export default App;
