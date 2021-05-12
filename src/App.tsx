import React from 'react';
import {
  HashRouter as Router,
  Route,Link,Redirect, Switch,
} from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li {
      width: 33.33%;
      text-align: center;
      padding: 16px;
    }
  }
`;

const App = () => (
  <Router>
    <Wrapper>
      <Main>
        <Switch>
          <Route path="/tags" component={Tags}/>
          <Route path="/money" component={Money}/>
          <Route path="/statistics" component={Statistics}/>
          <Redirect exact path="/" to="/money" />
          <Route component={NoMatch}/>
        </Switch>
      </Main>
      <Nav>
        <ul>
          <li><Link to="/tags">标签页</Link></li>
          <li><Link to="/money">记账页</Link></li>
          <li><Link to="/statistics">统计页</Link></li>
        </ul> 
      </Nav>
    </Wrapper>
  </Router>
)

const Tags = () => (
  <div>
    <h2>Tags</h2>
  </div>
)

const Money = () => (
  <div>
    <h2>Money</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Statistics = ({ match }) => (
  <div>
    <h2>Statistics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const NoMatch = () => (
  <div>
    <h2>页面不存在</h2>
  </div>
)

export default App;
