import React from "react";
import styled from "styled-components";
import { colorWithOpacity } from "../style";
import UseAnimations from "react-useanimations";


function Project ({ title, description, tags, preview, url }) {
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
          {tags.map(t => <Tag key={t}>{t}</Tag>)}
        </TagsWrapper>
        <Description>{description}</Description>
        <LaunchButton target="_blank" href={url}>
          <span>Launch</span>
          <LinkSvg/>
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

function LinkSvg () {

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
        fill="currentColor"
      />
      <path
        d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
        fill="currentColor"
      />
      <path
        d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
        fill="currentColor"
      />
    </svg>
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
  @media (max-width: 700px) {
    width: 100%;
  }
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
  color: ${props => props.theme.vibrant};
  font-size: 14px;
  background-color: ${props => colorWithOpacity(props.theme.vibrant, 0.1)};
`;

const LaunchButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 80px;
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
  font-size: 1.7em;
  color: ${props => props.theme.light};
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
  max-width: 500px;
  background: black;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 700px) {
    height: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  transition: 0.6s all ease;
  ${Container}:hover & {
    transform: scale(1.2);
  }
  @media(max-width: 700px) {
    width: 100%;
  }
`;

const Video = styled.video`
  height: 100%;
  width: auto;
  transition: 0.6s all ease;
  ${Container}:hover & {
    transform: scale(1.2);
  }
  @media(max-width: 700px) {
    width: 100%;
  }
`;

export default Project;
