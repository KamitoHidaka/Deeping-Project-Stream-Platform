import "./App.css";

import { Home } from "./components/layout/Home";
import { ContactUs } from "./components/layout/ContactUs";
import { Login } from "./components/layout/Login";
import { SignUp } from "./components/layout/SignUp";
import { RestoreInfo } from "./components/layout/RestoreInfo";
import { SKimetsu } from "./components/Summary/SKimetsu";
import { SIronman } from "./components/Summary/SIronman";
import { SKimi } from "./components/Summary/SKimi";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={ContactUs} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Restore-Info" component={RestoreInfo}/>
        <Route path="/Summary/Kimetsu" component={SKimetsu} />
        <Route path="/Summary/Iron-man" component={SIronman}/>
        <Route path="/Summary/Kimi-no-Nawa" component={SKimi}/>
      </Switch>
    </Router>
  );
}
