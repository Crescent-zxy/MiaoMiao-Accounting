import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Money from "views/Money";
import NoMatch from "views/NoMatch";
import Statistics from "views/Statistics";
import TagEdit from "views/TagEdit";
import Tags from "views/Tags";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/tags" component={Tags} />
      <Route path="/tags/:id" component={TagEdit} />
      <Route path="/money" component={Money} />
      <Route path="/statistics" component={Statistics} />
      <Redirect exact path="/" to="/money" />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
