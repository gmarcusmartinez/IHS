import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import * as screens from "./screens";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={screens.LandingScreen} />
        <Route exact path="/login" component={screens.LoginScreen} />
        <Route exact path="/contact" component={screens.ContactScreen} />
      </Switch>
    </>
  );
}

export default App;
