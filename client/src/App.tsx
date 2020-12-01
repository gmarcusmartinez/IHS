import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./screens/Landing";
import Login from "./screens/Login";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
