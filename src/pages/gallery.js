import React from 'react';
import Layout from "../components/layout";
import GatsbyImage from 'gatsby-image';
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import UseAnimations from "react-useanimations";
import SEO from "../components/seo";


function Gallery ({ data, location }) {
  const [open, setOpen] = React.useState(null);

  return (
    <Layout location={location}>
      <SEO
        title="My Photo Gallery"
        description="A place where I keep some of my finest photos that I've taken or generated."
      />
      {open && (
        <FullImageWrapper>
          <CloseButton onClick={() => setOpen(null)}>
            <UseAnimations
              animationKey="plusToX"
              size={50}
              style={{ transform: 'rotate(45deg)', color: 'white' }}
            />
          </CloseButton>
          <FullImage fluid={open}/>
        </FullImageWrapper>
      )}
      <Wrapper>
        {data.allFile.nodes.map((img, i) => (
          <ImageBtn onClick={() => setOpen(img.childImageSharp.full)}>
            <Image key={i} fluid={img.childImageSharp.thumb}/>
          </ImageBtn>
        ))}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const FullImageWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  backdrop-filter: blur(3px) brightness(0.6);
  display: flex;
  justify-items: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
`;

const FullImage = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
`;

const ImageBtn = styled.button`
  margin-bottom: 50px;
  & img {
     transition: opacity 500ms ease 0s, transform 0.3s ease-in, filter 0.3s ease-in !important;
  }
  &:hover {
    & img {
      transform: scale(1.1);
      filter: brightness(1.5);
    }
  }
`;

const Image = styled(GatsbyImage)`
  border-radius: 8px;
  width: 300px;
  display: inline-block;
`;

export default Gallery;

export const query = graphql`
  query {
    allFile (filter:{ relativeDirectory: {eq: "gallery"}}, sort: {order: DESC, fields: relativePath}) {
      nodes {
        childImageSharp {
          thumb: fluid(maxWidth: 270, maxHeight: 270, quality: 60) {
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
