import "./App.css";

import { Home } from "./components/layout/Home";
import { ContactUs } from "./components/layout/ContactUs";
import { Login } from "./components/layout/Login";
import { Summary } from "./components/layout/Summary";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={ContactUs} />
        <Route path="/Login" component={Login} />
        <Route path="/Summary/:movieId" component={Summary} />
      </Switch>
    </Router>
  );
}
