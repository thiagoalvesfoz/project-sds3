import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
