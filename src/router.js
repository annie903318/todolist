import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import List from "./routes/List";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/list" exact component={List} />
    </Switch>
  </BrowserRouter>
);
