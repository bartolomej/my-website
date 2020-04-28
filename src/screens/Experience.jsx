import React from "react";
import { Section, SectionTitle } from "../style";
import experience from "../content/experience";
import ExperienceView from "../components/ExperienceView";
import styled from "styled-components";
import Footer from "../components/Footer";

function Experience () {

  return (
    <>
      <Section>
        <SectionTitle>My Experiences</SectionTitle>
        <ExperiencesWrapper>
          {experience.map(e => (
            <ExperienceView
              key={e.title}
              title={e.title}
              tools={e.tools}
              experience={e.experience}
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


export default Experience;
