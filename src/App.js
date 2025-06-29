import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHome from "./partials/MainHome";
import NetflixCaseStudy from "./partials/NetflixCaseStudy";
import InstagramCaseStudy from "./partials/InstagramCaseStudy";
import MininiProject from './partials/MininiProject';
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainHome} />
        <Route path="/netflix-case-study" component={NetflixCaseStudy} />
        <Route path="/instagram-case-study" component={InstagramCaseStudy} />
        <Route path="/minini-project" component={MininiProject} />
      </Switch>
    </Router>
  );
}

export default App;

