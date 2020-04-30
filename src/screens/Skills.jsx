import React from "react";
import { Section, SectionTitle } from "../style";
import experience from "../content/skills";
import SkillView from "../components/SkillView";


function Skills () {

  return (
    <Section>
      <SectionTitle>My Skills</SectionTitle>
      <div>
        {experience.map(e => (
          <SkillView
            key={e.title}
            title={e.title}
            tools={e.tools}
            previews={e.previews}
            description={e.description}
          />
        ))}
      </div>
    </Section>
  )
}

export default Skills;
