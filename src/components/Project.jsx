import React from "react";
import styled from "styled-components";

function Project ({title, description, image}) {

  return (
    <Container>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
      <PreviewWrapper>
        <ImageWrapper>
          <Image alt={title} src={image}/>
        </ImageWrapper>
      </PreviewWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

const TextWrapper = styled.div`
  flex: 1;
  flex-direction: row;
`;

const PreviewWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.5em;
  color: ${props => props.theme.vibrant};
`;

const Description = styled.p`
  color: ${props => props.theme.lightText};
`;

const ImageWrapper = styled.div`
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  transition: 0.6s all ease;
  ${Container}:hover & {
    transform: scale(1.2);
  }
`;

export default Project;
