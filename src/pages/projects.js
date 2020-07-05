import React from 'react';
import Layout from "../components/layout";
import styled from "@emotion/styled";
import projectsList from '../../content/projects/list.json';
import { rhythm } from "../utils/typography";

function Index ({ data, location }) {
  return (
    <Layout location={location}>
      <Main>
        {projectsList.map(p => (
          <article>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </article>
        ))}
      </Main>
    </Layout>
  )
}

const Header = styled.header``;

const Title = styled.h1``;

const Description = styled.p``;

const Main = styled.main`
  margin: 0 auto;
  max-width: ${rhythm(26)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

export default Index;
