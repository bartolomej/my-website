import React from "react";
import styled from "styled-components";
import useFocus from "../useFocus";
import TagsView from "./TagsView";
import Preview from "./Preview";


function Project ({ title, description, tags, preview, url, repo, reverse = false }) {
  const ref = React.useRef();
  const isFocused = useFocus(ref);

  return (
    <Container ref={ref} reverse={reverse}>
      <TextWrapper reverse={reverse}>
        <Title>{title}</Title>
        <TagsView tags={tags}/>
        <Description>{description}</Description>
        <ButtonsWrapper>
          {url && (
            <Button target="_blank" href={url}>
              <span>Website</span>
            </Button>
          )}
          {repo && (
            <Button target="_blank" href={repo}>
              <span>Repository</span>
            </Button>
          )}
        </ButtonsWrapper>
      </TextWrapper>
      <PreviewWrapper>
        <Preview
          title={title}
          type={preview.type}
          url={preview.url}
          overflow={preview.overflow}
          background={preview.background}
          play={isFocused}
          isFocused={isFocused}
        />
      </PreviewWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  align-items: center;
  padding: 60px 0;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  flex-direction: row;
  ${props => props.reverse ? 'margin-left: 40px;' : 'margin-right: 40px;'};
  @media (max-width: 1100px) {
    margin: 30px 0 0;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.a`
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
  margin-right: 10px;
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

export default Project;
