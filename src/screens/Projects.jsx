import React, { useEffect } from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../style";
import { getProjectGroup } from "../content/projects";
import Project from "../components/Project";
import { useRouteMatch } from "react-router-dom";
import Footer from "../components/Footer";


function Projects () {
  let match = useRouteMatch();
  const group = getProjectGroup(match.path);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <>
      <Section>
        <SectionTitle>{group.title}</SectionTitle>
        <ProjectWrapper>
          {group.projects.map((p, i) => (
            <Project
              key={p.url}
              reverse={i % 2 === 0}
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
      <Footer/>
    </>
  )
}

const ProjectWrapper = styled.div`
  width: 60%;
  @media (max-width: 700px) {
    width: 98%;
  }
`;

export default Projects;
