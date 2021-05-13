import Layout from "components/Layout";
import Nav from "components/Nav";
import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/tags" component={Tags} />
      <Route path="/money" component={Money} />
      <Route path="/statistics" component={Statistics} />
      <Redirect exact path="/" to="/money" />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

const Tags = () => (
  <Layout>
    <h2>Tags</h2>
  </Layout>
);

const Money = () => (
  <Layout>
    <h2>Tags</h2>
  </Layout>
);

const Statistics = () => (
  <Layout>
    <h2>Tags</h2>
  </Layout>
);

const NoMatch = () => (
  <div>
    <h2>页面不存在</h2>
  </div>
);

export default App;
