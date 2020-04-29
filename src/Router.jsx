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


function Router () {
  const location = useLocation();

  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return pageTransitions.map(({ item: location, props, key }) => (
    <Page key={key} style={props}>
      <NavWrapper bcg={location.pathname === '/' ? 'black' : theme.dark}>
        <Navigation current={location.pathname}/>
      </NavWrapper>
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

const NavWrapper = styled.div`
  height: 8vh;
  background: ${props => props.bcg || 'black'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export default Router;
