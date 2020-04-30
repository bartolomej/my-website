import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from "./screens/Home";
import projects from "./content/projects";
import Projects from "./screens/Projects";
import Header from "./components/Header";
import Skills from "./screens/Skills";
import { theme } from "./style";
import { BackgroundAnimation } from "./animations";
import Footer from "./components/Footer";


function Router () {
  const location = useLocation();
  const [height, setHeight] = useState(0);

  const updateHeight = () => setHeight(document.querySelector('#container').clientHeight);

  useEffect(() => {
    setTimeout(updateHeight, 500);
  }, [location]);

  return (
    <div id="container">
      {height && (
        <BackgroundAnimation
          width={window.innerWidth}
          height={height}
          spacing={50}
          speed={0.03}
          style={{ position: 'absolute' }}
          color={theme.lightText}
        />
      )}
      <Header current={location.pathname}/>
      <Switch location={location}>
        <Route path="/" exact component={Home}/>
        <Route path="/skills" component={Skills}/>
        {projects.map(p => <Route key={p.path} path={p.path} component={Projects}/>)}
      </Switch>
      <Footer/>
    </div>
  )
}

export default Router;
