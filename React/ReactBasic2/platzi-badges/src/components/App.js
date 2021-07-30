import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./List";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
