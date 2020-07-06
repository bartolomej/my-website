import React from 'react';
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { rhythm } from "../utils/typography";
import SEO from "../components/seo";

function Index ({ data, location }) {
  return (
    <Layout location={location}>
      <SEO title={"Home"} />
      <Header>
        <Title>Bartolomej Kozorog</Title>
        <Description>I'm a young passionate developer from Slovenia.</Description>
      </Header>
    </Layout>
  )
}

const Header = styled.header`
  margin: 0 auto;
  max-width: ${rhythm(26)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const Title = styled.h1``;

const Description = styled.p``;

export default Index;
