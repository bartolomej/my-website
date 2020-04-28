import React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";



function About () {
  let match = useRouteMatch();

  return (
    <Root>
      {match}
    </Root>
  )
}

const Root = styled.div`
  background: ${props => props.theme.dark};
`;

export default About;
