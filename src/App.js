import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "./routes/routes";
import Layout from "./layout/layout";

class FBApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            {Routes.map(route => (
              <Route
                path={route.path}
                exact={route.exact}
                key={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default FBApi;
