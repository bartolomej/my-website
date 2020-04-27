import React, { useEffect } from "react";
import styled from "styled-components";

function Project ({title, description, tags, preview, url}) {
  const videoRef = React.useRef();

  function handleMouseOver () {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  function handleMouseOut () {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <Container onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
      <TextWrapper>
        <Title>{title}</Title>
        <TagsWrapper>
          {tags.map(t => <Tag>{t}</Tag>)}
        </TagsWrapper>
        <Description>{description}</Description>
        <LaunchButton target="_blank" href={url}>
          Launch
        </LaunchButton>
      </TextWrapper>
      <PreviewWrapper>
        <PreviewInner>
          {preview.type === 'image' ? (
            <Image alt={title} src={preview.url}/>
          ) : (
            <Video ref={videoRef} loop>
              <source src={preview.url} type="video/mp4"/>
            </Video>
          )}
        </PreviewInner>
      </PreviewWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  flex-direction: row;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  margin: 0 .5em .5em 0;
  padding: 0 .9em;
  border-radius: 3px;
  color: rgba(255, 63, 129, 0.94);
  font-size: 14px;
  background-color: rgba(255, 63, 129, 0.09);
`;

const LaunchButton = styled.a`
  border: 2px solid ${props => props.theme.lightText};
  border-radius: 2px;
  color: ${props => props.theme.lightText};
  transition: 0.6s all ease;
  font-weight: bold;
  padding: 0 20px;
  margin-top: 10px;
  &:hover {
    background: ${props => props.theme.lightText};
    color: ${props => props.theme.light};
  }
`;

const PreviewWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    margin-top: 20px;
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  color: ${props => props.theme.primary};
`;

const Description = styled.p`
  color: ${props => props.theme.lightText};
  line-height: 1.7;
  max-width: 400px;
  margin: 5px 0;
`;

const PreviewInner = styled.div`
  height: 300px;
  width: 100%;
  background: black;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 700px) {
    height: 150px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  transition: 0.6s all ease;
  ${Container}:hover & {
    transform: scale(1.2);
  }
`;

const Video = styled.video`
  height: 100%;
  width: auto;
  transition: 0.6s all ease;
  ${Container}:hover & {
    transform: scale(1.2);
  }
`;

export default Project;
