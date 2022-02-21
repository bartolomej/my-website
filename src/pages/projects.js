import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import projectsList from "../../content/projects/list.json";
import { graphql } from "gatsby";
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
  };

  return (
    <Layout location={location}>
      <SEO
        path={location.pathname}
        banner="projects-banner.png"
        title="My Projects"
        description="A place where I showcase some of my finest projects."
      />
      <h1>My Projects</h1>
      <ProjectsList>
        {projectsList.map((p, i) => (
          <ProjectItem mod2={i % 2 === 0} key={p.title}>
            <TextWrapper mod2={i % 2 === 0}>
              <h2>{p.title}</h2>
              <span>{p.date}</span>
              <TagWrapper>
                {p.tags.map(t => (
                  <Tag
                    key={t}
                    mod2={i % 2 === 0}
                    rel="noreferrer"
                    target="_blank"
                    href={`https://github.com/topics/${t}`}>{t}</Tag>
                ))}
              </TagWrapper>
              <p dangerouslySetInnerHTML={{ __html: p.description }}/>
              <div>
                {p.demo_url && (
                  <LinkBtn mod2={i % 2 === 0} href={p.demo_url} target="_blank">Visit</LinkBtn>
                )}
                {p.repo_url && (
                  <LinkBtn mod2={i % 2 === 0} href={p.repo_url} target="_blank">Code</LinkBtn>
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
  margin-right: ${p => !p.mod2 ? "5px" : "0"};
  margin-left: ${p => p.mod2 ? "5px" : "0"};
  background: rgba(var(--color-tags), 0.6);
  color: rgb(var(--color-light));
  backdrop-filter: opacity(0.6);
  transition: 0.2s ease-in all;
  box-shadow: none !important;
  &:hover {
    background: rgba(var(--color-tags), 0.8);
    color: rgb(var(--color-white));
  }
`;

const LinkBtn = styled.a`
  padding: 8px 24px;
  border-radius: 5px;
  transition: 0.2s ease-in all;
  border: 2px solid rgb(var(--color-button));
  box-shadow: inset 0px -0px rgb(var(--color-button));
  color: rgb(var(--color-button));
  margin-right: ${p => !p.mod2 ? "15px" : "0"};
  margin-left: ${p => p.mod2 ? "15px" : "0"};
  &:hover {
      box-shadow: inset 0px -50px rgb(var(--color-button));
      color: rgb(var(--color-buttonTextHover));
  }
  &:active {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  flex: 1.4;
  & > div { 
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
