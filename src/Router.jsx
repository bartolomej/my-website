import React from 'react';
import styled from "styled-components";
import { Route, Switch, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import Home from "./screens/Home";
import projects from "./content/projects";
import Coding from "./screens/Coding";
import Navigation from "./components/Navigation";
import { theme } from "./style";
import Experience from "./screens/Experience";
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
      <Navigation current={location.pathname}/>
      <Switch location={location}>
        <Route path="/" exact component={Home}/>
        <Route path="/experience" component={Experience}/>
        {projects.map(p => <Route key={p.path} path={p.path} component={Coding}/>)}
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
