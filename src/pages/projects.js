import React from 'react';
import Layout from "../components/layout";
import styled from "@emotion/styled";
import projectsList from '../../content/projects/list.json';
import { rhythm } from "../utils/typography";
import { graphql } from "gatsby";
import { Video as GatsbyVideo } from 'gatsby-video'
import SEO from "../components/seo";


function Projects ({ data, location }) {

  const getVideos = name => {
    const nodes = data.allFile.nodes;
    for (let n of nodes) {
      if (new RegExp(name).test(n.relativePath)) {
        const videos = n.childVideoFfmpeg;
        return [videos.webm, videos.mp4];
      }
    }
    throw new Error(`Video ${name} not found`);
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
                {p.tags.map(t => <Tag r={i % 2 === 0} target="_blank" href={`https://github.com/topics/${t}`}>{t}</Tag>)}
              </TagWrapper>
              <p>{p.description}</p>
              <div>
                <LinkBtn r={i % 2 === 0} href={p.demo_url} target="_blank">Visit demo</LinkBtn>
                <LinkBtn r={i % 2 === 0} href={p.repo_url} target="_blank">Github repo</LinkBtn>
              </div>
            </TextWrapper>
            <VideoWrapper>
              <Video
                autoPlay
                muted
                loop
                sources={getVideos(p.video)}
              />
            </VideoWrapper>
          </ProjectItem>
        ))}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 60%;
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
  background: ${p => p.theme.opacity(p.theme.link, 0.2)};
  box-shadow: none;
  &:hover {
    background: ${p => p.theme.opacity(p.theme.link, 0.8)};
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
`;

const VideoWrapper = styled.div`
  flex: 1;
  & > div > div { border-radius: 8px; }
`;

const Video = styled(GatsbyVideo)`
  transition: 0.3s ease-in all;
  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
  }
`;

export default Projects;

export const query = graphql`
  query MyQuery {
    allFile(filter: {relativeDirectory: {eq: "projects"}}) {
      nodes {
        relativePath
        childVideoFfmpeg {
          webm: transcode(outputOptions: ["-crf 20", "-b:v 0"], maxWidth: 900, maxHeight: 480, fileExtension: "webm", codec: "libvpx-vp9") {
            width
            src
            presentationMaxWidth
            presentationMaxHeight
            originalName
            height
            fileExtension
            aspectRatio
          }
          mp4: transcode(maxWidth: 900, maxHeight: 480, fileExtension: "mp4", codec: "libx264") {
            width
            src
            presentationMaxWidth
            presentationMaxHeight
            originalName
            height
            fileExtension
            aspectRatio
          }
        }
      }
    }
  }
`;
