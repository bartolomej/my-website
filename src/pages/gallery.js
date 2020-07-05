import React from 'react';
import Layout from "../components/layout";
import GatsbyImage from 'gatsby-image';
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { rhythm } from "../utils/typography";


function Gallery ({ data, location }) {
  return (
    <Layout location={location}>
      <Wrapper>
        {data.allFile.nodes.map((img, i) => (
          <Image key={i} fluid={img.childImageSharp.thumb}/>
        ))}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const Image = styled(GatsbyImage)`
  border-radius: 8px;
  width: 300px;
  display: inline-block;
  margin-bottom: 50px;
`;

export default Gallery;

export const query = graphql`
  query {
    allFile (filter: { relativeDirectory: {eq: "gallery"}}) {
      nodes {
        childImageSharp {
          thumb: fluid(maxWidth: 270, maxHeight: 270) {
            ...GatsbyImageSharpFluid
          }
          full: fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
