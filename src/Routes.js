import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "./containers/NotFound";
/*
import Home from "./containers/Home";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
*/
import AppliedRoute from "./components/AppliedRoute";

import Notes from "./containers/Notes";

import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Project from "./containers/Project";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/project" exact component={Project} props={childProps} />
    {/*
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <AuthenticatedRoute path="/project/new" exact component={NewNote} props={childProps} />
    */}
    <UnauthenticatedRoute path="/" exact component={Project} props={childProps} />
    <UnauthenticatedRoute path="/project/:id" exact component={Notes} props={childProps} />
    <UnauthenticatedRoute path="/about" exact component={About} props={childProps} />
    <UnauthenticatedRoute path="/contact" exact component={Contact} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;