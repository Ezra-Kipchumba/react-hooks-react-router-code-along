import React from "react";
import {Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Messages from "./Messages";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      {/* because we've rendered the NavBar component outside the Switch component, it appears on each page, as desired. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
