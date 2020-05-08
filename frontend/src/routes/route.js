import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "../components/PrivateRoute/privateRoute";
import Sidebar from "../components/Sidebar/sidebar";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import {routes} from './links';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Sidebar routes={routes}>
          {routes.map((route) => (
            <PrivateRoute path={route.path} component={route.component}/>
          ))}
        </Sidebar>
      </Switch>
    </BrowserRouter>
  );
}
