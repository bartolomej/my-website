import React from "react";
import styled from "styled-components";
import TagsView from "./TagsView";
import { Link } from "react-router-dom";
import { theme } from "../style";
import Preview from "./Preview";
import useFocus from "../useFocus";


function ProjectGroup ({ title, description, tags, preview, path }) {
  const ref = React.useRef();
  const isFocused = useFocus(ref);

  return (
    <Container ref={ref} to={path}>
      <Preview
        title={title}
        type={preview.type}
        url={preview.url}
        overflow={preview.overflow}
        background={preview.background}
        play={isFocused}
        isFocused={isFocused}
      />
      <Title>{title}</Title>
      <TagsView color={theme.lightText} tags={tags}/>
      <Description>{description}</Description>
    </Container>
  )
}

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h3`
  color: ${props => props.theme.light};
  margin: 8px 0;
`;

const Description = styled.p`
  color: ${props => props.theme.lightText};
  line-height: 1.5;
`;

export default ProjectGroup;
