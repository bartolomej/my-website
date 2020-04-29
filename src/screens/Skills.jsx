import React from "react";
import { Section, SectionTitle } from "../style";
import experience from "../content/skills";
import SkillView from "../components/SkillView";
import styled from "styled-components";
import Footer from "../components/Footer";

function Skills () {

  return (
    <>
      <Section>
        <SectionTitle>My Skills</SectionTitle>
        <ExperiencesWrapper>
          {experience.map(e => (
            <SkillView
              key={e.title}
              title={e.title}
              tools={e.tools}
              previews={e.previews}
              description={e.description}
            />
          ))}
        </ExperiencesWrapper>
      </Section>
      <Footer/>
    </>
  )
}

const ExperiencesWrapper = styled.div``;


export default Skills;
