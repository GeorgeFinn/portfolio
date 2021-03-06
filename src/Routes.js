import React from "react";
import { Route, Switch } from "react-router-dom";
import { RouteContainer } from "./styles/animation.styles";
import { PoseGroup } from "react-pose";
import { Portfolio, Resume, SeniorDesign } from "./pages";

const Routes = () => (
  <Route
    render={({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.pathname}>
          <Switch location={location}>
            <Route exact path="/" component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route path="/seniordesign" component={SeniorDesign} />
          </Switch>
        </RouteContainer>
      </PoseGroup>
    )}
  />
);

export default Routes;
