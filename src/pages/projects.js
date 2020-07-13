import React from 'react';
import Layout from "../components/layout";
import styled from "@emotion/styled";
import projectsList from '../../content/projects/list.json';
import { rhythm } from "../utils/typography";
import { graphql } from "gatsby";
import { opacity } from "../utils/theme";
import SEO from "../components/seo";
import GatsbyImage from "gatsby-image";


function Projects ({ data, location }) {

  const getImage = fileName => {
    for (let node of data.allFile.nodes) {
      if (new RegExp(fileName).test(node.relativePath)) {
        return node.childImageSharp.fluid;
      }
    }
    throw new Error(`File ${fileName} not matched`);
  }

  return (
    <Layout location={location}>
      <SEO
        title="My Projects"
        description="A place where I showcase some of my finest projects."
      />
      <Wrapper>
        {projectsList.map((p, i) => (
          <ProjectItem r={i % 2 === 0} key={p.title}>
            <TextWrapper r={i % 2 === 0}>
              <h3>{p.title}</h3>
              <TagWrapper>
                {p.tags.map(t => (
                  <Tag
                    r={i % 2 === 0}
                    target="_blank"
                    href={`https://github.com/topics/${t}`}>{t}</Tag>
                ))}
              </TagWrapper>
              <p>{p.description}</p>
              <div>
                {p.demo_url && (
                  <LinkBtn r={i % 2 === 0} href={p.demo_url} target="_blank">Visit demo</LinkBtn>
                )}
                {p.repo_url && (
                  <LinkBtn r={i % 2 === 0} href={p.repo_url} target="_blank">Github repo</LinkBtn>
                )}
              </div>
            </TextWrapper>
            <ImageWrapper>
              <GatsbyImage fluid={getImage(p.image)}/>
            </ImageWrapper>
          </ProjectItem>
        ))}
        <GHLink target="_blank" href={`https://github.com/${data.site.siteMetadata.social.github}`}>
          Visit my Github profile to view more projects 😃
        </GHLink>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70%;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const ProjectItem = styled.article`
  display: flex;
  padding: 10vh 0;
  flex-direction: ${p => p.r ? 'row-reverse' : 'row'};
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${p => p.r ? 'right' : 'left'};
  @media (min-width: 1000px) {
    padding-right: ${p => !p.r ? '50px': '0'};
    padding-left: ${p => p.r ? '50px': '0'};
  }
  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
  & > h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const TagWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

const Tag = styled.a`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 2em;
  padding: 0 10px;
  line-height: 22px;
  color: ${p => p.theme.link};
  margin-right: ${p => !p.r ? '5px' : '0'};
  margin-left: ${p => p.r ? '5px' : '0'};
  background: ${p => opacity(p.theme.link, 0.2)};
  transition: 0.2s ease-in all;
  box-shadow: none !important;
  &:hover {
    background: ${p => opacity(p.theme.link, 0.8)};
    color: ${p => p.theme.white};
  }
`;

const LinkBtn = styled.a`
  padding: 8px 15px;
  border-radius: 5px;
  transition: 0.2s ease-in all;
  border: 2px solid ${p => p.theme.link};
  box-shadow: inset 0px -0px ${p => p.theme.link};
  color: ${p => p.theme.link};
  margin-right: ${p => !p.r ? '10px' : '0'};
  margin-left: ${p => p.r ? '10px' : '0'};
  &:hover {
      box-shadow: inset 0px -50px ${p => p.theme.link};
      color: ${p => p.theme.white};
  }
  &:active {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  & > div { 
    transition: 0.3s ease-in all;
    border-radius: 8px; 
    box-shadow: 0 10px 20px rgba(0,0,0,.2);
  }
  & > div:hover {
    transform: translateY(-6px) scale(1.05);
  }
`;

const GHLink = styled.a`
  @media (max-width: 700px) {
    font-size: 0.7rem;
  }
`;

export default Projects;

export const query = graphql`
  query Photos {
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
