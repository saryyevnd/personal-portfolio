import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ROUTES_DATA from "./data.routes";

const Default = () => {
  return (
    <Switch>
      {ROUTES_DATA.map(({ Layout, data }) => {
        return data.map(({ path, Component, isExact, sortOrder }) => (
          <Route
            key={sortOrder}
            path={path}
            exact={isExact}
            render={(props) =>
              Layout ? (
                <Layout {...props}>
                  <Component {...props} />
                </Layout>
              ) : (
                <Component {...props} />
              )
            }
          />
        ));
      }).flat()}
      <Redirect to="/home" />
    </Switch>
  );
};

export default Default;
