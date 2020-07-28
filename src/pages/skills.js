import React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import skillsList from "../../content/skills/list.json";
import { graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import SEO from "../components/seo";
import Tool from "../components/tool";


function Skills ({ data, location }) {

  return (
    <Layout location={location}>
      <SEO
        path={location.pathname}
        banner="skills-banner.png"
        title="My Skills"
        description="A showcase of my skills and professional / non professional experiences with programming, design and film making."
      />
      <h1>My Skills</h1>
      {skillsList.map((s, i) => (
        <SkillGroup id={s.id} key={s.title}>
          <TextSide>
            <h2>{i + 1}. {s.title}</h2>
            <div>{s.tools.map(key => <Tool key={key} toolKey={key}/>)}</div>
            {s.description.map((txt, i) => <p key={i} dangerouslySetInnerHTML={{ __html: txt }}/>)}
          </TextSide>
          <ImageSide>
            {data[s.id] && data[s.id].nodes.map((n, i) => (
              <OuterImage i={i} l={data[s.id].nodes.length} key={i}>
                <InnerImage>
                  <GatsbyImage fluid={n.childImageSharp.fluid}/>
                </InnerImage>
              </OuterImage>
            ))}
          </ImageSide>
        </SkillGroup>
      ))}
    </Layout>
  );
}

const SkillGroup = styled.article`
  display: flex;
  padding-bottom: 20vh;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 1300px) {
    width: 80%;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding-bottom: 0;
    width: 100%;
  }
`;

const TextSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
  p {
    margin-bottom: 0.8rem;
  }
  & > div {
    margin: 8px 0;
  }
  @media (max-width: 900px) {
    padding-right: 0;
  }
`;

const ImageSide = styled.div`
  flex: 1.5;
  display: flex;
  @media (max-width: 900px) {
    padding-top: 50px;
  }
`;

const OuterImage = styled.div`
  margin-top: ${p => (p.i) * 20}%;
  width: 15%;
  position: sticky;
`;

const InnerImage = styled.div`
  height: 350px;
   & > div {
    box-shadow: 0 10px 20px rgba(var(--color-heading),.2);
    border-radius: 8px;
    position: absolute !important;
    width: 600px;
    transition: 0.3s ease-in all;
  }
  & > div:hover {
    transform: translateY(-20px);
    box-shadow: 0 10px 20px rgba(var(--color-heading),.3);
  }
  @media (max-width: 700px) {
    height: 300px;
    & > div {
      width: 300px;
    }
  }
`;

export default Skills;

export const query = graphql`
  query {
    backend: allFile(filter: {relativeDirectory: {eq: "skills/backend"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    website: allFile(filter: {relativeDirectory: {eq: "skills/website"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    mobile: allFile(filter: {relativeDirectory: {eq: "skills/mobile"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    film: allFile(filter: {relativeDirectory: {eq: "skills/film"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    photography: allFile(filter: {relativeDirectory: {eq: "skills/photography"}}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
