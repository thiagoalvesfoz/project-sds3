import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "components/footer";
import NavBar from "components/navbar";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
