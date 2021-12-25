import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import UserItem from "./components/UserItem";
import newMember from "./components/newMember";

import history from "./history";

const Routes = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={UserItem} />
          <Route path="/addMember" component={newMember} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
