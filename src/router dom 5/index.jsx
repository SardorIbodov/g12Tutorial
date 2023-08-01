import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";

export const RouterDom5 = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Navbar} />
        <Route path="/home" component={Navbar} />
        <Route path="/about" component={Navbar} />
        <Route path="/gallery" component={Navbar} />
        <Route path="/contact" component={Navbar} />
      </Switch>
      <Switch>
        <Route path="/" exact>
          <Home />
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <h1>404 Page not found</h1>
        </Route>
      </Switch>
      <button
        onClick={() => {
          <Redirect to="/contact" />;
        }}
      >
        Go home
      </button>
    </BrowserRouter>
  );
};

export default RouterDom5;
