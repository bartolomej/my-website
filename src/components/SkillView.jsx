import React from "react";
import styled from "styled-components";
import Preview from "./Preview";


function SkillView ({ title, tools, description, previews }) {

  return (
    <Container>
      <TextSide>
        <TextWrapper>
          <Title>{title}</Title>
          <IconsWrapper>
            {tools.map((t, i) => <Icon key={i} alt={t.title} src={t.icon}/>)}
          </IconsWrapper>
          <Description>
            {description}
          </Description>
        </TextWrapper>
      </TextSide>
      <PreviewSide>
        {previews && previews.map((p,i) => (
          <PreviewWrapper index={i} total={previews.length} key={p.url}>
            <Preview
              height={300}
              key={p.url}
              type={p.type}
              url={p.url}
            />
          </PreviewWrapper>
        ))}
      </PreviewSide>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 30% 0;
    height: unset;
  }
`;

const TextSide = styled.div`
  flex: 0.5;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  backdrop-filter: blur(5px);
`;

const PreviewSide = styled.div`
  flex: 1;
  height: 70%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const PreviewWrapper = styled.div`
  position: absolute;
  transition: 0.6s all ease;
  top: ${props => `${props.index / props.total * 100}%`};
  left: ${props => `${props.index / props.total * 100}%`};
  @media (max-width: 700px) {
    margin: 20px 0 0;
    position: unset;
  }
  ${!window.isMobile.any ? 
    `&:hover {
      transform: scale(1.1);
      z-index: 5;
    }` 
  : ''};
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
  line-height: 1.4;
  font-size: 1.3em;
  margin-top: 20px;
  color: ${props => props.theme.lightText};
`;

export default SkillView;
