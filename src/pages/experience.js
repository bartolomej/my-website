import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import experienceList from "../../content/experience/list.json";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import GatsbyImage from "gatsby-image";


function Experience ({ data, location }) {

  const isLocalImage = fileName => !fileName.startsWith("http");

  const getImage = fileName => {
    if (!isLocalImage(fileName)) {
      return fileName;
    }
    for (let node of data.allFile.nodes) {
      if (new RegExp(fileName).test(node.relativePath)) {
        return node.childImageSharp.fluid;
      }
    }
    throw new Error(`File ${fileName} not matched`);
  };

  return (
    <Layout location={location}>
      <SEO
        path={location.pathname}
        banner="projects-banner.png"
        title="My Work Experience"
        description="A showcase of my professional work experience."
      />
      <h1>My Work Experience</h1>
      <ProjectsList>
        {experienceList.map((p, i) => {
          const img = getImage(p.image);
          return (
            <ProjectItem mod2={i % 2 === 0} key={p.title}>
              <TextWrapper mod2={i % 2 === 0}>
                <h2>{p.job_title}</h2>
                <MetaWrapper>
                  <span>{p.employment_type}</span>
                  <span>{`  `}·{`  `}</span>
                  <span>{p.time_span}</span>
                </MetaWrapper>
                <p dangerouslySetInnerHTML={{ __html: p.description }}/>
              </TextWrapper>
              <ImageWrapper>
                {isLocalImage(p.image) ? <GatsbyImage fluid={img}/> : <img alt={p.company} src={img} />}
              </ImageWrapper>
            </ProjectItem>
          )
        })}
        <GHLink target="_blank" href={`https://linkedin.com/in/${data.site.siteMetadata.social.linkedIn}`}>
          Visit my LinkedIn profile to view more activity 😃
        </GHLink>
      </ProjectsList>
    </Layout>
  );
}

const ProjectsList = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  @media (max-width: 1500px) {
    max-width: 70%;
  }
  @media (max-width: 1100px) {
    max-width: 90%;
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

const ProjectItem = styled.article`
  display: flex;
  width: 100%;
  padding-bottom: 20vh;
  flex-direction: ${p => p.mod2 ? "row-reverse" : "row"};
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${p => p.mod2 ? "right" : "left"};
  @media (min-width: 1000px) {
    padding-right: ${p => !p.mod2 ? "60px" : "0"};
    padding-left: ${p => p.mod2 ? "60px" : "0"};
  }
  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
  & > h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  & > p > a {
    color: rgb(var(--color-link));
  }
`;

const MetaWrapper = styled.div`
  * {
    font-style: italic;
  }
`;

const ImageWrapper = styled.div`
  flex: 1.4;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * { 
    max-height: 300px;
    transition: 0.3s ease-in all;
    border-radius: 8px; 
    box-shadow: 0 0 20px rgba(var(--color-heading),.2);
  }
  & > div:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(var(--color-heading),.3);
  }
`;

const GHLink = styled.a`
  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

export default Experience;

export const query = graphql`
  query ExperiencePhotos {
    allFile(filter: {relativeDirectory: {eq: "projects/photos"}}) {
      nodes {
        relativePath,
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    site {
      siteMetadata {
        social {
          github
        }
      }
    }
  }
`;
