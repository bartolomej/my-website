import React from "react";
import styled from "styled-components";
import { colorWithOpacity } from "../style";


function TagsView ({ tags, color }) {

  return (
    <TagsWrapper>
      {tags.map(t => <Tag c={color} key={t}>{t}</Tag>)}
    </TagsWrapper>
  )
}

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  margin: 0 .5em .5em 0;
  padding: .3em .9em;
  font-family: 'Space Mono',monospace;
  border-radius: 3px;
  font-size: 12px;
  color: ${props => props.c || props.theme.vibrant};
  background-color: ${props => colorWithOpacity(props.c || props.theme.vibrant, 0.1)};
`;

export default TagsView;
