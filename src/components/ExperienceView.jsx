import React from "react";
import styled from "styled-components";
import Preview from "./Preview";


function ExperienceView ({ title, experience, tools, description, previews }) {

  return (
    <Container>
      <TextWrapper>
        <Title>{title}</Title>
        <IconsWrapper>
          {tools.map(t => <Icon alt={t.title} src={t.icon}/>)}
        </IconsWrapper>
        <Description>
          {description}
        </Description>
      </TextWrapper>
      <ImagesWrapper>
        {previews && previews.map(p => (
          <PreviewWrapper>
            <Preview
              height={p.size || 200}
              key={p.url}
              type={p.type}
              url={p.url}
            />
          </PreviewWrapper>
        ))}
      </ImagesWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10% 0;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 30% 0;
  }
`;

const TextWrapper = styled.div`
  flex: 0.5;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ImagesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const PreviewWrapper = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    margin: 20px 0 0;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.light};
  font-size: 2em;
  line-height: 1.2;
  margin-bottom: 15px;
`;

const IconsWrapper = styled.div``;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  @media (max-width: 700px) {
    width: 30px;
    height: 30px;
  }
`;

const Description = styled.p`
  line-height: 1.2;
  font-size: 1.2em;
  color: ${props => props.theme.lightText};
`;

export default ExperienceView;
