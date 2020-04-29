import React from 'react';
import styled from "styled-components";
import { Route, Switch, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import Home from "./screens/Home";
import projects from "./content/projects";
import Projects from "./screens/Projects";
import Header from "./components/Header";
import { theme } from "./style";
import Skills from "./screens/Skills";
import { Background } from "./animations";


function Router () {
  const location = useLocation();

  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return pageTransitions.map(({ item: location, props, key }) => (
    <Page key={key} style={props}>
      <BackgroundWrapper>
        <Background spacing={50} color={theme.lightText}/>
      </BackgroundWrapper>
      <Header current={location.pathname}/>
      <Switch location={location}>
        <Route path="/" exact component={Home}/>
        <Route path="/skills" component={Skills}/>
        {projects.map(p => <Route key={p.path} path={p.path} component={Projects}/>)}
      </Switch>
    </Page>
  ))
}

const Page = styled(animated.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.dark};
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export default Router;
