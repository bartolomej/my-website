import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import skillsList from '../../content/skills/list.json'
import { rhythm } from "../utils/typography";

function Skills ({ data, location }) {

  return (
    <Layout location={location}>
      <Wrapper>
        {skillsList.map(s => (
          <SkillItem>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </SkillItem>
        ))}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.article`
  margin: 0 auto;
  max-width: ${rhythm(26)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const SkillItem = styled.article``;

export default Skills;
